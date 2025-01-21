import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ avatar, name, occupation, hobbies }) => {
  return (
    <div className="profile-card">
      <img className="profile-avatar" src={avatar} alt={`${name}'s avatar`} />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-occupation">Род деятельности: {occupation}</p>
      <p className="profile-hobbies">Хобби: {hobbies.join(", ")}</p>
    </div>
  );
};

export default ProfileCard;
