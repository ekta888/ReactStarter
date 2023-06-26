import React, { useState, useEffect } from "react";
import "../../assets/css/custom.css";
import CustomHeader from "components/Custom/CustomHeader";
import { useLocation, useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { timeZoneDrp, countryDrp } from "common/common.js";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select";

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

export default function Register() {
  const location = useLocation();
  const history = useHistory();
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [lastname, setLastName] = useState();
  const [password, setPassword] = useState();
  const [companyname, setCompanyName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [phone, setPhoneNumber] = useState();
  const [state, setState] = useState();
  const [pincode, setPinCode] = useState();
  const [responseErrors, setResponseErrors] = useState();
  const [timezones, setTimezoneList] = useState();
  const [timezone, setTimezone] = useState(null);
  const [countrylist, setCountryList] = useState();
  const [country, setCountry] = useState();
  const [policyflag, setPolicyFlag] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { hash, pathname, search } = location;
  const userType = pathname == "/masteradmin" ? 0 : 1;
  const onSubmit = async (data) => {
    axios
      .post("/signup", {
        firstName: (data.username)?data.username:'',
        lastName: (data.lastname)?data.lastname:'',
        email: (data.email)?data.email:'',
        password: (data.password)?data.password:'',
        companyName: (data.companyname)?data.companyname:'',
        timezone: (data.timezone.value)?data.timezone.value:'',
        country: (country)?country:'',
        address: (address)?address:'',
        city: (city)?city:'',
        contactNumber: (phone)?phone:'',
        state: (state)?state:'',
        pincode: (pincode)?pincode:'',
        policyAccepted: (policyflag)?policyflag:'',
        userType: userType,
      })
      .then(
        (response) => {
          if (response.data.status === 200) { 
            if (userType == 1) {
              toast.success(response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
              });
              history.push(`/auth/resendmail/&?token=${response.data.code}`);
            } else {
              toast.success(response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
              });
              history.push("/admin/dashboard");
            }
          }
          if (response.data.status === 400) {
            toast.error(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        },
        (error) => {
          console.log("4444",error);
          setResponseErrors(error.response.data.error);
        }
      );
  };
  useEffect(() => {
    timeZoneDrp(setTimezoneList);
    countryDrp(setCountryList);
  }, []);
  return (
    <Container fluid className="register">
      <CustomHeader/>
      <ToastContainer />
      <Row className="justify-content-center">
        <Col md="6" className="mt-5">
          <Card className="">
            <div className="bg-white border-bottom">
              <div className="d-flex justify-content-center">
                <div className="">
                  <h4 className="font-weight-bold">Sign Up</h4>
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
              <Form onSubmit={handleSubmit(onSubmit)}>
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
                          onChange={(e) => setUserName(e.target.value)}
                          {...register("username", {
                            required: true,
                            minLength: 3,
                          })}
                        ></Form.Control>
                        {errors.username &&
                          errors.username.type === "required" && (
                            <p className="error">Username is required</p>
                          )}
                        {errors.username &&
                          errors.username.type === "minLength" && (
                            <p className="error">
                              Please enter name greater than 3 letter
                            </p>
                          )}
                        {responseErrors &&
                          responseErrors.map((respErr, index) => {
                            if (respErr.firstName) {
                              return (
                                <p className="error">{respErr.firstName}</p>
                              );
                            }
                          })}
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
                          onChange={(e) => setLastName(e.target.value)}
                          {...register("lastname", {
                            required: true,
                            minLength: 3,
                          })}
                        ></Form.Control>
                        {errors.lastname &&
                          errors.lastname.type === "required" && (
                            <p className="error">Lastname is required</p>
                          )}
                        {errors.lastname &&
                          errors.lastname.type === "minLength" && (
                            <p className="error">
                              Please enter last name greater than 3 letter
                            </p>
                          )}
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
                          onChange={(e) => setEmail(e.target.value)}
                          {...register("email", {
                            required: true,
                            pattern:
                              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          })}
                        ></Form.Control>
                      </Form.Group>
                      {errors.email && errors.email.type === "required" && (
                        <p className="error">Email is required.</p>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <p className="error">Email is not valid.</p>
                      )}
                      {console.log("44444444444",responseErrors)}
                      {responseErrors &&
                        responseErrors.map((respErr, index) => {
                          if (respErr.email) {
                            return <p className="error">{respErr.email}</p>;
                          }
                        })}
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
                        ></Form.Control>
                        {errors.password ? (
                          <p className="error">{errors.password.message}</p>
                        ) : null}
                        {responseErrors &&
                          responseErrors.map((respErr, index) => {
                            if (respErr.password) {
                              return (
                                <p className="error">{respErr.password}</p>
                              );
                            }
                          })}
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
                          onChange={(e) => setCompanyName(e.target.value)}
                          {...register("companyname", {
                            required: true,
                            minLength: 3,
                          })}
                        ></Form.Control>
                        {errors.companyname &&
                          errors.companyname.type === "required" && (
                            <p className="error">Company name is required</p>
                          )}
                        {errors.companyname &&
                          errors.companyname.type === "minLength" && (
                            <p className="error">
                              Please enter company name greater than 3 letter
                            </p>
                          )}
                        {responseErrors &&
                          responseErrors.map((respErr, index) => {
                            if (respErr.companyName) {
                              return (
                                <p className="error">{respErr.companyName}</p>
                              );
                            }
                          })}
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          Timezone
                        </label>
                        {/* <Select
                          {...register("timezone", { required: true })}
                          className="small"
                          value={timezones && timezone}
                          onChange={(value) =>  setTimezone(value.value)}
                          options ={ timezones && timezones.map((list,index)=>
                            ({ value: list.gmtOffset, label: list.timeZone + '('+list.gmtOffset+')'})
                        )}
                        /> */}
                        <Controller
                          name="timezone"
                          {...register("timezone", { required: true })}
                          control={control}
                          className="small"
                          defaultValue={null}
                          render={({ field }) => (
                            <Select
                            className="small"
                              {...field}
                              options={
                                timezones &&
                                timezones.map((list, index) => ({
                                  value: list.gmtOffset,
                                  label:
                                    list.timeZone + "(" + list.gmtOffset + ")",
                                }))
                              }
                            />
                          )}
                        />
                        {timezone == null && errors.timezone && (
                          <p className="error">Please select timezone</p>
                        )}
                        {responseErrors &&
                          responseErrors.map((respErr, index) => {
                            if (respErr.timezone) {
                              return (
                                <p className="error">{respErr.timezone}</p>
                              );
                            }
                          })}
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
                          onChange={(e) => setAddress(e.target.value)}
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
                          onChange={(e) => setCity(e.target.value)}
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
                          onChange={(e) => setState(e.target.value)}
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
                          onChange={(e) => setPinCode(e.target.value)}
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
                          //  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                          placeholder="333-444-5555"
                          className="form-control"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          Country
                        </label>
                        <Select
                          className="small"
                          onChange={(value) => setCountry(value.value)}
                          options={
                            countrylist &&
                            countrylist.map((clist, index) => ({
                              label: clist.nicename,
                              value: clist.id,
                            }))
                          }
                        />
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
                                type="checkbox"
                                onChange={(e) => setPolicyFlag(!policyflag)}
                                {...register("policyflag", { required: true })}
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>I agree
                              with the Privacy Policy
                            </Form.Check.Label>
                          </Form.Check>
                        </label>
                        {errors.policyflag && errors.policyflag && (
                          <p className="error">
                            Please accept Terms and Condition
                          </p>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
                <div className="d-grid gap-2 mx-auto">
                  <input
                    type="submit"
                    className="text-uppercase btn-fill btn-dark btn btn-block"
                    value="Sign Up"
                  />
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
