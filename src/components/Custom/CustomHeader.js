import React from "react";
import { Button, Col } from "react-bootstrap";
export default function CustomHeader(props) {
  //console.log("ewewre", props.displayregbtn);
  return (
    <Col md="12" className="float-right ">
      <div className="float-right mt-3">
        <a className="p-3 text-white" href="#home">
          Contact
        </a>
        <a className="p-3 text-white" href="#contact">
          About Us
        </a>
        {props.displayregbtn ? (
          <Button
            type="submit"
            className="btn-fill pull-right btn btn-sm btn-primary"
          >
           Register
          </Button>
        ) : (
          <Button
            type="submit"
            className="btn-fill pull-right btn btn-sm btn-primary"
          >
            Login
          </Button>
        )}
      </div>
    </Col>
  );
}
