import React from "react";
import axios from "axios";
import LoginIcon from "@mui/icons-material/Login";
import { useTranslation } from "react-i18next";

const ImageUploader = ({ file, setFile }) => {
  const { t } = useTranslation();

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFiles = Array.from(event.dataTransfer.files);

    if (
      uploadedFiles.length === 1 &&
      ["image/png", "image/jpeg"].includes(uploadedFiles[0].type)
    ) {
      setFile(uploadedFiles[0]);
    } else {
      alert("Please drop a single valid image file (PNG or JPEG).");
    }
  };

  const handleFileClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    if (
      selectedFiles.length === 1 &&
      ["image/png", "image/jpeg"].includes(selectedFiles[0].type)
    ) {
      setFile(selectedFiles[0]);
    } else {
      alert("Please select a single valid image file (PNG or JPEG).");
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        // Send the file to the backend for storage
        const response = await axios.post("your_backend_endpoint", formData);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      alert("Please upload a valid image file (PNG or JPEG).");
    }
  };

  return (
    <div className="max-height-draggable">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={handleFileClick}
        className="upload-draggable-text max-height-draggable"
      >
        {!file && (
          <>
            <LoginIcon className="upload-icons white-color" />
            <p className="white-color">{t("drop_an_image_here")}</p>
          </>
        )}
        {file && (
          <div>
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="image-preview"
            />
          </div>
        )}
      </div>
      <input
        type="file"
        id="imageInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
      />
      {/* <button onClick={handleUpload}>Upload</button> */}
    </div>
  );
};

export default ImageUploader;
