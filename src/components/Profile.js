import React, { useState, useEffect } from "react";

const Profile = () => {
  const [imagePreview, setImagePreview] = useState(
    localStorage.getItem("profileImage") ||
      "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
  );

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      setImagePreview(reader.result);
      localStorage.setItem("profileImage", reader.result);
    };
  };

  const handleImageClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = handleImageChange;
    fileInput.click();
  };

  useEffect(() => {
    localStorage.setItem("profileImage", imagePreview);
  }, [imagePreview]);

  return (
    <div className="profile">
      <img src={imagePreview} onClick={handleImageClick} alt="Profile" />
    </div>
  );
};

export default Profile;
