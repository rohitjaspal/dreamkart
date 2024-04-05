import React from "react";
import "../App.css";
import axios from "axios";
import { environment } from "../environment";
import { Link, useNavigate } from "react-router-dom";
import Account from "./account";
import { AuthCredential } from "./auth.interface";

const Login = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (authCredential: AuthCredential) => {
    try {
      const result = await axios.post(
        `${environment.baseURL}/auth/login`,
        authCredential
      );
      if (result.status === 200) {
        localStorage.setItem("token", result.data.data.token);
        navigate("/products");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Account onSubmitForm={handleFormSubmit} title="Login Form">
      Create New Account {""}
      <Link to="/signup">Register Now</Link>
    </Account>
  );
};

export default Login;
