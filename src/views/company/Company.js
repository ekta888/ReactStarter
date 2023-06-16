import React, { useState, useEffect } from "react";
import Pagination from "components/Custom/Pagination";
import Gridbtn from "components/Custom/Setgridbtn";
import Editbtn from "components/Custom/Editbtn";
import Deletebtn from "components/Custom/Deletebtn";
import Companysearch  from "./Companysearch";
console.log(Editbtn);
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

export default function Company() {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableView, setTableView] = useState(false);

  const data = {
    users: [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
      },
      {
        id: 2,
        name: "Janeddz Smith",
        email: "janesmith@example.com",
      },
      {
        id: 3,
        name: "Bob343434 Johnson",
        email: "bobjohnson@example.com",
      },
      {
        id: 4,
        name: "John3dd Doe",
        email: "johndoe@example.com",
      },
      {
        id: 5,
        name: "Jane564 Smith",
        email: "janesmith@example.com",
      },
      {
        id: 6,
        name: "Bob344 Johnson",
        email: "bobjohnson@example.com",
      },
      {
        id: 7,
        name: "John222 Doe",
        email: "johndoe@example.com",
      },
      {
        id: 8,
        name: "Jane90 Smith",
        email: "janesmith@example.com",
      },
      {
        id: 9,
        name: "Bob78 Johnson",
        email: "bobjohnson@example.com",
      },
      {
        id: 10,
        name: "John421 Doe",
        email: "johndoe@example.com",
      },
      {
        id: 11,
        name: "Jane22 Smith",
        email: "janesmith@example.com",
      },
      {
        id: 12,
        name: "Bob45 Johnson",
        email: "bobjohnson@example.com",
      },
    ],
  };
  const [toggleValue, setToggleValue] = useState(false);

  const handleToggleChange = (value) => {
    console.log("valbbbb",value);
    setToggleValue(value);
  };
  const displayGridView = (value) => {
    setTableView(value);
  };
  console.log("toggleValue",toggleValue);
  const cardsPerPage = 6;
  const totalCards = data.length;
  const renderedCards = data.users
    .slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage)
    .map((card, index) => (
      // Render the cards here
      <div key={index}>
        <div className="card m-2">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h5 className="card-title">John Doe</h5>
              </div>
              <div className="col d-flex justify-content-end ">
                <label className="form-check-label ">
                  <input name="" type="checkbox" className="form-check-input" />
                </label>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Email:</strong> john.doe@example.com
            </li>
            <li className="list-group-item">
              <strong>Phone:</strong> (123) 456-7890
            </li>
            <li className="list-group-item">
              <strong>Location:</strong> New York, USA
            </li>
          </ul>
          <div className="card-body d-flex justify-content-between">
            <Editbtn />
            <Deletebtn />
          </div>
        </div>
      </div>
    ));

  return (
    <>
      {/* <div className="py-5">
        <div className="container">
          <div className="row hidden-md-up">
          
            {renderedCards}
           
          </div>
        </div>
      </div> */}
      <Gridbtn displaymultiplegridview="true" displayView={displayGridView} componentName="companyadd" toggleValue={toggleValue} setToggleValue={handleToggleChange} />
      {toggleValue ? <Companysearch /> : null}
      <div className="container list-company" fluid>
        <div className="row row-cols-1 row-cols-md-1 row-cols-xl-3">
          {renderedCards}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        cardsPerPage={cardsPerPage}
        totalCards={50}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
