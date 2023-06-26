import React from "react";
import {
    Button
  } from "react-bootstrap";
export default function Editbtn(){
    return(
        // <a href="#" className="text-primary text-decoration-underline">Edit</a>
        <button className="btn btn-primary removeicon-border" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i className="fa fa-edit"></i></button>
    )
}