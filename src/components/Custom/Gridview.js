import React from "react";
export default function Gridview(props) {
  const handleClickChange = (event) => {
    props.displayTable(true);
  };
  return (
    <button className=" btn  btn-default m-1" onClick={handleClickChange}>
      {" "}
      <i className="nc-icon nc-bullet-list-67 text-dark"></i>
    </button>
  );
}
