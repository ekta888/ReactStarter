import React,{useState} from 'react';
//import axios from 'axios';
import { Modal, ModalHeader, Button } from 'reactstrap';
import ContactAdd from './ContactcAdd';

export default function ContactcDetails(prop) {
  console.log("propsss",prop);
  const [modal, setModal] = useState(false);
 // const [listData, setListData] = useState();
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
      {prop.displayInfo.displayFlag && (
          <h1>Test</h1>
      )}
    </>
  );
}