import React, { useState, useEffect } from "react";
//import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import Cookies from 'js-cookie';
//import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [responseErrors, setResponseErrors] = useState();
  const [responseError, setResponseError] = useState();
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    axios.post('/login', {
      email: (data.email) ? data.email : email,
      password: (data.password) ? data.password : password
    })
      .then((response) => {
        if (response.data.status == 200) {
          localStorage.setItem('authToken', response.data.token);
          if (rememberMe) {
            // Store email and password in localStorage
            localStorage.setItem("email", data.email);
            localStorage.setItem("password", data.password);
            localStorage.setItem("rememberMe", true);
          } else {
            // Clear stored email and password from localStorage
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            localStorage.removeItem("rememberMe");
          }
          history.push("/admin/dashboard");
        }
        if (response.data.status == 400) {
          setResponseError(response.data);
        }
      },
        (error) => {
          console.log("----", error.response);
          setResponseErrors(error.response.data.errors);
        })
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // Get stored email and password from localStorage
  const storedEmail = localStorage.getItem("email") || "";
  const storedPassword = localStorage.getItem("password") || "";
  const storedRememberMe = localStorage.getItem("rememberMe") === "true";
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t  mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <span className="max-w-100-px h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                    <img alt="..." className="w-full h-full rounded-full align-middle border-none shadow-lg" src="/static/media/github.6c955556.svg" />

                  </span>
                  <h1 className="text-blueGray-700 text-sm text-2xl font-bold mt-2">Sign In</h1>
                </div>
                {/* <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/github.svg").default}
                    />
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/google.svg").default}
                    />
                    Google
                  </button>
                </div> */}
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                {/* <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                      defaultValue={storedEmail}
                    />
                    {errors.email && errors.email.type === "required" && (
                      <p className="error-p  mt-2">Email is required.</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                      <p className="error-p  mt-2">Email is not valid.</p>
                    )}
                    {responseError && responseError.type == 'email' && (
                      <p className="error-p  mt-2">{responseError.error}</p>
                    )}
                    {responseErrors && responseErrors.map((respErr, index) => {
                      if (respErr.param == 'email') {
                        return (
                          <p className="error-p  mt-2">{respErr.msg}</p>
                        );
                      }
                    })}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      onChange={handlePasswordChange}
                      //onChnage={(e) => console.log("pasweee", e.target.value)}
                      {...register("password", { required: true })}
                      defaultValue={storedPassword}
                    />
                    {errors.password && <p className="error-p  mt-2">Password is required</p>}
                    {responseError && responseError.type == 'password' && (
                      <p className="error-p  mt-2">{responseError.error}</p>
                    )}
                    {responseErrors && responseErrors.map((respErr, index) => {
                      if (respErr.param == 'password') {
                        return (
                          <p className="error-p  mt-2">{respErr.msg}</p>
                        );
                      }
                    })}
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        defaultChecked={rememberMe || storedRememberMe}
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    {/* <input
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    /> */}
                    <input type="submit" className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" value="Sign In" />
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link to="/auth/forgotpassword" className="text-blueGray-200">
                  <small>Forgot password?</small>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
