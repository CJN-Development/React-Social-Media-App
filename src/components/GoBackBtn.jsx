import React from "react";
import { Link } from "react-router-dom";

const GoBackBtn = ({ text, colour }) => {
  return (
    <button style={{ backgroundColor: colour }} className="btn">
      <Link id="GoBackLink" to="/">
        {text}
      </Link>
    </button>
  );
};

GoBackBtn.defaultProps = {
  text: "Go Back",
  colour: "red",
};

export default GoBackBtn;
