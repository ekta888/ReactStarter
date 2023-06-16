import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import CustomHeader from "components/Custom/CustomHeader";
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

export default function Forgotpassword() {
  const [email, setEmail] = useState();
  const [responseErrors, setResponseErrors] = useState();
  const [validationError, setValidationError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("dataaaa",data);
    await axios
      .post("/forgot-password", {
        email: data.email ? data.email : email,
      })
      .then((response) => {
        console.log(response);
        if (response.data.error && response.data.status === 400) {
          setValidationError(response.data.error);
        } else if (response.data.message && response.data.status === 400) {
          setResponseErrors(response.data.message);
        } else if (response.data.status === 200) {
          //set flash message here
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  };
  return (
    <>
      <Container fluid className="register">
        <CustomHeader />
        <ToastContainer />
        <Row className="justify-content-center">
          <Col md="6" className="mt-5">
            <Card className="">
              <div className="bg-white border-bottom">
                <div className="d-flex justify-content-center">
                  <div className="">
                    <h4 className="font-weight-bold">Forgot Password</h4>
                  </div>
                </div>
              </div>
              <Card.Body>
                <Row className="justify-content-center">
                  <Col md="12" className="">
                    <div className="ml-3">
                      <h3 className="">Hello,</h3>
                      <p>
                        We cannot simply send you your old password. A unique
                        link to reset your password has been generated for you.
                      </p>
                      <p>
                        Please enter your email address below, click the
                        following button, and then follow the instructions you
                        received in the mail to reset your password.
                      </p>
                      <br />
                      <Form className="" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group
                          className="col-md-7"
                          controlId="formBasicEmail"
                        >
                          <Form.Label className="">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            {...register("email", {
                              required: true,
                              pattern:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            })}
                          />
                          {errors.email && errors.email.type === "required" && (
                            <p className="error mt-1">Email is required.</p>
                          )}
                          {errors.email && errors.email.type === "pattern" && (
                            <p className="error mt-1">Email is not valid.</p>
                          )}
                          {validationError && (
                            <p className="error mt-1">
                              {validationError[0].msg}.
                            </p>
                          )}
                          {responseErrors && (
                            <p className="error mt-1">{responseErrors}</p>
                          )}
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
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
