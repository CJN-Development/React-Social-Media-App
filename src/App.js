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

function App() {
  return (
    <div className="container">
      {/* <Login /> */}
      <SignUpPage />
    </div>
  );
}

export default App;
