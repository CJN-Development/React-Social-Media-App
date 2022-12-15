import React from "react";
import { Link } from "react-router-dom";
import CreatePost from "./CreatePost";

const Header = () => {
  return (
    <div id="Header">
      <h2 id="JNC">JNC</h2>
      <input type="text" placeholder="Search for a friend . . ." id="Search" />
      <Link id="CreatePost" to="/CreatePost">
        Create Post
      </Link>
      <Link id="MyFeed" to="/Main">
        My Feed
      </Link>
      <Link id="SignOutLink" to="/">
        Sign Out
      </Link>
    </div>
  );
};

export default Header;
