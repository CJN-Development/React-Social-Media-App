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
