import React from "react";

const MyInput = ({ name, type = "text", placeholder, label }) => {
  return (
    <div className="input-group">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
};

export default MyInput;