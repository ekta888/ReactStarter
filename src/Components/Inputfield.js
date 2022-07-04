import React from "react";

export default function Inputfield(props) {
  return (
    <div ClassName="form-control">
      <input
        type="text"
        value={props.value}
        name={props.name}
        className={props.FirstNameinput}
        id={props.id}
      />
    </div>
  );
}
