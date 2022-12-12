import React from "react";

const GoBackBtn = ({ text, colour }) => {
  return (
    <button style={{ backgroundColor: colour }} className="btn">
      {text}
    </button>
  );
};

GoBackBtn.defaultProps = {
  text: "Go Back",
  colour: "red",
};

export default GoBackBtn;
