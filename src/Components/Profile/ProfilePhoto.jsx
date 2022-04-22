import React from "react";
import profile from "./profile.jpg";

function ProfilePhoto() {
  return (
    <div>
      <img src={profile} alt="profile-pic" style={{ borderRadius: "50%" }} />
    </div>
  );
}

export default ProfilePhoto;
