import React from "react";
import "./UserProfile.css";

function UserProfile({ username, avatarImage }) {
  return (
    <div className="user-profile">
      <img className="avatar" src={avatarImage} alt={`${username}'s avatar`} />
      <h2 className="username">{username}</h2>
    </div>
  );
}

export default UserProfile;
