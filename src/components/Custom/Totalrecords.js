import React from "react"
export default function Totalrecords(props){
    return (
        <p className="float-right mr-3 text-muted">Total Records: {props.totalItem}</p>
    )
}