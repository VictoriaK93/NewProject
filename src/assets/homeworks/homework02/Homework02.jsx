import React from "react";
import ProfileCard from "../components/ProfileCard";

const Homework02 = () => {
  const users = [
    {
      avatar: "https://www.shopify.com/stock-photos/man",
      name: "Person1",
      occupation: "Designer",
      hobbies: ["Drawing", "Travelling"],
    },
    {
      avatar: "https://www.menshealth.com/health/a40971698/5-questions-your-doctor-wishes-youd-ask/",
      name: "Person2",
      occupation: "Doctor",
      hobbies: ["Travelling", "Swimming"],
    },
    {
      avatar: "https://www.cvexpres.com/teaching-jobs-schools/wp-content/uploads/2023/08/job_teacher_classroom_teacher.jpg",
      name: "Person3",
      occupation: "Teacher",
      hobbies: ["Photographie", "Cooking"],
    },
  ];

  return (
    <div>
      {users.map((user, index) => (
        <ProfileCard
          key={index}
          avatar={user.avatar}
          name={user.name}
          occupation={user.occupation}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
};

export default Homework02;
