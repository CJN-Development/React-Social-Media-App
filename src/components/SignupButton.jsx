import React from "react";

const Signupbutton = ({ text, colour }) => {
  return (
    <button style={{ backgroundColor: colour }} className="btn">
      {text}
    </button>
  );
};

Signupbutton.defaultProps = {
  text: "Sign up",
  colour: "green",
};

export default Signupbutton;
