import React, { useState, useEffect } from "react";
//import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomHeader from "components/Custom/CustomHeader";
//import Cookies from 'js-cookie';
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
//import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [responseErrors, setResponseErrors] = useState();
  const [responseError, setResponseError] = useState();
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    axios
      .post("/login", {
        email: data.email ? data.email : email,
        password: data.password ? data.password : password,
      })
      .then(
        (response) => {
          if (response.data.status == 200) {
            console.log("data",data)
            console.log(rememberMe)
            localStorage.setItem("authToken", response.data.token);
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
        }
      );
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // Get stored email and password from localStorage
  const storedEmail = localStorage.getItem("email") || "";
  const storedPassword = localStorage.getItem("password") || "";
  const storedRememberMe = localStorage.getItem("rememberMe") === "true";
  return (
    <>
      <Container fluid className="register">
        <CustomHeader displayregbtn="true" />
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={4}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <div className="bg-white border-bottom">
                <div className="d-flex justify-content-center">
                  <div className="">
                    <h4 className="font-weight-bold">Sign In</h4>
                    {/* <p>
                    {" "}
                    Already have an account?
                    <a className="text-blue-600" href="#">
                      Log in
                    </a>
                  </p> */}
                  </div>
                </div>
              </div>

              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          defaultValue={storedEmail}
                          onChange={(e) => setEmail(e.target.value)}
                          {...register("email", {
                            required: true,
                            pattern:
                              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          })}
                        />
                        {errors.email && errors.email.type === "required" && (
                          <p className="error  mt-1">Email is required.</p>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                          <p className="error  mt-1">Email is not valid.</p>
                        )}
                        {responseError && responseError.type == "email" && (
                          <p className="error  mt-1">{responseError.error}</p>
                        )}
                        {responseErrors &&
                          responseErrors.map((respErr, index) => {
                            if (respErr.param == "email") {
                              return (
                                <p className="error  mt-1">{respErr.msg}</p>
                              );
                            }
                          })}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          defaultValue={storedPassword}
                          onChange={handlePasswordChange}
                          //onChnage={(e) => console.log("pasweee", e.target.value)}
                          {...register("password", { required: true })}
                        />
                        {errors.password && (
                          <p className="error  mt-1">Password is required</p>
                        )}
                        {responseError && responseError.type == "password" && (
                          <p className="error  mt-1">{responseError.error}</p>
                        )}
                        {responseErrors &&
                          responseErrors.map((respErr, index) => {
                            if (respErr.param == "password") {
                              return (
                                <p className="error  mt-1">{respErr.msg}</p>
                              );
                            }
                          })}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <Link to="/auth/forgotpassword" className="text-primary">
                            Forgot password?
                          </Link>
                        </p>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Label className="text-center">
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
                        </Form.Label>
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="dark"
                          type="submit"
                          className="text-uppercase btn-fill btn-dark btn btn-block"
                        >
                          Sign In
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
