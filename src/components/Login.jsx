// This is our login component that we call inside the home.jsx. It holds the form and it has all the needed state caribles that we needed to beable to login the user from our database 

// We had a issue with getting the user to persist through out the app so we could get the info needed on the main page


import PropTypes from "prop-types";
import Signupbutton from "./SignupButton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// the main function 
const Login = ({ title }) => {

  // State varibles that we used
  const [passWord, setPassWord] = useState("");
  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    
    const getData = async () => {
      const dataFromServer = await fetchData();
      setData(dataFromServer);
    };
    getData();
  }, []);

  // function that was used to fetch the users data from the db.json 
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/users");

    const data = await res.json();

    return data;
  };

  // this function checks if the user matches a user in the db.json and the navigates them to the main feeds page 

  const CheckUser = (e) => {
    data.forEach((user) => {
      if (user.username === userName && user.password === passWord) {
        navigate("/main");
      }
      e.preventDefault();
    });
  };


  // This is our from that we use to gather the info from the user so we can validate them so they can sign in 
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

// default props 

Login.defaultProps = {
  title: "Login",
};

Login.propTypes = {
  title: PropTypes.string,
};

export default Login;
