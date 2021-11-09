import React from "react";
import "./SignIn.css";
import  useForm from "./useForms";

const SignIn = () => {
    const {handleChange, values} = useForm()
  return (
    <div className="sign-card">
      <form>
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
          <input
            type="text"
            name="email"
            className="form-input"
            placeholder="Enter Your email"
            value={values.email}
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter Your password"
            value={values.password}
            onChange={handleChange}
          ></input>
        </div>
        <div className="sign__input">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
