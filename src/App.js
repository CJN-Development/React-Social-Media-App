// this is where we define our routes for the app... we were really unsure of how it works 100% but this seemed to work for us . react was really confusing and when we looked up anything online it was compleatly different from what we learned in class. Alot of resources use other packages in react i.e redux,axios. We are very confident that when we all get more practice in react we will get better! 

// 


import "./App.css";

import Login from "./components/Login";

import Home from "./components/Home";

import CreatePost from "./components/CreatePost";

import Post from "./components/Post";

import Header from "./components/Header";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

import SignUpPage from "./components/SignUpPage";

import Main from "./components/Main";

function App() {
  return (
    <div className="container">
      {/* <Login /> */}

      <Router>
        <Routes>
          <>
            <Route path="/signup" element={<SignUpPage />}></Route>
              {/* This is where we set the / route to take you to the login page  */}
            <Route path="/" element={<Home />}>
              {" "}
            </Route>

            <Route path="/main" element={<Main />}></Route>
            <Route path="/CreatePost" element={<CreatePost />}></Route>
            <Route path="/post" element={<Post />}></Route>
          </>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
