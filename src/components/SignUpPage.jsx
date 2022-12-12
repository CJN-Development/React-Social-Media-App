import PropTypes from "prop-types";
import React from "react";
import { BsChevronCompactLeft } from "react-icons/bs";
import ConfSignupBtn from "./ConfSignupBtn";
import GoBackBtn from "./GoBackBtn";

const SignUpPage = ({ title }) => {
  return (
    <div className="SignUpPage">
      <>
        <h1>{title}</h1>
        <form className="form-control">
          <div id="email">
            <input type="text" placeholder="Email" id="Email" />
          </div>
          <div id="Username">
            <input type="text" placeholder="Username" id="username" />
          </div>
          <div id="Password">
            <input type="text" placeholder="Password" id="password" />
          </div>
          <div id="ConfPassword">
            <input type="text" placeholder="ConfirmPassword" id="ConfPass" />
          </div>

          <ConfSignupBtn />
          <GoBackBtn />
        </form>
      </>
    </div>
  );
};

SignUpPage.defaultProps = {
  title: "Sign Up",
};

export default SignUpPage;
