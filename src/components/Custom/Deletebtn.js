import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function Deletebtn() {
  const [showModal, setShowModal] = useState(false);
  const handleDelete = () => {
    setShowModal(true);
  };
  return (
    // <a href="#" className="text-danger text-decoration-underline">Delete</a>
    <>
      <button
        className="btn btn-danger removeicon-border"
        type="button"
        data-toggle="tooltip"
        data-placement="top"
        title=""
        data-original-title="Delete"
        onClick={handleDelete}
      >
        <i className="fa fa-trash"></i>
      </button>
      {/* <Modal show={showModal} onHide={handleCancelDelete} centered> */}
      {showModal && (
        <div id="myModal" className="modal fade">
        <div className="modal-dialog modal-confirm">
            <div className="modal-content">
                <div className="modal-header flex-column">
                    <div className="icon-box">
                        <i className="material-icons">&#xE5CD;</i>
                    </div>
                    <h4 className="modal-title w-100">Are you sure?</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div className="modal-body">
                    <p>Do you really want to delete these records? This process cannot be undone.</p>
                </div>
                <div className="modal-footer justify-content-center">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>

)}
      
    </>
  );
}
