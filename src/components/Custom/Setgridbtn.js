import React,{useState} from "react";
import { useHistory } from 'react-router-dom';
import Filterbtn from "components/Custom/Filterbtn";
import Gridview from "components/Custom/Gridview";
//import test from "views/Company/Companyadd";
import { Container, Row, Col } from "react-bootstrap";
export default function Setgridbtn(props) {
  const history = useHistory();
  const handleClick =  () => {
   history.push(`${props.componentName}`);
  };
  const handleMultipleDelete = () =>{
    props.multiDelete();
  }
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col">
          <button className="btn btn-danger  m-1" onClick={handleMultipleDelete}>Delete</button>
        </div>
        <div className="col d-flex justify-content-end ">
          <button className="btn-primary  btn  m-1" onClick={handleClick}>Add</button>
          <Filterbtn  setToggleValue={props.setToggleValue}  toggleValue = {props.toggleValue} />
          {props.displaymultiplegridview === 'true' && <Gridview displayTable={props.displayView} />}
        </div>
      </div>
    </div>
  );
}
