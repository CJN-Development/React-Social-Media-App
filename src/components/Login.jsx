import PropTypes from "prop-types";
import Signupbutton from "./SignupButton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ title }) => {
  const [passWord, setPassWord] = useState("");
  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    //now fetch only users from your running server...
    const getData = async () => {
      const dataFromServer = await fetchData();
      setData(dataFromServer);
    };
    getData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/users");

    const data = await res.json();

    return data;
  };

  const CheckUser = (e) => {
    data.forEach((user) => {
      if (user.username === userName && user.password === passWord) {
        navigate("/main");
      }
      e.preventDefault();
    });
  };

  return (
    <div className="Login">
      <>
        <h1>{title}</h1>
        <form className="form-control" onSubmit={CheckUser}>
          <div id="Username1">
            <input
              type="text"
              placeholder="Username"
              id="username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div id="Password1">
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={(e) => {
                setPassWord(e.target.value);
              }}
            />
          </div>
          <input type="submit" id="Submit" />
          <p id="DHAA">Don't have an account?</p>
          <Signupbutton />
        </form>
      </>
    </div>
  );
};

Login.defaultProps = {
  title: "Login",
};

Login.propTypes = {
  title: PropTypes.string,
};

export default Login;
