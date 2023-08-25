import React, { useState } from 'react';
import axios from 'axios';
import { Modal, ModalHeader, Button, Label, Collapse, Card, FormGroup, Row, InputGroup, Input, Form, CardBody } from 'reactstrap';
import * as Icon from 'react-feather';
import SimpleBar from 'simplebar-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactAdd from './ContactcAdd';
import { formatDateAndTime, formatSeconds } from '../../../common/common';


export default function ContactcDetails(prop) {
  //console.log("propsss", localStorage.getItem('authToken'));
  //const [comment,setComment] = useState();
  const [modal, setModal] = useState(false);
  const [collapsedItems, setCollapsedItems] = useState({});
  const user = localStorage.getItem('loggedInUserData') ? JSON.parse(localStorage.getItem('loggedInUserData')) : null;
  const toggleCollapse = (index) => {
    setCollapsedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const modelToggle = () => {
    setModal(!modal);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const leadUuid = form.elements.leadUuid.value;
    const callId = form.elements.callId.value;
    const comment = form.elements.comment.value;
    const apiUrl = `${process.env.REACT_APP_API_URL}/notes`;
    
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        'Content-Type': 'application/json'
      }
    };
    const requestBody = {
      'cdrs_uuid': callId,
      'lead_uuid': leadUuid,
      'comment': comment
    };
    //console.log("reqb", requestBody);
    axios.post(apiUrl, requestBody, config)
      .then(response => {
        if (response.data.statusCode === 201) {
          toast.success(response.data.data, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          const updatedCallIdInfo = [...prop.displayInfo.callIdInfo];
          const newNote = {
            comment: comment,
            createdAt: new Date().toISOString() // You might need to adjust this timestamp
          };
          updatedCallIdInfo[1].cdrs_and_notes[form.elements.index.value].notes_info.unshift(newNote);
        }
        setCollapsedItems((prev) => {
       //   console.log("prev",prev);
       //   console.log("form.elements.index.value",form.elements.index.value);
          return {
            ...prev,
            [form.elements.index.value]: !prev[form.elements.index.value],
          };
        });
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
      });
  }
  // useEffect(()=>{s
  // },[prop])
  
 // console.log("loggedInUserData", user);
  return (
    <>
      <ToastContainer />
      <div>
        <div className="border-bottom p-3 text-end">
          <Button className="btn btn-success ms-auto" size="sm" onClick={modelToggle}>
            Add New Contact
          </Button>
        </div>
        <Modal isOpen={modal} toggle={modelToggle} size="md">
          <ModalHeader toggle={modelToggle}>Add Contact</ModalHeader>
          <ContactAdd click={modelToggle} />
        </Modal>
        <SimpleBar style={{ height: 'calc(100vh - 250px)' }}>
          {prop.displayInfo.displayFlag && prop.displayInfo.callIdInfo ? (
            <>
              {prop.displayInfo.callIdInfo[1].cdrs_and_notes.map((item, index) => {
              //  console.log("index:", index);
                console.log("Item44:", item);
                const formattedDateTime = formatDateAndTime(item.cdrs_info.callstart);
                // console.log("formattedDateTime:", formattedDateTime);
                return (
                  <div>
                    <div className="d-flex align-items-center m-3">
                      {item.cdrs_info.direction === 'inbound' ? (
                        <Icon.PhoneIncoming color="#25b16b" size={23} className="me-3 ml-5" />
                      ) : (
                        <Icon.PhoneOutgoing color="#25b16b" size={23} className="me-3 ml-5" />
                      )}
                      <Label className="fw-bold text-dark h6 mb-0">{formattedDateTime.date}</Label>
                      <Label className="fw-bold text-dark h6 mx-2 mb-0">{formattedDateTime.time}</Label>
                      (<Label className="fw-bold text-muted h6 mb-0">{formatSeconds(item.cdrs_info.billsecond)}</Label>)
                      <span className="ms-auto mb-1 text-primary" onClick={() => toggleCollapse(index)}>
                        <Icon.FilePlus size={20} />
                      </span>
                    </div>
                    <Collapse isOpen={collapsedItems[index]}>
                      <Card className="">
                        <CardBody>
                          <Form onSubmit={handleSubmit}>
                            <Row>
                              <FormGroup>
                              <InputGroup>
                                  <Input
                                    type="hidden"
                                    name="index"
                                    value={index}
                                  />
                                </InputGroup>
                                <InputGroup>
                                  <Input
                                    type="hidden"
                                    name="leadUuid"
                                    value={item.cdrs_info.lead_uuid}
                                  />
                                </InputGroup>
                                <InputGroup>
                                  <Input
                                    type="hidden"
                                    name="callId"
                                    value={item.cdrs_info.custom_callid}
                                  />
                                </InputGroup>
                                <InputGroup>
                                  <Input
                                    type="textarea"
                                    rows="5"
                                    name="comment"
                                    placeholder="Add Note"
                                   // defaultValue={item.notes_info[index]?.comment || ''}
                                  //  onChange={(e) => setComment(e.target.value)}
                                  />
                                </InputGroup>
                              </FormGroup>
                            </Row>
                            <div className="d-flex justify-content-end">
                              <Button type="submit" className="btn btn-success mr-2">
                                Add Note
                              </Button>
                            </div>
                          </Form>
                        </CardBody>
                      </Card>
                    </Collapse>
                    {item.notes_info && item.notes_info.map((data) => {
                     const formattedDateTimeForNote = formatDateAndTime(data.createdAt);
                     const username = data.user ? data.user[0]?.username : (user ? user.username : '');

                      //console.log("wwww",data.user[0]);
                      return (
                        /* <div className="note-section">
                           <div className="d-flex justify-content-between align-items-center mb-3">
                             <div className="note-details mx-4">
                               <span className='mx-1 '>
                                 <i className="bi bi-info-square-fill text-info" />
                               </span>
                               <div className='fw-bold text-muted h6 mx-1'>
                                 {user.username}
                               </div>
                             </div>
                             <div>
                               <Label className="fw-bold text-muted h6 mx-2 mb-0">{formattedDateTimeForNote.date}</Label>
                               <Label className="fw-bold text-muted h6 mb-0">{formattedDateTimeForNote.time}</Label>
                             </div>
                           </div>
                           <div className="note-content">
             <div className="p-3 bg-light rounded">
               <Label className="fw-bold text-muted h6 mb-0">{data.comment}</Label>
             </div>
           </div>
                         </div>*/
                        <ul className='list-group mx-2'>
                          <li className="h5 justify-content-between list-group-item text-dark">{data.comment}<span className=" mx-2 badge bg-secondary rounded-pill">{username}</span>
                          <div className='mt-2 text-muted'>
                          <small>{formattedDateTimeForNote.date} {formattedDateTimeForNote.time}</small>
                          </div>
                          </li>

                             

                        </ul>
                      );
                    })}
                  </div>
                );
              })}
            </>
          ) : null}
        </SimpleBar>
      </div>
    </>
  );
}