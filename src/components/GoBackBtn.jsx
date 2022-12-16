import React from "react";
import { Link } from "react-router-dom";

const GoBackBtn = ({ text, colour }) => {
  return (
    <button
      style={{ backgroundColor: colour, borderRadius: "20px" }}
      className="btn"
    >
      <Link id="GoBackLink" to="/">
        {text}
      </Link>
    </button>
  );
};

GoBackBtn.defaultProps = {
  text: "Go Back",
  colour: "black",
};

export default GoBackBtn;
