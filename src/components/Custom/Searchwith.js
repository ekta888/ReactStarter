import React from "react";
import { Col, Form } from "react-bootstrap";

export default function Searchwith(props) {
  // const handleSearchWithValueChange = (e) => {
  //   console.log(1);
  //   const value = e.target.value;
  //   onSearchWithValueChange(value);
  // };

const handleSearchWithValueChange = (e) => {
   // console.log("---",props);
    const value = e.target.value;
    props.onSearchWithValueChange(value,props.fieldName);
  };
  return (
    <div className="pr-1 md-6">
      <Form.Group>
        <label className="card-title font-weight-bold"></label>
        <select
          className="form-control custom-select-sm"
          name="Searchwith"
          onChange={handleSearchWithValueChange}
        >
           <option value="">--Select--</option>
          <option value="begin">Begin's With</option>
          <option value="exact">Exact</option>
          <option value="contains">Contains</option>
          <option value="end">End's With</option>
        </select>
      </Form.Group>
    </div>
  );
}