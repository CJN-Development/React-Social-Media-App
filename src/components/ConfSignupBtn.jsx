import React from "react";

const ConfSignupBtn = ({ text, colour }) => {
  return (
    <button style={{ backgroundColor: colour }} className="btn">
      {text}
    </button>
  );
};

ConfSignupBtn.defaultProps = {
  text: "Complete Sign Up",
  colour: "green",
};

export default ConfSignupBtn;
