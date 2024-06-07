import crypto from "node:crypto";
import fs from "node:fs";

// Define the algorithm
const algorithm = "aes-256-gcm";

// Get the secret salt and passphrase from environment variables or use default values
const SECRET_SALT = process.env.SECRET_SALT || "Secret Salt You Should Update";
const SECRET_PASSPHRASE =
  process.env.SECRET_PASSPHRASE || "Secret Key You Should Update";

// Generate the secret key using scrypt
const secretKey: Buffer = crypto.scryptSync(SECRET_PASSPHRASE, SECRET_SALT, 32);

interface EncryptedData {
  iv: string;
  auth_tag: string;
  data: string;
}

function decryptToString(inputPath: string, key: Buffer = secretKey): string {
  console.log(`Decrypting ${inputPath}...`);

  const data: string = fs.readFileSync(inputPath, "utf8");

  const encryptedData: EncryptedData = JSON.parse(data);

  const decipher: crypto.DecipherGCM = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(encryptedData.iv, "hex")
  );

  decipher.setAuthTag(Buffer.from(encryptedData.auth_tag, "hex"));

  const decrypted: Buffer = Buffer.concat([
    decipher.update(Buffer.from(encryptedData.data, "base64")),
    decipher.final(),
  ]);

  return decrypted.toString("utf8");
}

export { decryptToString };
