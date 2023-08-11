import React, { useState, useEffect } from 'react';
//import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  Nav,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  // Popover,
  // PopoverBody,
} from 'reactstrap';
import * as Icon from 'react-feather';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import user2 from '../../../assets/images/users/user2.jpg';
import ContactcEdit from './ContactcEdit';
import CallbackAdd from '../callback/CallbackAdd';

// import Data from '../../../data/contacts/ContactsData';

export default function Contactc(prop) {
  // const navigate = useNavigate();
 // const [openPopoverIndex, setOpenPopoverIndex] = useState(-1);
  //const [listCallInfo, setListCallInfo] = useState();
  const [callbackAddModal, setCallbackAddModal] = useState(false);
  const [listData, setListData] = useState();
  const [deleteModel, setDeleteModel] = useState(false);
  const [selectedDeleteUser, setSelectedDeleteUser] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [selectedEditUser, setSelectedEditUser] = useState(null);
  const [searchResult, setSearchResult] = useState();
  console.log('process.env.AUTH_TOKEN', process.env.REACT_APP_AUTH_TOKEN);
  const authToken = process.env.REACT_APP_AUTH_TOKEN;
  const modelCallbackAddToggle = (user) => {
    setSelectedEditUser(user);
    setCallbackAddModal(!callbackAddModal);
  };
  useEffect(() => {
    if (prop.searchData.statusCode === 200) {
      setSearchResult(prop.searchData.data);
    }
    if (prop.searchData.statusCode === 404) {
      setSearchResult(404);
    }
  }, [prop.searchData]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/lead-management?list=all`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        if (response.data.statusCode === 200) {
          setListData(response.data.data);
          toast.success(response.data.data, {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log('+++++', response.data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, []);
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (event.target.id && event.target.id.startsWith('showMore-')) {
  //       return;
  //     }
  //     setOpenPopoverIndex(-1);
  //   };

  //   document.addEventListener('click', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);
  const handleDeletetoggle = () => {
    setDeleteModel(!deleteModel);
  };
  // const handleMoreToggle = (index) => {
  //   setOpenPopoverIndex((prevIndex) => (prevIndex === index ? -1 : index));
  // };
  // const handleMouseLeave = () => {
  //   setOpenPopoverIndex(-1);
  // };
  const closeCallbackAddModal = () => {
    setCallbackAddModal(false);
  };
  const handleContactDelete = (deleteid) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/lead-management/${deleteid}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((resp) => {
        if (resp.data.statusCode === 200) {
          console.log('++++++', resp.data);
          //Refresh the user list after successful deletion
          axios
            .get(`${process.env.REACT_APP_API_URL}/lead-management?list=all`, {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            })
            .then((res) => {
              if (res.data.statusCode === 200) {
                setListData(res.data.data);
              }
            })
            .catch((error) => {
              console.error('Error fetching items:', error);
            });
          toast.info(resp.data.data, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
        if (resp.data.statusCode === 404) {
          toast.error(resp.data.data, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
        setDeleteModel(!deleteModel);
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };
  const handleInfoData = (leadUuid) =>{
       axios
      .get(`${process.env.REACT_APP_API_URL}/lead-management/leads-with-call-info/${leadUuid}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
        },
      })
      .then((response) => {
        if (response.data.statusCode === 200) {
          prop.onInfoFlagChange({displayFlag:true,callIdInfo:response.data.data});
          console.log('+++++', response.data.data);
         // console.log('***', listCallInfo);
        }
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }
  const modelEditToggle = (user) => {
    setSelectedEditUser(user);
    setEditModal(!editModal);
  };
  return (
    <>
      <Nav>
        {searchResult && searchResult.length > 0 ? (
          searchResult.map((user) => (
            <NavItem className="w-100 cursor-pointer  bg-light">
              <ToastContainer />
              <div className="d-flex align-items-center p-3 mb-1">
                <div>
                  <img src={user2} alt="user" className="rounded-circle" width="50" />
                </div>
                <div className="mx-2 flex-grow-1">
                  <h5 className="mb-0 text-truncate" width="140px">
                    {user.first_name}&nbsp;
                    {user.last_name}
                  </h5>
                  <small>{user.phone_number}</small>
                  <div className="d-flex mt-2 flex-shrink-0">
                      <span className="text-primary mx-1">
                        <i className="bi bi-pencil-square" onClick={() => modelEditToggle(user)} />{' '}
                      </span>
                      <span
                        className="text-danger mx-1"
                        onClick={() => {
                          setSelectedDeleteUser(user.lead_management_uuid);
                          handleDeletetoggle();
                        }}
                      >
                        <i className="bi bi-trash" />
                      </span>
                      <span className='mx-1'  onClick={() => handleInfoData(user.lead_management_uuid)}>
                      <i className="bi bi-info-square-fill text-info" />
                      </span>
                      <span className='mx-1'  onClick={() => modelCallbackAddToggle(user)}>
                      <Icon.PhoneForwarded className="text-success mb-1" size={15} />
                      </span>
                    </div>
                </div>
                {/* <div className="d-flex flex-shrink-0">
                  <span className="text-primary mx-1">
                    <i className="bi bi-pencil-square" onClick={() => modelEditToggle(user)} />{' '}
                  </span>
                  <span
                    className="text-danger"
                    onClick={() => {
                      setSelectedDeleteUser(user.lead_management_uuid);
                      handleDeletetoggle();
                    }}
                  >
                    <i className="bi bi-trash" />
                  </span>
                </div> */}
              </div>
            </NavItem>
          ))
        ) : searchResult === 404 ? (
          <NavItem className="w-100 cursor-pointer justify-content-center d-grid bg-light">
            <div className="d-flex p-3 mb-1">
              <div>
                <h5 className="mb-0 text-truncate fw-bold">No records found</h5>
              </div>
            </div>
          </NavItem>
        ) : (
          listData &&
          listData.map((user) => (
            <NavItem className="w-100 cursor-pointer  bg-light">
              <ToastContainer />
              <div className="d-flex align-items-center p-3">
                <div>
                  <img src={user2} alt="user" className="rounded-circle" width="50" />
                </div>
                <div className="mx-2 flex-grow-1">
                  <h5 className="mb-0 text-truncate" width="140px">
                    {user.first_name}&nbsp;
                    {user.last_name}
                  </h5>
                  <small>{user.phone_number}</small>
                  <div className="d-flex mt-2 flex-shrink-0">
                      <span className="text-primary mx-1">
                        <i className="bi bi-pencil-square" onClick={() => modelEditToggle(user)} />{' '}
                      </span>
                      <span
                        className="text-danger mx-1"
                        onClick={() => {
                          setSelectedDeleteUser(user.lead_management_uuid);
                          handleDeletetoggle();
                        }}
                      >
                        <i className="bi bi-trash" />
                      </span>
                      <span className='mx-1' onClick={() => handleInfoData(user.lead_management_uuid)}>
                      <i className="bi bi-info-square-fill text-info" />
                      </span>
                      <span className='mx-1' onClick={() => modelCallbackAddToggle(user)} >
                      <Icon.PhoneForwarded className="text-success mb-1" size={15} />
                      </span>
                    </div>
                </div>
                {/* <div className="d-flex flex-shrink-0">
                  <span
                    className="mb-3"
                    id={`showMore-${index}`}
                    onMouseEnter={() => handleMoreToggle(index)}
                   // onMouseLeave={handleMouseLeave}
                  >
                    <Icon.MoreVertical className="text-primary" size={20} />
                  </span>
                </div> */}
              
                {/* <Popover
                  placement="right"
                  isOpen={openPopoverIndex === index}
                  target={`showMore-${index}`}
                  toggle={() => handleMoreToggle(index)}
                >
                  <PopoverBody>
                    <div className="d-flex flex-shrink-0">
                      <span className="text-primary mx-1">
                        <i className="bi bi-pencil-square" onClick={() => modelEditToggle(user)} />{' '}
                      </span>
                      <span
                        className="text-danger"
                        onClick={() => {
                          setSelectedDeleteUser(user.lead_management_uuid);
                          handleDeletetoggle();
                        }}
                      >
                        <i className="bi bi-trash" />
                      </span>
                    </div>
                  </PopoverBody>
                </Popover>
                 */}
              </div>
            
            </NavItem>
          ))
        )}
      </Nav>

      <Modal isOpen={editModal} toggle={modelEditToggle} size="md">
        <ModalHeader toggle={modelEditToggle}>Edit Contact</ModalHeader>
        <ContactcEdit click={modelEditToggle} data={selectedEditUser} />
      </Modal>
      <Col xs="12" md="6">
        <Modal isOpen={deleteModel} toggle={handleDeletetoggle.bind(null)}>
          <ModalHeader toggle={handleDeletetoggle.bind(null)}>Delete Contact</ModalHeader>
          <ModalBody>Are you sure you want delete this contact?</ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              onClick={() => {
                handleContactDelete(selectedDeleteUser);
              }}
            >
              Delete
            </Button>
            <Button color="secondary" onClick={handleDeletetoggle.bind(null)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={callbackAddModal} toggle={modelCallbackAddToggle} size="md">
        <ModalHeader toggle={modelCallbackAddToggle}>Callback Add                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </ModalHeader>
        <CallbackAdd closeCallbackAddModal={closeCallbackAddModal} callbackAddData={selectedEditUser} onClick={modelCallbackAddToggle} />
      </Modal>
      </Col>
    </>
  );
}
