import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useForm, ref } from "react-hook-form";
import axios from 'axios';
import { timeZoneDrp, countryDrp } from "common/common.js";
import { toast } from 'react-toastify';
//import countryDrp from "common/common.js";


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
  const [timezone, setTimezone] = useState();
  const [countrylist, setCountryList] = useState();
  const [country, setCountry] = useState();
  const [policyflag, setPolicyFlag] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { hash, pathname, search } = location;
  const userType = (pathname == '/masteradmin') ? 0 : 1;

  const onSubmit = async (data) => {
    axios.post('/signup', {
      firstName: data.username,
      lastName: data.lastname,
      email: data.email,
      password: data.password,
      companyName: data.companyname,
      timezone: data.timezone,
      country: country,
      address: address,
      city: city,
      contactNumber: phone,
      state: state,
      pincode: pincode,
      policyAccepted: policyflag,
      userType: userType
    })
      .then((response) => {
        if (response.data.status === 200) {
          if (userType == 1) {
            toast.success(response.data.message, {
              position: toast.POSITION.TOP_RIGHT
            });
            history.push(`/auth/resendmail/&?token=${response.data.code}`);
          } else {
            toast.success(response.data.message, {
              position: toast.POSITION.TOP_RIGHT
            });
            history.push("/admin/dashboard");
          }
        }
        if (response.data.status === 400) {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT
          });
        }
      },
        (error) => {
          setResponseErrors(error.response.data.error);
        })
  }

  useEffect(() => {
    timeZoneDrp(setTimezoneList);
    countryDrp(setCountryList);
  }, [])

  if (pathname == '/masteradmin') {
    return (
      <>
        {/* {console.log("errorr", responseErrors)} */}
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h1 className="text-blueGray-700 text-sm text-2xl font-bold mt-2">
                      Sign up here with credentials
                    </h1>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-400 text-center mb-3 font-bold">
                    {/* <small>Sign up here with credentials</small> */}
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Name"
                        onChange={(e) => setUserName(e.target.value)}
                        {...register("username", { required: true, minLength: 3 })}
                      />
                      {errors.username && errors.username.type === "required" && <p className="error-p  mt-2">Username is required</p>}
                      {errors.username && errors.username.type === "minLength" && <p className="error-p  mt-2">Please enter name greater than 3 letter</p>}
                      {responseErrors && responseErrors.map((respErr, index) => {
                        if (respErr.firstName) {
                          return (
                            <p className="error-p  mt-2">{respErr.firstName}</p>
                          );
                        }
                      })}
                    </div>

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
                        id="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                      />
                      {errors.email && errors.email.type === "required" && (
                        <p className="error-p  mt-2">Email is required.</p>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <p className="error-p  mt-2">Email is not valid.</p>
                      )}
                      {responseErrors && responseErrors.map((respErr, index) => {
                        if (respErr.email) {
                          return (
                            <p className="error-p  mt-2">{respErr.email}</p>
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
                        id="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        //  {...register("password", { required: true, minLength: 8 })}
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be 8 character long",
                          },
                          validate: (value) => {
                            return (
                              [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                                pattern.test(value)
                              ) || "Password must include lower, upper, number, and special chars"
                            );
                          },
                        })}
                      />
                      {errors.password ? <p className="error-p  mt-2">{errors.password.message}</p> : null}
                      {responseErrors && responseErrors.map((respErr, index) => {
                        if (respErr.password) {
                          return (
                            <p className="error-p  mt-2">{respErr.password}</p>
                          );
                        }
                      })}
                    </div>
                    <div className="text-center mt-6">
                      <input type="submit" className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 cursor-pointer" value="Create Account" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div >
      </>
    );
  } else {
    return (
      <>
        <div className="container mx-auto px-4 w-full xl:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            {/* <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="flex flex-wrap justify-center">
                <div className="max-w-100-px">
                  <img src={require("assets/img/logo.jpg").default} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                </div>

                <div className="text-right mb-3">
                  <h1 className="text-blueGray-700 text-sm text-2xl font-bold">
                    Sign up here with credentials
                  </h1>
                </div>
              </div>
            </div> */}
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <span className="max-w-100-px h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"><img alt="..." className="w-full h-full rounded-full align-middle border-none shadow-lg" src={require("assets/img/github.svg").default} /></span>
                <h1 className="text-blueGray-700 text-sm text-2xl font-bold mt-2">
                  Sign up here with credentials
                </h1>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Lucky"
                        onChange={(e) => setUserName(e.target.value)}
                        {...register("username", { required: true, minLength: 3 })}
                      />
                      {errors.username && errors.username.type === "required" && <p className="error-p  mt-2">Username is required</p>}
                      {errors.username && errors.username.type === "minLength" && <p className="error-p  mt-2">Please enter name greater than 3 letter</p>}
                      {responseErrors && responseErrors.map((respErr, index) => {
                        if (respErr.firstName) {
                          return (
                            <p className="error-p  mt-2">{respErr.firstName}</p>
                          );
                        }
                      })}

                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Jesse"
                        onChange={(e) => setLastName(e.target.value)}
                        {...register("lastname", { required: true, minLength: 3 })}
                      />
                      {errors.lastname && errors.lastname.type === "required" && <p className="error-p  mt-2">Lastname is required</p>}
                      {errors.lastname && errors.lastname.type === "minLength" && <p className="error-p  mt-2">Please enter last name greater than 3 letter</p>}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="jesse@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                      />
                      {errors.email && errors.email.type === "required" && (
                        <p className="error-p  mt-2">Email is required.</p>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <p className="error-p  mt-2">Email is not valid.</p>
                      )}
                      {responseErrors && responseErrors.map((respErr, index) => {
                        if (respErr.email) {
                          return (
                            <p className="error-p  mt-2">{respErr.email}</p>
                          );
                        }
                      })}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
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
                        id="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        {...register("password", { required: true, minLength: 8 })}
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be 8 character long",
                          },
                          validate: (value) => {
                            return (
                              [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                                pattern.test(value)
                              ) || "Password must include lower, upper, number, and special chars"
                            );
                          },
                        })}
                      />
                      {errors.password ? <p className="error-p  mt-2">{errors.password.message}</p> : null}
                      {responseErrors && responseErrors.map((respErr, index) => {
                        if (respErr.password) {
                          return (
                            <p className="error-p  mt-2">{respErr.password}</p>
                          );
                        }
                      })}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyname"
                        name="companyname"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Company Name"
                        onChange={(e) => setCompanyName(e.target.value)}
                        {...register("companyname", { required: true, minLength: 3 })}
                      />
                      {errors.companyname && errors.companyname.type === "required" && <p className="error-p  mt-2">Company name is required</p>}
                      {errors.companyname && errors.companyname.type === "minLength" && <p className="error-p  mt-2">Please enter company name greater than 3 letter</p>}
                      {responseErrors && responseErrors.map((respErr, index) => {
                        if (respErr.companyName) {
                          return (
                            <p className="error-p  mt-2">{respErr.companyName}</p>
                          );
                        }
                      })}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Timezone
                      </label>
                      <select {...register("timezone", { required: true })} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="timezone" id="timezone" onChange={(e) => setTimezone(e.target.value)} >
                        <option value="">Select Timezone</option>
                        {timezones && timezones.map((list, index) => (
                          < option key={index} value={list.gmtOffset} >
                            {list.timeZone} ({list.gmtOffset})
                          </option>
                        ))}
                      </select>
                      {errors.timezone && <p className="error-p  mt-2">Please select timezone</p>}
                      {responseErrors && responseErrors.map((respErr, index) => {
                        if (respErr.timezone) {
                          return (
                            <p className="error-p  mt-2">{respErr.timezone}</p>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        onChange={(e) => setAddress(e.target.value)}
                      //value={address && address}

                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="New York"
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="333-444-5555"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="State"
                        onChange={(e) => setState(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Country
                      </label>
                      {/* <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="United States"
                      /> */}
                      <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="country" id="country" onChange={(e) => setCountry(e.target.value)}>
                        {countrylist && countrylist.map((clist, index) => (
                          < option key={index} value={clist.id} >
                            {clist.nicename}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Postal Code" name="pincode" id="pincode" onChange={(e) => setPinCode(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Policy
                </h6>
                {/* <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Accept Policy
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </div> */}
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="registerTermsCondition"
                      name="registerTermsCondition"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      {...register('policyflag', { required: true })}
                      onChange={(e) => setPolicyFlag(!policyflag)}
                    />
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      I agree with the{" "}
                      <a
                        href="#pablo"
                        className="text-lightBlue-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.policyflag && errors.policyflag && <p className="error-p  mt-2">Please accept Terms and Condition</p>}
                </div>
                <div className="text-center mt-6">
                  <input type="submit" className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 cursor-pointer" value="Create Account" />
                </div>
              </form>
            </div>
          </div>
        </div >
      </>
    );
  }
}
