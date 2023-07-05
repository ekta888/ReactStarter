import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import axios from "axios";
import Searchwith from "components/Custom/Searchwith";
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
export default function Companysearch(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [companyName, setCompanyName] = useState()
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [domain, setDomain] = useState();
  const [status, setStatus] = useState();
  const [searchWithValue, setSearchWithValue] = useState({
    value: "",
    fieldName: "",
  });
  const handleSearchWithValueChange = (value, field) => {
    setSearchWithValue((prevFields) => {
      if (prevFields && Array.isArray(prevFields)) {
        // return [...prevFields, { value: value, fieldName: field }];
        const updatedFields = prevFields.filter((f) => f.fieldName !== field);
        return [...updatedFields, { value: value, fieldName: field }];
      } else {
        return [{ value: value, fieldName: field }];
      }
    });
  };
  const handleSearch = (event) => {
    event.preventDefault();
    const searchData = {
      companyName,
      userName,
      email,
      domain,
      status,
    };
    let searchObject = {};
    searchObject = Object.assign(
      {},
      ...(Array.isArray(searchWithValue)
        ? searchWithValue
            .filter((item) => item.value !== "") // Filter out items with empty values
            .map((item) => ({
              [item.fieldName]: {
                ...item,
                [item.fieldName]: searchData[item.fieldName],
              },
            }))
        : [])
    );
    if (status) {
      searchObject = {
        ...searchObject,
        status: { value: status, fieldName: "status", status: status },
      };
    }
    axios
      .get("/search", { params: searchObject }) // Send form data as query parameters
      .then((response) => {
        const apiResponse = response.data;
        props.onSearchApiResponse(apiResponse);
      })
      .catch((error) => {
        console.error("Error occurred during search:", error);
      });
  };
  const handleResetClick = () => {
    setCompanyName("");
    setUserName("");
    setEmail("");
    setDomain("");
    setStatus("");
    localStorage.removeItem('searchResultStorage');
    props.onRestClearResponse();
  };                                                                                                                                                                                                                                                                                                                                                                                                                   
  return (

      <Container fluid>
        <Row className="justify-content-center">
          <Col md="12">
            <Card>
              <Card.Body>
                <Form onSubmit={handleSearch}>
                  {/* <Row>
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
                </Row> */}
                  <Row className="justify-content-center">
                    <Card className="m-2">
                      <div className="row m-1">
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label className="card-title font-weight-bold">
                              Company
                            </label>
                            <Form.Control
                              value={companyName}
                              name="companyName"
                              placeholder="Company"
                              type="text"
                              onChange={(e) => setCompanyName(e.target.value)}
                            />
                          </Form.Group>
                        </Col>

                        <Col md="6">
                          <Searchwith
                            onSearchWithValueChange={
                              handleSearchWithValueChange
                            }
                            fieldName="companyName"
                          />
                        </Col>
                      </div>
                    </Card>
                    <Card className="m-2">
                      <div className="row m-1">
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label className="card-title font-weight-bold">
                              Username
                            </label>
                            <Form.Control
                              value={userName}
                              name="userName"
                              placeholder="Username"
                              type="text"
                              onChange={(e) => setUserName(e.target.value)}
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Searchwith
                            onSearchWithValueChange={
                              handleSearchWithValueChange
                            }
                            fieldName="userName"
                          />
                        </Col>
                      </div>
                    </Card>
                    <Card className="m-2">
                      <div className="row m-1">
                        <Col className="pr-1" md="6">
                          <Form.Group>
                            <label className="card-title font-weight-bold">
                              Email address
                            </label>
                            <Form.Control
                              name="email"
                              placeholder="Email"
                              type="text"
                              onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Searchwith
                            onSearchWithValueChange={
                              handleSearchWithValueChange
                            }
                            fieldName="email"
                          />
                        </Col>
                      </div>
                    </Card>
                    <Card className="m-2">
                      <div className="row m-1">
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
                        <Col md="6">
                          <Searchwith
                            onSearchWithValueChange={
                              handleSearchWithValueChange
                            }
                            fieldName="domain"
                          />
                        </Col>
                      </div>
                    </Card>
                  </Row>

                  <Row className="">
                    {/* <Col className="pr-1" md="4">
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
                  </Col> */}

                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label className="card-title font-weight-bold">
                          Status
                        </label>
                        <select
                          className="form-control small"
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option value="">--Select--</option>
                          <option value="0">Active</option>
                          <option value="1">Inactive</option>
                        </select>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* <Row>
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
                
                </Row> */}

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
                      onClick={handleResetClick}
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
