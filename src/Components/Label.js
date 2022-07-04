import React from "react";
export default function Label(props) {
  return (
    <div ClassName="form-control">
      <label>{props.title}</label>
    </div>
  );
}
