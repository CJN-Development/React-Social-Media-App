// This is the header that we use on our feeds page .. it serves the purpose of holding the search bar and log out button...

import React from "react";
import { Link } from "react-router-dom";
import CreatePost from "./CreatePost";

const Header = () => {
  return (
    <div id="Header">
      <h2 id="JNC">JNC</h2>
      {/* Search bar that does nothing  */}
      <input type="text" placeholder="Search for a friend . . ." id="Search" />

      {/* Links to different sections of the app  */}
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
