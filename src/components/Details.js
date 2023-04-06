import React, { useState, useEffect } from "react";

const Details = () => {
  const [imagePreview, setImagePreview] = useState(
    localStorage.getItem("profileImage") ||
      "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
  );
    const user = JSON.parse(localStorage.getItem("user"));
   
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
    <div className="details">
      <div className="holder">
        <label htmlFor="imageInput">
          <img
            src={imagePreview}
            alt=""
            className="profile-img"
            onClick={handleImageClick}
          /><span className="camera fa fa-camera" onClick={handleImageClick}></span>
              </label>
              
          </div>
          <hr/>
          <div className="nothing">
               <div>
              <label> FirstName:</label>
                <span className="extra">{user.firstName}</span> 
              </div>
              <hr/>
          <div>
              <label>LastName:</label>
              <span className="extra">{user.lastName}</span>
              </div>
              <hr/>
          <div>
              <label>Email:</label>
              <span className="extra">{user.email}</span>
              </div>
              <hr/>
          <div>
              <label>User Id:</label>
              <span className="extra">{user.id}</span>
              </div>
          </div>
         
          <div>
              </div>
    </div>
  );
};

export default Details;
