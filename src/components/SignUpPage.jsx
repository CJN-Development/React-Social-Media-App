import PropTypes from "prop-types";

import React from "react";

import { BsChevronCompactLeft } from "react-icons/bs";

import GoBackBtn from "./GoBackBtn";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const SignUpPage = ({ title }) => {
  const [email, setEmail] = useState("");

  const [username, setUserName] = useState("");

  const [password, setPassWord] = useState("");

  const [users, setUsers] = useState([]);

  const Navigate = useNavigate();

  useEffect(() => {
    //now fetch only users from your running server...

    const getData = async () => {
      const dataFromServer = await fetchData();

      setUsers(dataFromServer);
    };

    getData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/users");

    const data = await res.json();

    return data;
  };

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
