import React from "react";
import { useHistory } from 'react-router-dom';
import { Button } from "react-bootstrap";
export default function Editbtn(props) {
  const history = useHistory();
  console.log("propsssss",props.editData);

  const handleEditClick = () => {
     props.handleEdit(props.editData);
    history.push(`${props.editComponent}`);
   
  };
  return (
    // <a href="#" className="text-primary text-decoration-underline">Edit</a>
    
    <button
      className="btn btn-primary removeicon-border"
      type="button"
      data-toggle="tooltip"
      data-placement="top"
      title=""
      data-original-title="Edit"
      onClick={handleEditClick}
    >
      <i className="fa fa-edit"></i>
    </button>
  );
}
