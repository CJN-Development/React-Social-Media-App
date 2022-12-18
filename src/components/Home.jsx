import React from "react";
import Login from "./Login";
import Header from "./Header";

// We created the home component to call or login page compopnent. We were a bit confused on how exactly to set up different pages in react so this is what we did 

const Home = () => {
  return (
    <div className="Home">
      <>
        <Login />
      </>
    </div>
  );
};

export default Home;
