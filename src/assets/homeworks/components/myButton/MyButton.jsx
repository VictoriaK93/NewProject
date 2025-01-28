import React from "react";

const MyButton = ({ type = "button", children, onClick }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className="btn-primary"
    >
      {children}
    </button>
  );
};

export default MyButton;