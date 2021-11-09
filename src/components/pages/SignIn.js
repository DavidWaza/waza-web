import React from "react";
import "./SignIn.css";
import useForm from "./useForms";
import validateInfo from "./validateInfo";

const SignIn = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validateInfo);
  return (
    <div className="sign-card">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="signin__text">Sign in Today!</h1>
        <p className="signin__subtext">To be part of the Conversation</p>
        <div className="sign__input">
          <input
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter Your username"
            value={values.username}
            onChange={handleChange}
          ></input>
          {errors.username && <p className="error_msg">{errors.username}</p>}
          <input
            type="text"
            name="email"
            className="form-input"
            placeholder="Enter Your email"
            value={values.email}
            onChange={handleChange}
          ></input>

          {errors.email && <p className="error_msg">{errors.email}</p>}
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter Your password"
            value={values.password}
            onChange={handleChange}
          ></input>

          {errors.password && <p className="error_msg">{errors.password}</p>}
        </div>
        <div className="sign__input">
          <button className="button" type="submit">
            Submit
          </button>

          <hr/>
          
          <button className="button btn-red" type="signUp">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
