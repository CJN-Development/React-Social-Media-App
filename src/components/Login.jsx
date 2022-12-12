import PropTypes from "prop-types";
import { BsFillEyeSlashFill } from "react-icons/bs";
import Loginbutton from "./Loginbutton";
import Signupbutton from "./SignupButton";
import { useState } from "react";

const Login = ({ title }) => {
  return (
    <div className="Login">
      <>
        <h1>{title}</h1>
        <form className="form-control">
          <div id="Username1">
            <input type="text" placeholder="Username" id="username" />
          </div>
          <div id="Password1">
            <input type="password" placeholder="Password" id="password" />
          </div>

          <Loginbutton />
          <p id="DHAA">Don't have an account?</p>
          <Signupbutton />
        </form>
      </>
    </div>
  );
};

Login.defaultProps = {
  title: "Login",
};

Login.propTypes = {
  title: PropTypes.string,
};

export default Login;
