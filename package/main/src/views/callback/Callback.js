import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, Table, Modal, ModalHeader, Col, ModalBody, ModalFooter, Button, Input, Label, Collapse, Form, InputGroup, Row } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from 'react-select';
import * as Icon from 'react-feather';
import CallbackEdit from '../../components/custom/callback/CallbackEdit';
import PaginationC from '../../components/custom/PaginationC';
import { formatDateAndTime } from '../../common/common';

export default function Callback() {

  const [isLoading, setIsLoading] = useState(false);
  const [callbackEditModal, setCallbackEditModal] = useState(false);
  const [deletedCallBackId, setDeletedCallBackId] = useState(null);
  const [deleteModel, setDeleteModel] = useState(false);
  const [editData, setEditData] = useState();
  const [listData, setListData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [collapse, setCollapse] = useState(false);
  const [dateTime, setDateTime] = useState('');
  const [type, setType] = useState(null);
  const toggle = () => setCollapse(!collapse);
  const recordsPerPage = 2;
  const options = [
    { value: 'Callback', label: 'Callback' },
    { value: 'Email', label: 'Email' },
    { value: 'Whatsapp', label: 'WhatsApp' },
    { value: 'Escalation', label: 'Escalation' },
    { value: 'Other', label: 'Other Task' },
  ];
  const [callbackEditData, setCallbackEditData] = useState({
    editData: null,
    dateTimeSearch: '',
    typeSearch: null,
  });
  console.log(callbackEditData);
  const handleEditSuccess = (editedData) => {
    // Find the index of the edited data in the listData
    const updatedListData = listData.map(item =>
      item.follow_up_uuid === editedData.follow_up_uuid ? editedData : item
    );
  
    // Update the state with the updated listData
    setListData(updatedListData);
  
    // Close the edit modal
    setCallbackEditModal(false);
  };
  const modelCallbackEditToggle = (data) => {
    setEditData(data);
    setCallbackEditModal(!callbackEditModal);
    setCallbackEditData({
      editData: data,
      dateTimeSearch: dateTime,
      typeSearch: type,
    });
  };

  const handleDeletetoggle = () => {
    setDeleteModel(!deleteModel);
  };

  const handleCallBackListing = async (page, dateTime, type) => {
    setIsLoading(true);
    const searchParams = dateTime && type && (dateTime !== '' && type.value !== null)
      ? `&date_time=${dateTime}&type=${type.value}`
      : '';
    setTimeout(async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/follow-up?page=${page}&limit=${recordsPerPage}${searchParams}`, {

          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        if (response.data.statusCode === 200) {
          setListData(response.data.data);
          setTotalRecords(response.data.count);
        } else {
          setListData([]);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setIsLoading(false);
      }
    }, 20); // Delay of 20 milliseconds
  };
  useEffect(() => {
    handleCallBackListing(currentPage); // Load data on page load or when dateTime or type changes
  }, [currentPage]);

  const handleCallBackDelete = (deleteid) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/follow-up/${deleteid}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then((resp) => {
        if (resp.data.statusCode === 200) {
          setListData(prevListData => prevListData.filter(item => item.follow_up_uuid !== deleteid));
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
  const handleCallBackSearch = () => {
    setCurrentPage(1);
    const formatedDate = formatDateAndTime(dateTime);
    const postSerachData = {
      date_time: dateTime && `${formatedDate.date} ${formatedDate.time}`,
      type: type && type.value,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/follow-up/advanced-search`, postSerachData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then((response) => {
        if (response.data.statusCode === 200) {
          setListData(response.data.data);
          setTotalRecords(response.data.count);
        } else {
          setListData([]);
        }
      })
      .catch((error) => {
        console.error('Error creating post:', error);
      });
  };
  const handleClear = () => {
    setDateTime('');
    setType(null);
    handleCallBackListing(1);
  };
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    handleCallBackListing(newPage);
  };
  return (
    <>
      <Modal isOpen={callbackEditModal} toggle={modelCallbackEditToggle} size="md">
        <ModalHeader toggle={modelCallbackEditToggle}>Callback Edit</ModalHeader>
        <CallbackEdit editData={editData} closeEditFlag={modelCallbackEditToggle} onSuccess={handleEditSuccess} />
      </Modal>
      <div>
        <ToastContainer />
        <Card>
          <CardBody>
            <CardTitle tag="h5">Callback</CardTitle>
            {/* <CardSubtitle className="mb-2t text-muted" tag="h6">
              Overview of the projects
            </CardSubtitle> */}
            <CardBody className="border-top d-flex justify-content-end">
              <Col md='3 mx-2'>
                <Input
                  type="text"
                  placeholder="Search By Keyword"
                />
              </Col>
              <div>
                <Button onClick={toggle.bind(null)}
                  type="button"
                  className="btn font-weight-bold"
                  color="primary">
                  <span className="btn-label p-1">
                    <Icon.Filter size={16} />
                  </span>
                  Filter
                </Button>
              </div>
            </CardBody>
            <Collapse isOpen={collapse}>
              <Card className='border-2 p-3 '>
                <div className='mb-0' >
                  <Form>
                    <CardTitle tag='h5' className=''>Search</CardTitle>
                    <Row >
                      <Col md='5'>
                        <Label>Date And Time</Label>
                        <InputGroup>
                          <Input
                            type="datetime-local"
                            rows="1"
                            name="Date And Time"
                            className='col-md-12'
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                          />
                        </InputGroup>
                      </Col>
                      <Col md='5'>
                        <Label>Types</Label>
                        <InputGroup>
                          <Select className='col-md-12' options={options} value={type} onChange={(selectedOption) => setType(selectedOption)} />
                        </InputGroup>
                      </Col>
                    </Row>
                    <CardBody className=" d-flex justify-content-end w-100 mx-4">
                      <Button type="reset" onClick={handleClear}
                        className="btn ml-2 ">
                        {/* // onPress={handleReset} */}
                        Clear
                      </Button>
                      <Button type="button" onClick={handleCallBackSearch} className="btn btn-danger ml-2 mx-2">
                        Search
                      </Button>
                    </CardBody>
                  </Form>
                </div>
                <Row>
                  {/* <div className='text-left'> */}
                  {/* </div> */}
                </Row>
              </Card>
            </Collapse>
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Contact Name</th>
                  <th>Contact Number</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="5" className="text-center">Loading...</td>
                  </tr>
                ) : (
                  listData && listData.length > 0 ? (
                    listData.map((tdata) => {
                      const formattedDateTime = formatDateAndTime(tdata.date_time);
                      console.log("formattedDateTime", formattedDateTime.date);
                      return (
                        <tr className="border-top" key={tdata.follow_up_uuid}>
                          <td>
                            <td>
                              {formattedDateTime.date} {formattedDateTime.time}
                            </td>
                          </td>
                          <td>
                            <div className="d-flex align-items-center p-2">
                              <div className="ms-3">
                                <h6 className="mb-0">{tdata.lead_details[0].first_name}</h6>
                              </div>
                            </div>
                          </td>
                          <td> <span className="text-muted">{tdata.lead_details[0].phone_number}</span></td>
                          <td>{tdata.type}</td>
                          <td>
                            <div>
                              <span onClick={() => modelCallbackEditToggle(tdata)} className="mx-1">
                                <Icon.Edit className="text-primary" size={18} />
                              </span>
                              <span className="mx-1" onClick={() => {
                                setDeletedCallBackId(tdata.follow_up_uuid);
                                handleDeletetoggle();
                              }}>
                                <Icon.Trash2 className="text-danger" size={18} />
                              </span>
                              <span className="mx-1">
                                <Icon.Phone className="text-success" size={18} />
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">No data records found.</td>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
            <div className="row">
              <div className="col">
                {listData &&
                  <PaginationC
                    currentPage={currentPage}
                    cardsPerPage={recordsPerPage}
                    totalCards={totalRecords}
                    onPageChange={handlePageChange}
                  />
                }
              </div>
            </div>
          </CardBody>
        </Card>
        <Col xs="12" md="6">
          <Modal isOpen={deleteModel} toggle={handleDeletetoggle.bind(null)}>
            <ModalHeader toggle={handleDeletetoggle.bind(null)}>Delete Callback</ModalHeader>
            <ModalBody>Are you sure you want delete this record?</ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                onClick={() => {
                  handleCallBackDelete(deletedCallBackId);
                }}
              >
                Delete
              </Button>
              <Button color="secondary" onClick={handleDeletetoggle.bind(null)}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </div>
    </>
  );
}
