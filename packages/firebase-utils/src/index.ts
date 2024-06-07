import { v4 as uuidv4 } from "uuid";
import { getStorage } from "firebase-admin/storage";
import admin from "firebase-admin";
const { Base64Decode } = require("base64-stream");

import { decryptToString } from "./secure-file";

// const serviceAccount = require("./service-account-key.json");
const secureServiceAccountKeyFile = "./service-account-key.json.secure";
const jsonStr = decryptToString(secureServiceAccountKeyFile);
const serviceAccount = JSON.parse(jsonStr);

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const storageBucketName = "renting-app-86d7d.appspot.com";

const storage = getStorage();
const bucket = storage.bucket(storageBucketName);
const db = admin.firestore();
const messaging = admin.messaging();

interface UploadImagePayload {
  path: string;
  buffer: Buffer;
  type: string;
}

interface FirebaseTokenPayload {
  firebaseMessagingToken: string;
  userId: string;
}

interface UserIdPayload {
  userId: string;
}

interface NotificationPayload {
  title: string;
  body: string;
  data?: { [key: string]: string };
  userId?: string;
}

type Token = string;

interface ImageData {
  base64String: string;
  type: string;
}

// interface IFirebaseUtils {
//   uploadImage: () => Promise<string>;
//   uploadBulkImages: () => Promise<string[]>;
//   saveFirebaseTokenToDatabase: () => Promise<void>;
//   getUserFirebaseTokenFromDatabase: () => Promise<Token | null>;
//   getAllTokens: () => Promise<Token[]>;
//   sendNotificationToAllTokens: () => Promise<void>;
//   sendNotificationToUser: () => Promise<void>;
// }

declare class FirebaseUtilsI {
  static uploadImage({
    path,
    buffer,
    type,
  }: UploadImagePayload): Promise<string>;
  static bufferStreamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer>;
  static uploadBulkImages(
    filesArray: ImageData[],
    path: string
  ): Promise<string[]>;
  static saveFirebaseTokenToDatabase({
    firebaseMessagingToken,
    userId,
  }: FirebaseTokenPayload): Promise<void>;
  static getUserFirebaseTokenFromDatabase({
    userId,
  }: UserIdPayload): Promise<Token | null>;
  static getAllTokens(): Promise<Token[]>;
  static sendNotificationToAllTokens(
    payload: NotificationPayload
  ): Promise<void>;
  static sendNotificationToUser(payload: NotificationPayload): Promise<void>;
  constructor();
}

class FirebaseUtils implements FirebaseUtilsI {
  static async uploadImage({
    path,
    buffer,
    type,
  }: UploadImagePayload): Promise<string> {
    const uniqueFileName = uuidv4();
    const fileReference = bucket.file(`${path}/${uniqueFileName}`);

    const writeFilePromise = new Promise<string>((resolve, reject) => {
      const blobStream = fileReference.createWriteStream({
        resumable: false,
        contentType: type,
      });

      blobStream.on("error", (error) => {
        reject(error);
      });

      blobStream.on("finish", async () => {
        await fileReference.makePublic();
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileReference.name}`;
        resolve(publicUrl);
      });

      blobStream.end(buffer);
    });

    return writeFilePromise;
  }

  static async bufferStreamToBuffer(
    stream: NodeJS.ReadableStream
  ): Promise<Buffer> {
    const chunks: Uint8Array[] = [];
    return new Promise((resolve, reject) => {
      stream.on("data", (chunk) => chunks.push(chunk));
      stream.on("end", () => resolve(Buffer.concat(chunks)));
      stream.on("error", reject);
    });
  }

  static async uploadBulkImages(
    filesArray: ImageData[],
    path: string
  ): Promise<string[]> {
    const promises = filesArray.map(async (imageData) => {
      const bufferStream = new Base64Decode();
      bufferStream.write(
        imageData.base64String.replace(/^data:image\/\w+;base64,/, "")
      );
      bufferStream.end();

      const buffer = await this.bufferStreamToBuffer(bufferStream);
      return this.uploadImage({ path, buffer, type: imageData.type });
    });

    return Promise.all(promises);
  }

  static async saveFirebaseTokenToDatabase({
    firebaseMessagingToken,
    userId,
  }: FirebaseTokenPayload): Promise<void> {
    await db.collection("users").doc(userId).set(
      {
        token: firebaseMessagingToken,
      },
      { merge: true }
    );
  }

  static async getUserFirebaseTokenFromDatabase({
    userId,
  }: UserIdPayload): Promise<Token | null> {
    const docRef = db.collection("users").doc(userId);
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      return docSnap.data()?.token || null;
    } else {
      console.log("No such Firebase Token Available!");
      return null;
    }
  }

  static async getAllTokens(): Promise<Token[]> {
    const tokens: Token[] = [];
    const snapshot = await db.collection("users").get();
    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data.token) {
        tokens.push(data.token);
      }
    });
    return tokens;
  }

  static async sendNotificationToAllTokens(
    payload: NotificationPayload
  ): Promise<void> {
    const tokens = await this.getAllTokens();
    if (tokens.length === 0) {
      console.log("No tokens found.");
      return;
    }

    const response = await messaging.sendEachForMulticast({
      tokens,
      notification: {
        title: payload.title,
        body: payload.body,
      },
      data: payload.data, // Optional: any additional data you want to send
    });

    console.log(
      `Successfully sent message: ${response.successCount} notifications sent.`
    );
    console.log(`${response.failureCount} notifications failed.`);
  }

  static async sendNotificationToUser(
    payload: NotificationPayload
  ): Promise<void> {
    const userFirebaseToken = await this.getUserFirebaseTokenFromDatabase({
      userId: payload.userId!,
    });

    if (!userFirebaseToken) {
      return console.error("No userId found in Firestore database!");
    }

    const response = await messaging.sendEachForMulticast({
      tokens: [userFirebaseToken],
      notification: {
        title: payload.title,
        body: payload.body,
      },
      data: payload.data, // Optional: any additional data you want to send
    });

    console.log(
      `Successfully sent message: ${response.successCount} notifications sent.`
    );
    console.log(`${response.failureCount} notifications failed.`);
  }

  constructor() {}
}

export { FirebaseUtils };
