import React from 'react';
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

export default function ContactcAdd() {
  return (
    <Row>
      <Col md="12">
        <Card>
          <CardBody>
            <Form>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Lead Group</Label>
                    <InputGroup>
                      <Input type="select" name="Select Lead Group">
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
                    <Label>First Name</Label>
                    <InputGroup>
                      <Input type="text" placeholder="Enter First Name " />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Last Name</Label>
                    <InputGroup>
                      <Input type="text" placeholder="Enter Last Name" />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Phone Number</Label>
                    <InputGroup>
                      <Input type="text" placeholder="Enter Phone Number" />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Lead Status</Label>
                    <InputGroup>
                      <Input type="select" name="Select Lead Status">
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
                      <Input type="select" placeholder="Select Your Gender ">
                        <option>--Select Your Gender--</option>
                        <option>MALE</option>
                        <option>FEMALE</option>
                        <option>OTHER</option>
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
                      <Input type="text" placeholder="Enter Your Address" />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>City</Label>
                    <InputGroup>
                      <Input type="text" placeholder="Enter Your City" />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>State</Label>
                    <InputGroup>
                      <Input type="text" placeholder="Enter State" />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Country</Label>
                    <InputGroup>
                      <Input type="text" placeholder="Enter Country" />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Province</Label>
                    <Input type="text" placeholder="Enter Province" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Postal Code</Label>
                    <InputGroup>
                      <Input type="text" placeholder="Enter Postal Code" />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Date Of Birth</Label>
                    <InputGroup>
                      <Input type="date" placeholder="dd/mm/yy" />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Email</Label>
                    <InputGroup>
                      <Input type="text" placeholder="Enter Email" />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Alternate Phone No.</Label>
                    <InputGroup>
                      <Input type="text" placeholder="Enter Phone Number" />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Description</Label>
                    <InputGroup>
                      <Input type="text" placeholder="Enter Description" />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </CardBody>
          <CardBody className="border-top gap-2 d-flex justify-content-center">
          <Button type="button" className="btn btn-success mr-2">
                  Save
                </Button>
                <Button type="button" className="btn btn-dark">
                  Cancel
                </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
