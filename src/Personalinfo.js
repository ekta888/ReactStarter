import React from "react";
import useFormFields from "./Hooks/CustomHook";

export default function Personalinfo(props) {
  // const signup = () => {
  //   console.log(`User Created!
  //   Email: ${inputs.email} `);
  // }; 
  // const { inputs, handleInputChange, handleSubmit } = useFormFields(signup);
  return (
    <form className="personalinfo" onSubmit={props.data.handleSubmit}>
      <div>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          onChange={props.data.handleInputChange}
          value={props.data.inputs.email}
        //required
        />
        {props.data.errors.email && (
          <p className="help is-danger">{props.data.errors.email}</p>
        )}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password1"
          onChange={props.data.handleInputChange}
          value={props.data.inputs.password1}
        />
        {props.data.errors.password1 && (
          <p className="help is-danger">{props.data.errors.password1}</p>
        )}
      </div>
      <div>
        <label>Re-enter Password</label>
        <input
          type="password"
          name="password2"
          onChange={props.data.handleInputChange}
          value={props.data.inputs.password2}
        />
        {props.data.errors.password2 && (
          <p className="help is-danger">{props.data.errors.password2}</p>
        )}
      </div>
      <button type="submit" id="updatepersonalinfo">Save</button>
    </form>
  );
}
