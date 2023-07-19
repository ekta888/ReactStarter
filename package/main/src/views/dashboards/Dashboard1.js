
import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardBody,
} from 'reactstrap';

import Contactc from '../../components/custom/contactc/Contactc';
import ContactcDetails from '../../components/custom/contactc/ContactcDetails';
import TwoColumn from '../../components/twoColumn/TwoColumn';
import NoteSearch from '../../components/apps/contact/ContactSerch';


// import Data from '../../data/contacts/ContactsData';

const Dashboard1 = () => {
   console.log('Data----', Contactc);
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === '1' ? 'active' : ''}
            onClick={() => {
              toggle('1');
            }}
          >
            Call History
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '2' ? 'active' : ''}
            onClick={() => {
              toggle('2');
            }}
          >
            Contacts
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="p-4" activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12"></Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          {/* <Row>
            <div className="p-3 border-bottom text-end">
              <Button color="danger" className="" onClick={modelToggle}>
                Add New Contact
              </Button>
              <Contactc />
            </div>
          </Row> */}
           <Card>
      <CardBody>
      <TwoColumn
            leftContent={
              <>
               <NoteSearch />
               <Contactc />
              </>
            }
            rightContent={<ContactcDetails />}
          />
      </CardBody>
    </Card>
        </TabPane>
      </TabContent>
    </>
  );
};

export default Dashboard1;
