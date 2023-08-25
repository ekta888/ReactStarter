import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import {getCountryDrp} from '../../../common/common';
//   import * as Icon from 'react-feather';

export default function ContactcEdit(prop) {
  //const { data } = prop.data;
  //console.log('props666', prop.data);
  const navigate = useNavigate();
  let defaultCountryOption = null;
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
  const [leadGroupUuid, setLeadGroupUuid] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [postalCode, setPostalCode] = useState();
  const [leadStatus, setLeadStatus] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [province, setProvince] = useState();
  const [dob, setDob] = useState();
  const [alternatePhoneNumber, setAlternatePhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [description, setDescription] = useState();
  const [countrylist, setCountryList] = useState();

 
  useEffect(() => {
    if (prop.data) {
      // Pre-fill the form fields with user data when the 'user' prop changes
      setLeadGroupUuid(prop.data.lead_group_uuid || '');
      setFirstName(prop.data.first_name || '');
      setLastName(prop.data.last_name || '');
      setPhoneNumber(prop.data.phone_number || '');
      setPostalCode(prop.data.postal_code || '');
      setLeadStatus(prop.data.lead_status || '');
      setGender(prop.data.gender || '');
      setAddress(prop.data.address || '');
      setCity(prop.data.city || '');
      setState(prop.data.state || '');
      setCountry(prop.data.country_uuid || '');
      setProvince(prop.data.province || '');
      setDob(prop.data.dob || '');
      setAlternatePhoneNumber(prop.data.alternate_phone_number || '');
      setEmail(prop.data.email || '');
      setDescription(prop.data.description || '');
      // ... set other fields here ...
    }
  }, [prop.data]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const apiUrl = `${process.env.REACT_APP_API_URL}/lead-management/cf16167e-cb4c-4be0-b14d-eaa3cbcdb00b`;
    const accessToken = localStorage.getItem('authToken');

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    };

    const requestBody = {
      lead_group_uuid: leadGroupUuid,
      first_name: firstName,
      last_name: lastName,
      address,
      city,
      phone_number: phoneNumber,
      lead_status: leadStatus,
      state,
      province,
      postal_code: postalCode,
      dob,
      phone_code: null,
      alternate_phone_number: alternatePhoneNumber,
      email,
      country_uuid: country,
      gender,
      description
    };

    axios.put(apiUrl, requestBody, config) .then((response) => {
        console.log("reeeeee",response);
        if (response.data.statusCode === 200) {
          // You can handle the response status code accordingly
          toast.success(response.data.data, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        // Handle the response data (if required)
        setTimeout(() => {
          navigate('/');
        }, 2500);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });
  };
  useEffect(() => {
    getCountryDrp(setCountryList);
  }, []);
  
  if (countrylist) {
    countrylist.data.forEach((clist) => {
      //console.log("clistttt",clist.uuid);
      //console.log("prop.data.country_uuid",prop.data.country_uuid);
      if (clist.uuid === prop.data.country_uuid) {
        defaultCountryOption = { label: clist.country, value: clist.uuid };
       }
    });
  }
  return (
    <>
      <ToastContainer />
      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Lead Group</Label>
                      <InputGroup>
                        <Input
                          type="select"
                          name="lead_group_uuid"
                          value={leadGroupUuid}
                          onChange={(e) => setLeadGroupUuid(e.target.value)}
                        >
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
                        <Input
                          type="text"
                          className="form-control"
                          value={firstName}
                          name="firstName"
                          id="firstName"
                          placeholder="Enter First Name"
                          onChange={(e) => setFirstName(e.target.value)}
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
                        <Input
                          type="text"
                          name="lastName"
                          value={lastName}
                          placeholder="Enter Last Name"
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Phone Number</Label>
                      <InputGroup>
                        <Input
                          type="text"
                          name="phoneNumber"
                          value={phoneNumber}
                          placeholder="Enter Phone Number"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Lead Status</Label>
                      <InputGroup>
                        <Input
                          type="select"
                          name="leadStatus"
                          onChange={(e) => setLeadStatus(e.target.value)}
                        >
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
                        <Input
                          type="select"
                          name="gender"
                          placeholder="Select Your Gender"
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option>--Select Your Gender--</option>
                          <option value="0">MALE</option>
                          <option value="1">FEMALE</option>
                          <option value="2">OTHER</option>
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
                        <Input
                          type="text"
                          name="address"
                          value={address}
                          placeholder="Enter Your Address"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>City</Label>
                      <InputGroup>
                        <Input
                          type="text"
                          name="city"
                          value={city}
                          placeholder="Enter Your City"
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>State</Label>
                      <InputGroup>
                        <Input
                          type="text"
                          name="state"
                          value={state}
                          placeholder="Enter State"
                          onChange={(e) => setState(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Country</Label>
                      <InputGroup>
                      {console.log("countyyy44",defaultCountryOption)}
                      <Select
                          className="col-md-12"
                          name="country"
                          placeholder="Enter Country"
                          value={defaultCountryOption}
                          onChange={(selectedOption) => setCountry(selectedOption)}
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
                      <Input
                        type="text"
                        name="province"
                        value={province}
                        placeholder="Enter Province"
                        onChange={(e) => setProvince(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Postal Code</Label>
                      <InputGroup>
                        <Input
                          type="text"
                          name="postalCode"
                          value={postalCode}
                          placeholder="Enter Postal Code"
                          onChange={(e) => setPostalCode(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Date Of Birth</Label>
                      <InputGroup>
                        <Input
                          type="date"
                          name="dob"
                          value={dob}
                          placeholder="dd/mm/yy"
                          onChange={(e) => setDob(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Email</Label>
                      <InputGroup>
                        <Input
                          type="text"
                          name="email"
                          value={email}
                          placeholder="Enter Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Alternate Phone No.</Label>
                      <InputGroup>
                        <Input
                          type="text"
                          name="alternatePhoneNumber"
                          value={alternatePhoneNumber}
                          placeholder="Enter Phone Number"
                          onChange={(e) => setAlternatePhoneNumber(e.target.value)}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Description</Label>
                      <InputGroup>
                        <Input
                          type="text"
                          name="description"
                          value={description}
                          placeholder="Enter Description"
                          onChange={(e) => setDescription(e.target.value)}
                        />
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
