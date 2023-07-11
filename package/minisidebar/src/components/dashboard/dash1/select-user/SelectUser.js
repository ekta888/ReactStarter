import React, { useState } from 'react';

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  Row,
  Col,
  Input,
  FormGroup,
  Label,
  Button,
} from 'reactstrap';
import SimpleBar from 'simplebar-react';
import RecentChat from '../recent-chat/RecentChat';
import './tab.scss';
import UserTable from './userTable';

const SelectUser = () => {
  const [activeTab, setActiveTab] = useState('1');
  const tabText = [
    {
      title: 'Users',
      id: '1',
    },
    {
      title: 'Permission',
      id: '2',
    },
    {
      title: 'Chat',
      id: '3',
    },
    {
      title: 'Profile',
      id: '4',
    },
  ];
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <CardBody className="bg-info p-0 rounded-top">
        <Nav tabs className="select-user-tabs">
          {tabText.map((tb) => (
            <NavItem key={tb.id}>
              <NavLink
                className={`cursor-pointer ${activeTab === tb.id ? 'active' : ''}`}
                onClick={() => {
                  toggle(tb.id);
                }}
              >
                {tb.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </CardBody>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div>
            <div className="p-4">
              <h4 className="mb-0">Search Users to Manage</h4>
            </div>
            <SimpleBar style={{ height: '470px' }}>
              <div className="bg-light p-4">
                <UserTable />
              </div>
            </SimpleBar>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col>
              <div className="p-4">
                <h4 className="mb-0">Give Permission</h4>
              </div>
              <div className="bg-light p-4 position-relative" style={{ height: '375px' }}>
                <FormGroup check>
                  <Label check>
                    <Input name="radio1" type="radio" /> Admin
                  </Label>
                </FormGroup>
                <br />
                <FormGroup check>
                  <Label check>
                    <Input name="radio1" type="radio" /> Subscriber
                  </Label>
                </FormGroup>
                <br />
                <FormGroup check>
                  <Label check>
                    <Input name="radio1" type="radio" /> Support Manager
                  </Label>
                </FormGroup>
              </div>
              <div className="d-flex align-items-center p-4 mt-2">
                <h3 className="font-weight-light">No roles assigned</h3>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <div className="p-4">
                <RecentChat />
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <Card className="mb-0">
                <CardBody>
                  <h3 className="font-weight-light mb-0">Save and you are done</h3>
                </CardBody>
                <div
                  className="bg-light d-flex align-items-center justify-content-center px-5 py-3 position-relative"
                  style={{ height: '493px' }}
                >
                  <Button color="success" size="lg" className="btn-rounded">
                    Save & Finish
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Card>
  );
};

export default SelectUser;
