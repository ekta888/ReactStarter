import React, { useState, useEffect } from "react";
import "../../assets/css/custom.css";

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
} from "react-bootstrap";

export default function Register() {
  return (
    <Container fluid className="register">
      <Row className="justify-content-center">
        <Col md="6" className="mt-5">
          <Card className="">
            <div className="bg-white p-3 border-bottom">
              <div className="d-flex justify-content-between">
                <div>
                  {" "}
                  <img
                    alt="..."
                    className="avatar border-gray"
                    src={require("assets/img/logo.jpg")}
                  ></img>
                </div>
                <div className="">
                  <h4 className="card-title font-weight-bold">
                    Sign up here with credentials
                  </h4>
                </div>
              </div>
            </div>

            <Card.Body>
              <Form>
                <h6 className="text-uppercase text-secondary mb-3.5">
                  User Information
                </h6>
                <div className="m-3">
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          First Name
                        </label>
                        <Form.Control
                          placeholder="Creative Code Inc."
                          type="text"
                          name="username"
                          id="username"
                          className="form-control"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          Last Name
                        </label>
                        <Form.Control
                          placeholder="James"
                          type="text"
                          name="lastname"
                          id="lastname"
                          className="form-control"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          Email
                        </label>
                        <Form.Control
                          placeholder="jeo@gmail.com"
                          type="text"
                          name="email"
                          id="email"
                          className="form-control"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          Password
                        </label>
                        <Form.Control
                          placeholder="Password"
                          type="password"
                          name="password"
                          id="password"
                          className="form-control"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          Company Name
                        </label>
                        <Form.Control
                          placeholder="Coach"
                          type="text"
                          id="companyname"
                          name="companyname"
                          className="form-control"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          Timezone
                        </label>
                        <select className="form-control">
                          <option>1</option>
                        </select>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
                <hr className="mt-6 border-b-1"></hr>
                <h6 className="text-uppercase text-secondary">
                  Contact Information
                </h6>
                <div className="m-3">
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          Address
                        </label>
                        <Form.Control
                          placeholder="Home Address"
                          type="text"
                          name="address"
                          id="address"
                          className="form-control"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          City
                        </label>
                        <Form.Control
                          placeholder="Mike"
                          type="text"
                          name="city"
                          id="city"
                          className="form-control"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          State
                        </label>
                        <Form.Control
                          placeholder="Califonia"
                          type="text"
                          name="state"
                          id="state"
                          className="form-control"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          Postal Code
                        </label>
                        <Form.Control
                          placeholder="09321"
                          type="text"
                          id="pincode"
                          name="pincode"
                          className="form-control"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          Contact Number
                        </label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          id="phone"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          placeholder="333-444-5555"
                          className="form-control"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          Country
                        </label>
                        <select className="form-control">
                          <option>1</option>
                        </select>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
                <hr className="mt-6 border-b-1"></hr>
                <h6 className="text-uppercase text-secondary">
                  Privacy Policy
                </h6>
                <div className="m-3">
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                             I agree with the Privacy Policy
                            </Form.Check.Label>
                          </Form.Check>
                        </label>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                <button type="submit" className="text-uppercase btn-fill btn-dark btn btn-block">Create Account</button>
                </div>
               
                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
