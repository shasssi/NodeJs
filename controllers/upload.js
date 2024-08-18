const { put } = require("@vercel/blob");

const uploadImage = async (file) => {
  if (!file) return "";
  try {
    const blob = await put(file.originalname, file.buffer, {
      access: "public",
      multipart: "true",
      token: process.env.VERCEL_BLOB_TOKEN,
    });
    const arr = blob?.url?.split("/");
    const image = Array.isArray(arr) && arr[arr.length - 1];
    console.log("vercel blob", blob);
    return image;
  } catch (error) {
    console.log("File Upload error", error);
    return "";
  }
};

module.exports = uploadImage;
