import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import axios from "axios";
import { timeZoneDrp, countryDrp } from "common/common.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export default function Companyedit() {
  const storedDataString = localStorage.getItem("companyData");
  const storedData = JSON.parse(storedDataString);
  console.log("storedData----", storedData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [timezone, setTimezone] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sipprofile, setSipProfile] = useState("");
  const [role, setRole] = useState("");
  const [trunk, setTrunk] = useState("");
  const [channel, setChannel] = useState("");
  const [domain, setDomain] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPinCode] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");
  const [responseErrors, setResponseErrors] = useState("");
  const [timezones, setTimezoneList] = useState("");
  const [countrylist, setCountryList] = useState("");
   let defaultCountryOption = null;
   let defaultTimezoneOption = null;
  if (countrylist) {
    countrylist.forEach((clist) => {
      if (clist.id == storedData.country) {
        defaultCountryOption = { label: clist.nicename, value: clist.id };
      }
    });
  }
  if (timezones) {
    timezones.forEach((tlist) => {
      if (tlist.gmtOffset == storedData.timezone) {
        defaultTimezoneOption = {
          label: tlist.timeZone + "(" + tlist.gmtOffset + ")",
          value: tlist.gmtOffset
        };
      }
    });
  }
  console.log("defaultTimezoneOption", defaultTimezoneOption);

 
  const onSubmit = async (data) => {
  console.log("555555",data);
  console.log("9990",address);
    axios
      .put(`/editcompany/${storedData.companyId}`, {
        firstName: data.firstName ? data.firstName : "",
        lastName: data.lastName ? data.lastName : "",
        userName: data.userName ? data.userName : "",
        email: data.email ? data.email : "",
        password: data.password ? data.password : "",
        companyName: data.companyName ? data.companyName : "",
       // timezone: data.timezone.value ? data.timezone.value : storedData.timezone,
        timezone:"UTF-07:00",
        sipprofile: data.sipprofile ? data.sipprofile : "",
        role: data.role ? data.role : "",
        trunk: data.trunk ? data.trunk : "",
        channel: data.channel ? data.channel : "",
        domain: data.domain ? data.domain : "",
        country: country ? country : storedData.country,
        address: address ? address : storedData.address,
        city: city ? city : storedData.city,
        contactNumber: phone ? phone : storedData.phone,
        state: state ? state :storedData.state,
        pincode: pincode ? pincode : storedData.pincode,
        status: status ? status : storedData.status,
      })
      .then(
        (response) => {
          if (response.data.status === 200) {
            // window.scrollTo({
            //   top: 0,
            //   behavior: 'smooth',
            // });
            toast.success(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
          if (response.data.status === 400) {
            toast.error(response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        },
        (error) => {
          console.log("4444", error);
          setResponseErrors(error.response.data.error);
        }
      );
  };
  useEffect(() => {
    timeZoneDrp(setTimezoneList);
    countryDrp(setCountryList);
  }, []);
  return (
    <>
      <Container fluid>
        <ToastContainer />
        <Row className="justify-content-center">
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add Company</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label className="card-title font-weight-bold required-field">
                          First Name
                        </label>
                        <Form.Control
                          defaultValue={firstName || storedData.firstName}
                          name="firstName"
                          placeholder="First Name"
                          type="text"
                          onChange={(e) => setFirstName(e.target.value)}
                          {...register("firstName", {
                            required: true,
                            minLength: 3,
                          })}
                        ></Form.Control>
                        {errors.firstName &&
                          errors.firstName.type === "required" && (
                            <p className="error">This field is required</p>
                          )}
                        {errors.firstName &&
                          errors.firstName.type === "minLength" && (
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
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label className="card-title font-weight-bold required-field">
                          Last Name
                        </label>
                        <Form.Control
                          defaultValue={storedData.lastName}
                          name="lastName"
                          placeholder="Last Name"
                          type="text"
                          onChange={(e) => setLastName(e.target.value)}
                          {...register("lastName", {
                            required: true,
                            minLength: 3,
                          })}
                        ></Form.Control>
                        {errors.lastName &&
                          errors.lastName.type === "required" && (
                            <p className="error">This field is required</p>
                          )}
                        {errors.lastName &&
                          errors.lastName.type === "minLength" && (
                            <p className="error">
                              Please enter name greater than 3 letter
                            </p>
                          )}
                          {responseErrors &&
                          responseErrors.map((respErr, index) => {
                            if (respErr.lastName) {
                              return (
                                <p className="error">{respErr.lastName}</p>
                              );
                            }
                          })}
                      </Form.Group>
                    </Col>
                    {/* <Col className="pr-1" md="4">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          Timezone
                        </label>
                        {console.log(defaultTimezoneOption)}
                        <Controller
                          name="timezone"
                           {...register("timezone", { required: true })}
                          control={control}
                          className=""
                          render={({ field }) => (
                            <Select
                              className="small"
                              // Set the selected option
                             //onChange={(selectedOption) => field.onChange(selectedOption.value)} // Update form field value on change
                              onChange={(value) => setTimezone(value.value)}
                              options={
                                timezones &&
                                timezones.map((list, index) => ({
                                  value: list.gmtOffset,
                                  label:
                                    list.timeZone + "(" + list.gmtOffset + ")",
                                }))
                              }
                              value={defaultTimezoneOption}
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
                    </Col> */}
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label className="card-title font-weight-bold required-field">
                          Company
                        </label>
                        <Form.Control
                          defaultValue={storedData.companyName}
                          name="company"
                          placeholder="Company"
                          type="text"
                          onChange={(e) => setCompanyName(e.target.value)}
                          {...register("companyName", {
                            required: true,
                            minLength: 3,
                          })}
                        ></Form.Control>
                        {errors.companyName &&
                          errors.companyName.type === "required" && (
                            <p className="error">This field is required</p>
                          )}
                        {errors.companyName &&
                          errors.companyName.type === "minLength" && (
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
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label className="card-title font-weight-bold required-field">
                          Username
                        </label>
                        <Form.Control
                          defaultValue={storedData.userName}
                          name="userName"
                          placeholder="Username"
                          type="text"
                          onChange={(e) => setUserName(e.target.value)}
                          {...register("userName", {
                            required: true,
                            minLength: 3,
                          })}
                        ></Form.Control>
                        {errors.userName &&
                          errors.userName.type === "required" && (
                            <p className="error">This field is required</p>
                          )}
                        {errors.userName &&
                          errors.userName.type === "minLength" && (
                            <p className="error">
                              Please enter company name greater than 3 letter
                            </p>
                          )}
                        {responseErrors &&
                          responseErrors.map((respErr, index) => {
                            if (respErr.userName) {
                              return (
                                <p className="error">{respErr.userName}</p>
                              );
                            }
                          })}
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label className="card-title font-weight-bold required-field">
                          Email address
                        </label>
                        <Form.Control
                          defaultValue={storedData.email}
                          name="email"
                          placeholder="Email"
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          {...register("email", {
                            required: true,
                            pattern:
                              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          })}
                        ></Form.Control>
                        {errors.email && errors.email.type === "required" && (
                          <p className="error">This field is required.</p>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                          <p className="error">Email is not valid.</p>
                        )}
                        {responseErrors &&
                          responseErrors.map((respErr, index) => {
                            if (respErr.email) {
                              return <p className="error">{respErr.email}</p>;
                            }
                          })}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label className="card-title font-weight-bold required-field">
                          Password
                        </label>
                        <Form.Control
                          defaultValue={storedData.password}
                          placeholder="Password"
                          type="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                          {...register("password", {
                            required: true,
                            minLength: 8,
                          })}
                          {...register("password", {
                            required: "This field is required",
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
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label className="card-title font-weight-bold required-field">
                          Sip Profile
                        </label>
                        <Controller
                          name="sipprofile"
                          // {...register("sipprofile", { required: true })}
                          control={control}
                          className="small"
                          defaultValue={null}
                          render={({ field }) => (
                            <Select
                              className="small"
                              onChange={(e) => setSipProfile(e.target.value)}
                              {...field}
                            />
                          )}
                        />
                        {sipprofile == null && errors.sipprofile && (
                          <p className="error">Please select sip-profile</p>
                        )}
                        {responseErrors &&
                          responseErrors.map((respErr, index) => {
                            if (respErr.sipprofile) {
                              return (
                                <p className="error">{respErr.sipprofile}</p>
                              );
                            }
                          })}
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label className="card-title font-weight-bold required-field">
                          Role
                        </label>
                        <Controller
                          name="role"
                          // {...register("role", { required: true })}
                          control={control}
                          className="small"
                          defaultValue={null}
                          render={({ field }) => (
                            <Select
                              className="small"
                              onChange={(e) => setRole(e.target.value)}
                              {...field}
                            />
                          )}
                        />
                        {role == null && errors.role && (
                          <p className="error">Please select role</p>
                        )}
                        {responseErrors &&
                          responseErrors.map((respErr, index) => {
                            if (respErr.role) {
                              return <p className="error">{respErr.role}</p>;
                            }
                          })}
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label className="card-title font-weight-bold required-field">
                          Trunk
                        </label>
                        <Controller
                          name="trunk"
                          // {...register("trunk", { required: true })}
                          control={control}
                          className="small"
                          defaultValue={null}
                          render={({ field }) => (
                            <Select
                              className="small"
                              onChange={(e) => setTrunk(e.target.value)}
                              {...field}
                            />
                          )}
                        />
                        {trunk == null && errors.trunk && (
                          <p className="error">Please select trunk</p>
                        )}
                        {responseErrors &&
                          responseErrors.map((respErr, index) => {
                            if (respErr.trunk) {
                              return <p className="error">{respErr.trunk}</p>;
                            }
                          })}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label className="card-title font-weight-bold required-field">
                          Status
                        </label>
                        <select
                          className="form-control small"
                          defaultValue={storedData.status}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option value="0">Active</option>
                          <option value="1">Inactive</option>
                        </select>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label className="card-title font-weight-bold required-field">
                          Channel
                        </label>
                        <Form.Control
                          defaultValue={storedData.channel}
                          name="channel"
                          placeholder="Channel"
                          type="text"
                          onChange={(e) => setChannel(e.target.value)}
                          {...register("channel", {
                            required: "This field is required",
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "Channel must be a number.",
                            },
                          })}
                        ></Form.Control>
                        {errors.channel && (
                          <p className="error">{errors.channel.message}</p>
                        )}
                        {responseErrors &&
                          responseErrors.map((respErr, index) => {
                            if (respErr.channel) {
                              return <p className="error">{respErr.channel}</p>;
                            }
                          })}
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label className="card-title font-weight-bold required-field">
                          Domain
                        </label>
                        <Form.Control
                          defaultValue={storedData.domain}
                          name="domain"
                          placeholder="Domain"
                          type="text"
                          onChange={(e) => setDomain(e.target.value)}
                          {...register("domain", {
                            required: true,
                          })}
                        ></Form.Control>
                        {errors.domain && errors.domain.type === "required" && (
                          <p className="error">This field is required</p>
                        )}
                        {responseErrors &&
                          responseErrors.map((respErr, index) => {
                            if (respErr.domain) {
                              return <p className="error">{respErr.domain}</p>;
                            }
                          })}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          Address
                        </label>
                        <Form.Control
                          // defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          defaultValue={storedData.address}
                          placeholder="Home Address"
                          type="text"
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
                          // defaultValue="Mike"
                          placeholder="City"
                          type="text"
                          defaultValue={storedData.city}
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
                          // defaultValue="Andrew"
                          defaultValue={storedData.state}
                          name="state"
                          placeholder="State"
                          type="text"
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
                          defaultValue={storedData.pincode}
                          name="pincode"
                          placeholder="ZIP Code"
                          type="number"
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
                          defaultValue={storedData.contactNumber}
                          name="phone"
                          placeholder="First Name"
                          type="text"
                          // onChange={(e) => setFirstName(e.target.value)}
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
                          value={defaultCountryOption}
                          onChange={(value) => setCountry(value.value)}
                          options={
                            countrylist &&
                            countrylist.map((clist) => ({
                              label: clist.nicename,
                              value: clist.id,
                            }))
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="col d-flex justify-content-center ">
                    <button
                      type="submit"
                      className="btn-primary btn-fill btn m-1"
                    >
                      Save
                    </button>
                    <Link
                      to="/admin/company"
                      className="btn btn-dark btn-fill m-1"
                    >
                      Back
                    </Link>
                  </div>
                  {/* <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button> */}
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
