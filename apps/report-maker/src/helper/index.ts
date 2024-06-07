type base64StringT = {
  base64String: string | ArrayBuffer | null;
  type: string;
};

export const convertImagesToBase64 = (imageFiles: File[] | FileList | null) => {
  if (!imageFiles) return;

  const promises = Array.from(imageFiles).map(
    (file): Promise<base64StringT> => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () =>
          resolve({ base64String: fileReader.result, type: file.type });
        fileReader.onerror = (error) => reject(error);
      });
    }
  );

  return Promise.all(promises);
};
