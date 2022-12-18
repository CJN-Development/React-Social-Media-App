// This is our sign up component that we us to add a use to the db.json.



import PropTypes from "prop-types";

import React from "react";

import { BsChevronCompactLeft } from "react-icons/bs";

import GoBackBtn from "./GoBackBtn";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

// Here is the main function for the component 

const SignUpPage = ({ title }) => {

  // These are the state varibles that we used in the component
  const [email, setEmail] = useState("");

  const [username, setUserName] = useState("");

  const [password, setPassWord] = useState("");

  const [users, setUsers] = useState([]);

  const Navigate = useNavigate();

  // this is the use effect that sets the users state varible after we fetch the users data from the json server 
  useEffect(() => {
    //now fetch only users from your running server...

    const getData = async () => {
      const dataFromServer = await fetchData();

      setUsers(dataFromServer);
    };

    getData();
  }, []);


  // This is the function that fetches the users data from the db 
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/users");

    const data = await res.json();

    return data;
  };

  //  this function adds tthe state varbibles values to the db.json through the POST method 

  const addData = async (user) => {
    const res = await fetch("http://localhost:5000/users", {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(user),
    });

    const data = await res.json();

    setUsers([...users, data]);
  };


  // this is the form for the sign up page w take the values and then update the state varibles from it 
  return (
    <div className="SignUpPage">
      <>
        <h1>{title}</h1>

        <form
          className="form-control"
          onSubmit={() => addData({ email, username, password })}
        >
          <div id="email">
            <input
              type="text"
              placeholder="Email"
              id="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div id="Username">
            <input
              type="text"
              placeholder="Username"
              id="username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>

          <div id="Password">
            <input
              type="text"
              placeholder="Password"
              id="password"
              onChange={(e) => {
                setPassWord(e.target.value);
              }}
            />
          </div>

          <input type="submit" id="Submit" />
          <p id="t">Once you submit click Go Back</p>
          <GoBackBtn />
        </form>
      </>
    </div>
  );
};

SignUpPage.defaultProps = {
  title: "Sign Up",
};

export default SignUpPage;
