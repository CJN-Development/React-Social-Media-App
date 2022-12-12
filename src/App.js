import "./App.css";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <SignUpPage /> */}
      <Main />
    </div>
  );
}

export default App;
