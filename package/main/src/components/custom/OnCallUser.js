import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroupText,
  InputGroup,
} from 'reactstrap';
import * as Icon from 'react-feather';

export default function OnCallUser() {
  return (
    <>
      <Row>
        <Col md="12">
          <Card>
            <CardTitle tag="h4" className="border-bottom bg-dark p-3 mb-0 text-white">
              Lead Information
            </CardTitle>
            <CardBody>
              <Form>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>First Name</Label>
                      <InputGroup>
                        <Input type="text" placeholder="Shaina nehwal" />
                        <InputGroupText>
                          <i className="bi bi-person-fill"></i>
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Last Name</Label>
                      <InputGroup>
                        <Input type="text" placeholder="12n" />
                        <InputGroupText>
                          <i className="bi bi-person-fill"></i>
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Address</Label>
                      <InputGroup>
                      <Input type="text" placeholder="13-B India colony" />
                      <InputGroupText>
                          <i className="bi bi-house-fill"></i>
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Country</Label>
                      <InputGroup>
                      <Input type="select" name="Select Category">
                        <option>--Select your Country--</option>
                        <option>India</option>
                        <option>Sri Lanka</option>
                        <option>USA</option>
                      </Input>
                      <InputGroupText>
                          <i className="bi bi-flag-fill"></i>
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>State</Label>
                      <InputGroup>
                      <Input type="text" placeholder="" />
                      <InputGroupText>
                          <i className="bi bi-flag-fill"></i>
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Province</Label>
                      <InputGroup>
                      <Input type="text" placeholder="" />
                      <InputGroupText>
                          <i className="bi bi-geo-alt-fill"></i>
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Post Code</Label>
                      <InputGroup>
                      <Input type="text" placeholder="" />
                      <InputGroupText>
                          <i className="bi bi-geo-alt-fill"></i>
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Date of Birth</Label>
                      <Input type="date" placeholder="DOB Here" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Email</Label>
                      <InputGroup>
                      <Input type="text" placeholder="" />
                      <InputGroupText>
                          <i className="bi bi-envelope-fill"></i>
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Phone Code</Label>
                      <InputGroup>
                      <Input type="text" placeholder="" />
                      <InputGroupText>
                          <i className="bi bi-phone-fill"></i>
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Phone No.</Label>
                      <InputGroup>
                      <Input type="text" placeholder="" />
                      <InputGroupText>
                          <Icon.Phone size={20} />
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Alternate Phone No.</Label>
                      <InputGroup>
                      <Input type="text" placeholder="" />
                      <InputGroupText>
                          <Icon.Phone size={20} />
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label>Select Gender</Label>
                      <InputGroup>
                      <Input type="select" name="Select Gender">
                        <option>Female</option>
                        <option>Male</option>
                      </Input>
                      <InputGroupText>
                          <i className="bi bi-people-fill"></i>
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label>Description</Label>
                      <InputGroup>
                      <Input type="text" placeholder="" />
                      <InputGroupText>
                          <i className="bi bi-pencil-fill"></i>
                        </InputGroupText>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
            <CardBody className="border-top gap-2 d-flex justify-content-center">
              <Button type="submit" className="btn btn-success">
                <Icon.PhoneCall size={20} />
              </Button>
              {/* <Button type="button" className="btn btn-dark ml-2">
                Cancel
              </Button> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
