import React, { useState, useCallback } from "react";
//import useFormFields from "./Hooks/CustomHook";
//import Displayinfo from "./Displayinfo";
//import { createContext } from "react";
//import Userdata from "./Userdata";

export default function UserInfo(props) {
  console.log("errors", props.data.errors);

  // const signup = () => {
  //   console.log(`User Created!
  //   Name: ${inputs.firstName} ${inputs.lastName}`);
  // };
  // const { inputs, handleInputChange, handleSubmit } = useFormFields(signup);
  return (
    <form className="userinfo" onSubmit={props.data.handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={props.data.handleInputChange}
          value={props.data.inputs.firstName || ''}
        // value={values.email || ''}
        //  required
        />
        {props.data.errors.firstName && (
          <p className="help is-danger">{props.data.errors.firstName}</p>
        )}
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={props.data.handleInputChange}
          value={props.data.inputs.lastName || ''}
        //   required
        />
        {props.data.errors.lastName && (
          <p className="help is-danger">{props.data.errors.lastName}</p>
        )}
      </div>
      <button type="submit" id="userupdate">Save</button>
    </form>
  );
} 