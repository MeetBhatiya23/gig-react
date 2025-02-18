import { v2 as coundinary } from "cloudinary";
import fs from "fs";

coundinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (path) => {
  try {
    const res = await coundinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("response for file ", res);
    return res;

  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null

  }

};

export default uploadOnCloudinary
