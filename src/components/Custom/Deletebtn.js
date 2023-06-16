import React from "react";

export default function Deletebtn (){
    return(
        // <a href="#" className="text-danger text-decoration-underline">Delete</a>
        <button className="btn btn-danger removeicon-border" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="fa fa-trash"></i></button>
    )
}