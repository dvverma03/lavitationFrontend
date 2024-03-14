import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addId } from "./utils/idSlice";
import { addInvoice } from "./utils/invoiceslice";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const dispatch = useDispatch()

  const FormValidation = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      email
    );
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!emailRegex) return "Email is not valid";
    if (!passwordRegex) return "Password is not valid";
    return null;
  };

  const handleButton = () => {
    const message = FormValidation(email, password);
    setErrMessage(message);
    if (message) return;
  };

  axios.defaults.withCredentials=true
  const HandleSubmit = (e) => {
    e.preventDefault();
    const message = FormValidation(email, password);
    setErrMessage(message);

    if (!message) {
      axios
        .post("http://localhost:1234/login", {email, password })
        .then((res) => {
          const userId= res.data._id
          console.log(userId)
          dispatch(addId(userId))
          {res?.data?.products.length>0 && res.data.products.map((e)=>{
            dispatch(addInvoice(e))
          })}
        })
        .catch((err) => console.log(err));
        navigate("/invoice")
    }
  };

  useEffect(()=> {
    const token = document.cookie;
    const token1=token.substring(6,)
    axios.post("http://localhost:1234/browse",{token1})
    .then((res) => {
      const userId= res.data._id
      console.log(res)
      dispatch(addId(userId))
      {res?.data?.products.length>0 && res.data.products.map((e)=>{
        dispatch(addInvoice(e))
      })}
    })
    .catch((err) => console.log(err));

    token && navigate("/invoice")

  }, []);

  return (
    <div>
      <div>
        <img
          className="absolute opacity-65 h-[110vh] md:h-[100vh] w-[100vw]"
          src="https://t3.ftcdn.net/jpg/03/99/24/82/360_F_399248286_Ogm0T8CFeauN4Hdn42FqWfsCE02dJBbX.jpg"
          alt="Img loading"
        />
      </div>
      <form
        onSubmit={HandleSubmit}
        action="/invoice"
        className="absolute p-12 bg-black w-[90%] md:w-3/12 my-36 mx-auto text-white right-0 left-0 rounded-lg bg-opacity-80"
      >
        <h1 className="font-900 text-4xl py-4">
          Sign in
        </h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-800 rounded-lg"
        />
        <p className="text-red-500">{errMessage}</p>
        <button
          className="bg-red-700 p-3 my-6 w-full rounded-lg"
          onClick={handleButton}
        >
          Sign in
        </button>
        <Link to="/register">
        <p className="cursor-pointer">
            New to Invoice Generator? Sign up now
        </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
