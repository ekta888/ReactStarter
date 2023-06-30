import React, { useState } from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Deletebtn(props) {
  const [showModal, setShowModal] = useState(false);

  const handleSingleDelete = async () => {
    try {
      const response = await axios.put(`/deleteSingle/${props.idToDelete}`, {
        isDeleted: true,
      });
      console.log("Deleteddd updated:", response.data);
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
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    // <a href="#" className="text-danger text-decoration-underline">Delete</a>
    <>
      {/* <ToastContainer /> */}
      <button
        className="btn btn-danger removeicon-border"
        type="button"
        onClick={handleShowModal}
      >
        <i className="fa fa-trash"></i>
      </button>
      {/* <Modal show={showModal} onHide={handleCancelDelete} centered> */}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Confirm Delete</Modal.Title>
          <button className="close" onClick={handleCloseModal}>
            &times;
          </button>
        </Modal.Header>
        <ModalBody>
          Do you really want to delete these records? This process cannot be
          undone.
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-dark" onClick={handleCloseModal}>
            Cancel
          </button>
          <Button className="btn btn-danger" onClick={handleSingleDelete}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
