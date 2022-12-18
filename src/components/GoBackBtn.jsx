// this is our go button component that goes back from the signup page 


import React from "react";
import { Link } from "react-router-dom";

const GoBackBtn = ({ text, colour }) => {
  return (
    <button
      style={{ backgroundColor: colour, borderRadius: "20px" }}
      className="btn"
    >

    {/* We Link to the / route which is our login page  */}
      <Link id="GoBackLink" to="/">
        {text}
      </Link>
    </button>
  );
};


// Setting the default props 
GoBackBtn.defaultProps = {
  text: "Go Back",
  colour: "black",
};

export default GoBackBtn;
