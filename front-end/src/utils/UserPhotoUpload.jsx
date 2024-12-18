import React, { useState } from "react";
import { useLoginContext } from "../context/userDetailsContext/userContext";

const PhotoUpload = () => {
  const {
    navigatePage,
    setnavigatePage,
    handleSubmit,
    handleInputChange,

    user,
  } = useLoginContext();
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
    await handleInputChange(e);
  };
  console.log(photo);

  return (
    <>
      {/* Photo Display */}
      <label htmlFor="photo-upload" className="cursor-pointer">
        {photo ? (
          <img
            src={photo}
            alt="Uploaded Preview"
            className="w-28 h-28 object-cover rounded-full border border-gray-300 shadow-md"
          />
        ) : (
          <div className="w-28 h-28 bg-gray-200 flex items-center justify-center rounded-full border border-gray-300 shadow-md">
            <span className="text-gray-500">No Photo</span>
          </div>
        )}
      </label>

      {/* File Input */}
      <input
        id="photo-upload"
        type="file"
        accept="image/*"
        className="hidden"
        name="img"
        value={user.img}
        onChange={handlePhotoChange}
      />
    </>
  );
};

export default PhotoUpload;
