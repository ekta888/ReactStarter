import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
/// import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
} from 'reactstrap';
//   import * as Icon from 'react-feather';
import getCountryDrp from '../../../common/common';

export default function ContactcAdd() {
  const navigate = useNavigate();
 // const { register, handleSubmit, formState: { errors } } = useForm();
  // const [formData, setFormData] = useState({
  //   lead_group_uuid: '',
  //   first_name: '',
  //   last_name: '',
  //   phone_number: '',
  //   postal_code: '',
  //   lead_status: '',
  //   gender: '',
  //   address: '',
  //   city: '',
  //   state: '',
  //   country: '',
  //   province: '',
  //   dob: '',
  //   email: '',
  //   alternate_phone_number: '',
  //   description: '',
  //   // Add more fields as needed
  // });
  const [leadGroupUuid,setLeadGroupUuid] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [postalCode, setPostalCode] = useState();
  const [leadStatus,setLeadStatus] = useState();
  const [gender,setGender] = useState();
  const [address,setAddress] = useState();
  const [city,setCity] = useState();
  const [state,setState] = useState();
  const [country,setCountry] = useState();
  const [province,setProvince] = useState();
  const [dob,setDob] = useState();
  const [alternatePhoneNumber,setAlternatePhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [description,setDescription] = useState();
  const [countrylist, setCountryList] = useState();
 
  const handleSubmit = (event) => {
   // setFormData(data);
     console.log("44444",leadGroupUuid);
    // console.log("44444",country);
    event.preventDefault();
    const apiUrl = `${process.env.REACT_APP_API_URL}/lead-management/agent`;
    // console.log(apiUrl);
    const config = {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
        'Content-Type': 'application/json'
      }
    };

    const requestBody = { 
      'lead_group_uuid':'cf16167e-cb4c-4be0-b14d-eaa3cbcdb00b',
      'first_name':firstName,
      'last_name':lastName,
      'address':address,
      'city':city,
      'phone_number':phoneNumber,
      'lead_status':leadStatus,
      'state':state,
      'province':province,
      'postal_code':postalCode,
      'dob':dob,
      'phone_code':null,
      'alternate_phone_number':alternatePhoneNumber,
      'email':email,
      'country_uuid':country,
      'gender':gender,
      'description':description
     };

    axios.post(apiUrl, requestBody, config)
      .then(response => {
        if(response.data.statusCode === 201){
          toast.success(response.data.data, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        setTimeout(() => {
          navigate('/');
        }, 2500);
        console.log(response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
      });
  };
  useEffect(() => {
    getCountryDrp(setCountryList);
  }, []);
  return (
    <>
    <ToastContainer />
    <Row>
      <Col md="12">
        <Card>
          <CardBody>
            <Form  onSubmit={handleSubmit}>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Lead Group</Label>
                    <InputGroup>
                      <Input type="select" name="lead_group_uuid" onChange={(e) => setLeadGroupUuid(e.target.value)} >
                        <option>--Select Lead Group--</option>
                        <option>ekta</option>
                        <option>harsh</option>
                        <option>bhagyesh</option>
                      </Input>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <InputGroup>
                      <Input type="text" className='form-control' name="firstName" id="firstName" placeholder="Enter First Name" onChange={(e) => setFirstName(e.target.value)}
                       />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Last Name</Label>
                    <InputGroup>
                      <Input type="text" name="lastName" placeholder="Enter Last Name"  onChange={(e) => setLastName(e.target.value)} />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Phone Number</Label>
                    <InputGroup>
                      <Input type="text" name="phoneNumber" placeholder="Enter Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Lead Status</Label>
                    <InputGroup>
                      <Input type="select" name="leadStatus" onChange={(e) => setLeadStatus(e.target.value)}  >
                        <option>--Select Lead Status--</option>
                        <option>ekta</option>
                        <option>harsh</option>
                        <option>bhagyesh</option>
                      </Input>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Gender</Label>
                    <InputGroup>
                      <Input type="select" name="gender" placeholder="Select Your Gender"  onChange={(e) => setGender(e.target.value)}>
                        <option>--Select Your Gender--</option>
                        <option value='0'>MALE</option>
                        <option value='1'>FEMALE</option>
                        <option value='2'>OTHER</option>
                      </Input>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Address</Label>
                    <InputGroup>
                      <Input type="text" name="address" placeholder="Enter Your Address" onChange={(e) => setAddress(e.target.value)}  />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>City</Label>
                    <InputGroup>
                      <Input type="text" name="city" placeholder="Enter Your City" onChange={(e) => setCity(e.target.value)}  />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>State</Label>
                    <InputGroup>
                      <Input type="text" name="state" placeholder="Enter State"  onChange={(e) => setState(e.target.value)} />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Country</Label>
                    <InputGroup>
                      {/* <Input type="text" name="country" placeholder="Enter Country" onChange={(e) => setCountry(e.target.value)} /> */}
                      <Select
                          className="col-md-12"
                          name="country"
                          placeholder="Enter Country"
                          onChange={(value) => setCountry(value.value)}
                          options={
                            countrylist &&
                            countrylist.data.map((clist) => ({
                              label: clist.country,
                              value: clist.uuid,
                            }))
                          }
                        />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Province</Label>
                    <Input type="text" name="province" placeholder="Enter Province" onChange={(e) => setProvince(e.target.value)} />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Postal Code</Label>
                    <InputGroup>
                      <Input type="text" name="postalCode" placeholder="Enter Postal Code" onChange={(e) => setPostalCode(e.target.value)}  />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Date Of Birth</Label>
                    <InputGroup>
                      <Input type="date" name="dob" placeholder="dd/mm/yy" onChange={(e) => setDob(e.target.value)} />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Email</Label>
                    <InputGroup>
                      <Input type="text" name="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}  />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Alternate Phone No.</Label>
                    <InputGroup>
                      <Input type="text" name="alternatePhoneNumber" placeholder="Enter Phone Number"  onChange={(e) => setAlternatePhoneNumber(e.target.value)} />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Description</Label>
                    <InputGroup>
                      <Input type="text" name="description" placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)}  />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row> 
              <CardBody className="border-top gap-2 d-flex justify-content-center">
            <Button type="submit" className="btn btn-success mr-2">
              Save
            </Button>
            <Button type="button" className="btn btn-dark" onClick={() => navigate('/')}>
              Cancel
            </Button>
          </CardBody>
            </Form>
          </CardBody>
         
        </Card>
      </Col>
    </Row>
    </>
  );
}
