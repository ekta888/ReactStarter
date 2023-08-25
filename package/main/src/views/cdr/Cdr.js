import { React, useState, useEffect } from "react";
import axios from 'axios';
import { Card, CardBody, CardTitle, Table, Label, Button, InputGroup, Input, Row, Collapse, Col, Form } from 'reactstrap';
import * as Icon from 'react-feather';
import Select from 'react-select';
import Pagination from '../../components/custom/PaginationC';


export default function Cdr() {
    const [listData, setListData] = useState();
    const [collapse, setCollapse] = useState(false);
    const toggle = () => setCollapse(!collapse);
    const options = [
        { value: 'containts', label: 'Containts' },
        { value: 'does not containts', label: 'Does not containts' },
        { value: 'is equal to', label: 'Is equal to' },
        { value: 'is not equal to', label: 'Is not equal to' },
        { value: 'ends with', label: 'Ends with' },
    ];
    const callMoadOption = [
        { value: 'pbx', label: 'PBX' },
        { value: 'call center', label: 'Call Center' },
    ]
    const hangupCauseOption = [
        { value: 'attended transfer', label: 'ATTENDED_TRANSFER' },
        { value: 'callqueue timeout', label: 'CALLQUEUE_TIMEOUT' },
        { value: 'ivr timeout', label: 'IVR_TIMEOUT' },
        { value: 'no answer', label: 'NO_ANSWER' },
        { value: 'no route destination', label: 'NO_ROUTE_DESTINATION' },
        { value: 'normal clearing', label: 'NORMAL_CLEARING' },
        { value: 'orginator cancle', label: 'ORGINATOR_CANCLE' },
        { value: 'user busy', label: 'USER_BUSY' },
    ]

    
    function listAllCdrs() {
        axios
            .get(`${process.env.REACT_APP_API_URL}/cdrs?page=1&limit=10`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                },
            })
            .then((response) => {
                if (response.data.statusCode === 200) {
                    setListData(response.data.data);
                    console.log(listData);
                    console.log('+++++cdrs', response.data.data);
                }
            })
            .catch((error) => {
                console.error('Error fetching items:', error);
            });
    }
    useEffect(() => {
        listAllCdrs();
    }, []);
    return (
        <>
            <div>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">CDR Report</CardTitle>
                        <CardBody className="border-top d-flex justify-content-end">
                            <Col md='3 mx-2'>
                                <Input
                                    type="text"
                                    placeholder="Search By Keyword"
                                />
                            </Col>
                            <Button onClick={toggle.bind(null)}
                                type="button"
                                className="btn font-weight-bold"
                                color="primary">
                                <span className="btn-label p-1">
                                    <Icon.Filter size={16} />
                                </span>
                                Filter
                            </Button>
                        </CardBody>

                        <Collapse isOpen={collapse}>
                            <Card className='border-2 p-3'>
                                <div className='mb-0' >
                                    <Form>
                                        <CardTitle tag='h5'>Search</CardTitle>
                                        <Row>
                                            <Col sm='4'>
                                                <Label>From Date</Label>
                                                <InputGroup>
                                                    <Input
                                                        type="datetime-local"
                                                        rows="1"
                                                        name="Date"
                                                        placeholder="Select from date"
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col sm='4'>
                                                <Label>To Date</Label>
                                                <InputGroup>
                                                    <Input
                                                        type="datetime-local"
                                                        rows="1"
                                                        name="Date"
                                                        placeholder="Select from date"
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col sm='4'>
                                                <Label>Phone Number</Label>
                                                <InputGroup>
                                                    {/* <Input
                                                        // type="textarea"
                                                        rows="1"
                                                        name="phone number"
                                                        placeholder="Enter Phone Number"
                                                    /> */}
                                                    <Select className="col-md-12" options={options} />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3"> 
                                            <Col md='4'>
                                                <Label>Call Mode</Label>
                                                <InputGroup>
                                                    {/* <Input
                                                        type=""
                                                        rows="1"
                                                        name="Call Mode"
                                                        placeholder="Select call mode"
                                                    /> */}
                                                    <Select className="col-md-12" options={callMoadOption} />
                                                </InputGroup>
                                            </Col>
                                            <Col md='4'>
                                                <Label>Hangup Cause</Label>
                                                <InputGroup>
                                                    {/* <Input
                                                        type=""
                                                        rows="1"
                                                        name="Hangup Cause"
                                                        placeholder="Select hangup cause"
                                                    /> */}
                                                    <Select className="col-md-12" options={hangupCauseOption} />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <CardBody className="d-flex justify-content-end w-100 mx-4">
                                            <Button type="reset" className="btn ml-2">
                                                Clear
                                            </Button>
                                            <Button type="submit" className="btn btn-danger ml-2 mx-2">
                                                Search
                                            </Button>
                                        </CardBody>
                                    </Form>
                                </div>
                               
                            </Card>
                        </Collapse>
                        <Table className="no-wrap mt-3 align-middle" responsive borderless>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Phone Number</th>
                                    <th>Duration</th>

                                    <th>Call Mode</th>
                                    <th>Hangup Cause</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listData && listData.map((tdata) => (
                                    <tr className="border-top">
                                        <td>
                                            <td>{tdata.date_time}</td>
                                        </td>
                                        <td>
                                            {/* <div className="d-flex align-items-center p-2">
                          
                          <div className="ms-3">
                          <h6 className="mb-0">{tdata.lead_details[0].first_name}</h6>
                         
                        </div>
                      </div> */}
                                        </td>
                                        <td> <span className="text-muted">{tdata.lead_details[0].phone_number}</span></td>
                                        <td>{tdata.type}</td>
                                        <td>
                                            <div>
                                                {/* <span onClick={modelCallbackEditToggle} className="mx-1">
                          <Icon.Edit callEditData={tdata} className="text-primary" size={18} />
                        </span> */}
                                                {/* <span className="mx-1">
                          <Icon.Trash2 className="text-danger" size={18} />
                        </span>
                        <span className="mx-1">
                          <Icon.Phone className="text-success" size={18} />
                        </span> */}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="row">
                            <div className="col">
                                <Pagination />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}