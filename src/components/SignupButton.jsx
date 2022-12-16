import React from "react";
import { Link } from "react-router-dom";

const Signupbutton = ({ text, colour }) => {
  return (
    <button
      style={{ backgroundColor: colour, borderRadius: "20px" }}
      className="btn"
    >
      <Link id="SignUpBtnLink" to="/signup">
        {text}
      </Link>
    </button>
  );
};

Signupbutton.defaultProps = {
  text: "Sign up",
  colour: "black",
};

export default Signupbutton;
