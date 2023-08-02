import React from 'react';
import { Modal, ModalHeader, Button } from 'reactstrap';
import ContactAdd from './ContactcAdd';

export default function ContactcDetails() {
  const [modal, setModal] = React.useState(false);

  const modelToggle = () => {
    setModal(!modal);
  };
  return(
    <>
      <div className="border-bottom p-3 text-end">
        <Button className="btn btn-success ms-auto" size="sm" onClick={modelToggle}>
          Add New Contact
        </Button>
      </div>
      <Modal isOpen={modal} toggle={modelToggle} size="md">
        <ModalHeader  toggle={modelToggle}>Add Contact</ModalHeader>
        <ContactAdd click={modelToggle} />
      </Modal>
    </>
  );
}
