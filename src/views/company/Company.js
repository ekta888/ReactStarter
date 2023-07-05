import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "components/Custom/Pagination";
import Gridbtn from "components/Custom/Setgridbtn";
import Editbtn from "components/Custom/Editbtn";
import Deletebtn from "components/Custom/Deletebtn";
import Companysearch from "./Companysearch";
import Totalrecords from "components/Custom/Totalrecords";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
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
  const [searchResponse, setSearchResponse] = useState();
  const [companies, setCompanies] = useState([]);
  const [statusValue, setStatusValue] = useState();
  const [toggleValue, setToggleValue] = useState(false);
  const [
    selectedMultiDeleteCheckboxIds,
    setMultiDeleteselectedMultiDeleteCheckboxIds,
  ] = useState([]);
  useEffect(() => {
    axios
      .get("/list")
      .then((response) => {
        setCompanies(response.data.companies);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, []);
  const handleToggleChange = (value) => {
    setToggleValue(value);
  };
  const displayGridView = (value) => {
    setTableView(value);
  };
  function handleSearchApiResponse(response) {
    setSearchResponse(response);
  }
  const handleClearObject = () => {
    setSearchResponse({});
  };
  const handleEdit = (editData) => {
    localStorage.setItem("companyData", JSON.stringify(editData));
  };
  const handleCheckboxMultiDeleteChange = (isChecked, cardId) => {
    if (isChecked) {
      setMultiDeleteselectedMultiDeleteCheckboxIds((prevIds) => [
        ...prevIds,
        cardId,
      ]);
    } else {
      setMultiDeleteselectedMultiDeleteCheckboxIds((prevIds) =>
        prevIds.filter((id) => id !== cardId)
      );
    }
  };
  const handleCheckboxChange = async (value, cardId) => {
    setStatusValue(value);
    try {
      const response = await axios.put(`/updateStatus/${cardId}`, {
        status: value == true ? "0" : "1",
      });
      if (response.data.status == 200) {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(response.data.error, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error updating status:", error);
      // Handle error here
    }
  };

  const handleMultiDelete = async () => {
    try {
      const response = await axios.delete("/company-multidelete", {
        data: selectedMultiDeleteCheckboxIds,
      });
      if (response) {
        if (response.data.status === 200) {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        if (response.data.status === 400) {
          toast.error(response.data.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      }
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  if (searchResponse && searchResponse.companies) {
    const searchResultString = JSON.stringify(searchResponse);
    localStorage.setItem("searchResultStorage", searchResultString);
  }
  const cardsPerPage = 6;
  const searchData = JSON.parse(localStorage.getItem("searchResultStorage"));
  let data = [];
  let totalCards = 0;
  if (searchData && searchData.companies) {
    totalCards = searchData.companies.length;
    data = searchData.companies
      .slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage)
      .map((card, index) => (
        <div key={index}>
          <div className="card m-2">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h5 className="card-title">
                    {card.userName} ({card.companyName})
                  </h5>
                </div>
                <div className="col d-flex justify-content-end">
                  <label className="form-check-label">
                    <input
                      name=""
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedMultiDeleteCheckboxIds.includes(
                        card._id
                      )}
                      onChange={(e) =>
                        handleCheckboxMultiDeleteChange(
                          e.target.checked,
                          card._id
                        )
                      }
                    />
                  </label>
                </div>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Email:</strong> {card.email}
              </li>
              <li className="list-group-item">
                <strong>Domain:</strong> {card.domain}
              </li>
              <li className="list-group-item">
                <strong>Status:</strong>
                {card.status == 0 && (
                  <label className="switch ml-2">
                    <input
                      type="checkbox"
                      defaultChecked
                      onChange={(e) =>
                        handleCheckboxChange(e.target.checked, card._id)
                      }
                    />
                    <span className="slider"></span>
                  </label>
                )}
                {card.status == 1 && (
                  <label className="switch ml-2">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handleCheckboxChange(e.target.checked, card._id)
                      }
                    />
                    <span className="slider"></span>
                  </label>
                )}
              </li>
            </ul>
            <div className="card-body d-flex justify-content-between">
              <Editbtn
                idToEdit={card._id}
                editData={card}
                editComponent={`companyedit/${card._id}`}
                handleEdit={handleEdit}
              />
              <Deletebtn idToDelete={card._id} />
            </div>
          </div>
        </div>
      ));
  } else {
    totalCards = companies.length;
    data = companies
      .slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage)
      .map((card, index) => (
        <div key={index}>
          <div className="card m-2">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h5 className="card-title">
                    {card.userName} ({card.companyName})
                  </h5>
                </div>
                <div className="col d-flex justify-content-end ">
                  <label className="form-check-label ">
                    <input
                      name=""
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedMultiDeleteCheckboxIds.includes(
                        card._id
                      )}
                      onChange={(e) =>
                        handleCheckboxMultiDeleteChange(
                          e.target.checked,
                          card._id
                        )
                      }
                    />
                  </label>
                </div>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Email:</strong> {card.email}
              </li>
              <li className="list-group-item">
                <strong>Domain:</strong> {card.domain}
              </li>
              <li className="list-group-item">
                <strong>Status: </strong>
                {card.status == 0 && (
                  <label className="switch ml-2">
                    <input
                      type="checkbox"
                      defaultChecked
                      onChange={(e) =>
                        handleCheckboxChange(e.target.checked, card._id)
                      }
                    />
                    <span className="slider"></span>
                  </label>
                )}
                {card.status == 1 && (
                  <label className="switch ml-2">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handleCheckboxChange(e.target.checked, card._id)
                      }
                    />
                    <span className="slider"></span>
                  </label>
                )}
              </li>
            </ul>
            <div className="card-body d-flex justify-content-between">
              <Editbtn
                idToEdit={card._id}
                editData={card}
                editComponent={`companyedit/${card._id}`}
                handleEdit={handleEdit}
              />
              <Deletebtn idToDelete={card._id} />
            </div>
          </div>
        </div>
      ));
    const renderedCards = data;
  }

  return (
    <>
      <ToastContainer />
      <Gridbtn
        displaymultiplegridview="true"
        displayView={displayGridView}
        componentName="companyadd"
        toggleValue={toggleValue}
        setToggleValue={handleToggleChange}
        multiDelete={handleMultiDelete}
      />

      {toggleValue ? (
        <Companysearch
          onSearchApiResponse={handleSearchApiResponse}
          onRestClearResponse={handleClearObject}
        />
      ) : null}

      <div className="row">
        <div className="col">
          <Totalrecords totalItem={totalCards} />
        </div>
      </div>
      <div className="container list-company" fluid>
        <div className="row row-cols-1 row-cols-md-1 row-cols-xl-3">{data}</div>
      </div>
      <div className="row">
        <div className="col">
          <Pagination
            currentPage={currentPage}
            cardsPerPage={cardsPerPage}
            totalCards={totalCards}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}
