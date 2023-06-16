import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import axios from "axios";                                                                                                         
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
export default function Companysearch() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [companyName, setCompanyName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [sipprofile, setSipProfile] = useState();
  const [trunk, setTrunk] = useState();
  const [channel, setChannel] = useState();
  const [domain, setDomain] = useState();

  const handleSearch = (event) => {
    event.preventDefault();
    const searchData = {
      firstName,
      lastName,
      companyName,
      userName,
      email,
      sipprofile,
      trunk,
      channel,
      domain,
    };

    axios
      .get("/search", { params: searchData }) // Send form data as query parameters
      .then((response) => {
        // Handle the response from the Express API
        console.log(response.data);
        // Perform further actions with the search results
      })
      .catch((error) => {
        console.error("Error occurred during search:", error);
        // Handle the error
      });
  };
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md="12">
          <Card>
            <Card.Body>
              <Form onSubmit={handleSearch}>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label className="card-title font-weight-bold">
                        First Name
                      </label>
                      <Form.Control
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label className="card-title font-weight-bold">
                        Last Name
                      </label>
                      <Form.Control
                        placeholder="Last Name"
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label className="card-title font-weight-bold">
                        Company
                      </label>
                      <Form.Control
                        name="companyName"
                        placeholder="Company"
                        type="text"
                        onChange={(e) => setCompanyName(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label className="card-title font-weight-bold">
                        Username
                      </label>
                      <Form.Control
                        name="userName"
                        placeholder="Username"
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label className="card-title font-weight-bold">
                        Email address
                      </label>
                      <Form.Control
                        name="email"
                        placeholder="Email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label className="card-title font-weight-bold">
                        Sip Profile
                      </label>
                      <Controller
                        name="sipprofile"
                        // {...register("sipprofile", { required: true })}
                        control={control}
                        className="small"
                        defaultValue={null}
                        render={({ field }) => (
                          <Select
                            className="small"
                            onChange={(e) => setSipProfile(e.target.value)}
                            {...field}
                          />
                        )}
                      />
                    </Form.Group>
                  </Col>

                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label className="card-title font-weight-bold">
                        Trunk
                      </label>
                      <Controller
                        name="trunk"
                        // {...register("trunk", { required: true })}
                        control={control}
                        className="small"
                        defaultValue={null}
                        render={({ field }) => (
                          <Select
                            className="small"
                            onChange={(e) => setTrunk(e.target.value)}
                            {...field}
                          />
                        )}
                      />
                    </Form.Group>
                  </Col>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label className="card-title font-weight-bold">
                        Status
                      </label>
                      <select
                        className="form-control small"
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="A">Active</option>
                        <option value="D">Disable</option>
                      </select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label className="card-title font-weight-bold">
                        Channel
                      </label>
                      <Form.Control
                        name="channel"
                        placeholder="Channel"
                        type="text"
                        onChange={(e) => setChannel(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label className="card-title font-weight-bold">
                        Domain
                      </label>
                      <Form.Control
                        name="domain"
                        placeholder="Domain"
                        type="text"
                        onChange={(e) => setDomain(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <div className="col d-flex justify-content-center ">
                  <Button
                    type="submit"
                    className="btn-primary btn-fill btn m-1"
                  >
                    Search
                  </Button>
                  <Button
                    type="reset"
                    variant="dark"
                    className="btn-dark btn-fill btn m-1"
                  >
                    Reset
                  </Button>
                </div>
                {/* <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button> */}
                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
