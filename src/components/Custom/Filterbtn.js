import React from "react";

export default function Filterbtn(props){
    console.log("3",455);
    const handleToggle = (event) => {
        console.log("4",455);
        props.setToggleValue(!props.toggleValue);
      };
    return (
        <button className=" btn btn-warning  m-1" onClick={handleToggle}> <i className="fa fa-filter"></i> </button>
    );
}