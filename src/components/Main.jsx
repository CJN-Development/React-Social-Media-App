// this is our main page where we call the components Header,CreatePost and Post... this was the only way we could figure to do it




import React from "react";
import Header from "./Header";
import CreatePost from "./CreatePost";
import Post from "./Post";
import Login from "./Login";

const Main = () => {
  return (
    <div className="MainPage">
      <>
        <Header />
        <CreatePost />
        <Post />
      </>
    </div>
  );
};

export default Main;
