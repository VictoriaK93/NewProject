import React from "react";
import MyInput from "../myInput/MyInput";
import MyButton from "../myButton/MyButton";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="form-container"
    >
      <h2 className="form-title">Login</h2>
      <MyInput
        name="login"
        type="text"
        placeholder="Enter your login"
        label="Login"
      />
      <MyInput
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
      />
      <MyInput
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Password"
      />
      <MyButton type="submit">Submit</MyButton>
    </form>
  );
};

export default LoginForm;