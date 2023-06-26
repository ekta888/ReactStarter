import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
export default function Resetpassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const history = useHistory();
  const [password, setPassword] = useState();
  const [responseError, setResponseError] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get("token");
  console.log(token);
  const onSubmit = async (data) => {
    axios
      .post("/reset-password", {
        password: data.password ? data.password : password,
        confirmpassword: data.confirmpassword
          ? data.confirmpassword
          : confirmpassword,
        token: token,
      })
      .then((response) => {
        if (response.data.errors) {
          setResponseError(response.data.errors);
        } else if (response.data.status == 400) {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (response.data.status == 200) {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          window.setTimeout(function () {
            history.push("/auth/login");
          }, 3000);
        }
        console.log("response", response);
      });
  };
  return (
    <>
      <Container fluid className="register">
        <CustomHeader />
        <ToastContainer />
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={4}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <div className="bg-white border-bottom">
                <div className="d-flex justify-content-center">
                  <div className="">
                    <h4 className="font-weight-bold">Reset Password</h4>
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
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          {...register("password", {
                            required: true,
                            minLength: 8,
                          })}
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 8,
                              message: "Password must be 8 character long",
                            },
                            validate: (value) => {
                              return (
                                [
                                  /[a-z]/,
                                  /[A-Z]/,
                                  /[0-9]/,
                                  /[^a-zA-Z0-9]/,
                                ].every((pattern) => pattern.test(value)) ||
                                "Password must include lower, upper, number, and special chars"
                              );
                            },
                          })}
                        />
                        {errors.password ? (
                          <p className="error mt-1">
                            {errors.password.message}
                          </p>
                        ) : null}
                        {responseError &&
                          responseError.map((respErr, index) => {
                            if (respErr.path == "password") {
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
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          onChange={(e) => setConfirmpassword(e.target.value)}
                          {...register("confirmpassword", {
                            required: true,
                            validate: (val) => {
                              if (watch("password") != val) {
                                return "Your passwords do no match";
                              }
                            },
                          })}
                        />
                        {errors.confirmpassword &&
                          errors.confirmpassword.type == "required" && (
                            <p className="error mt-1">
                              Confirm password is required
                            </p>
                          )}
                        {errors.confirmpassword &&
                          errors.confirmpassword.type == "validate" && (
                            <p className="error mt-1">
                              {errors.confirmpassword?.message}
                            </p>
                          )}
                        {responseError &&
                          responseError.map((respErr, index) => {
                            if (respErr.path == "confirmpassword") {
                              return (
                                <p className="error  mt-1">{respErr.msg}</p>
                              );
                            }
                          })}
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="dark"
                          type="submit"
                          className="text-uppercase btn-fill btn-dark btn btn-block"
                        >
                          Reset Password
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
