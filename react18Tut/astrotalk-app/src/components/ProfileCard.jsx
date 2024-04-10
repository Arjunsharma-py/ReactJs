import React from "react";
import profile_photo from "../assets/profile.jpg";

const ProfileCard = ({ user }) => {
  const { id, username, skills, languages, experience, price } = user;
  const handlechat = () => {
    //Navigate to chat
  };

  return (
    <>
      <div className="profile-card">
        <img
          src={profile_photo}
          alt="User Profile Picture"
          className="profile-picture"
        />
        <div className="user-info">
          <h2 className="user-name">{username}</h2>
          <p className="user-rating">Rating: ★★★★☆</p>
          <p className="user-skills">{skills.map((skill) => skill)}</p>
          <p className="user-languages">{languages.map((lang) => lang)}</p>
          <p className="user-experience">Exp: {experience} years</p>
          <p className="user-price">${price}/hr</p>
          <button className="contact-button" onClick={handlechat}>
            Chat
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
