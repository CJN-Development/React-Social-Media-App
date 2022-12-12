import React from "react";

const Loginbutton = ({ text, colour }) => {
  return (
    <button style={{ backgroundColor: colour }} className="btn">
      {text}
    </button>
  );
};

Loginbutton.defaultProps = {
  text: "Login",
  colour: "green",
};

export default Loginbutton;
