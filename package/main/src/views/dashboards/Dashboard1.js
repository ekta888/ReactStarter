
import React,{useState,useEffect} from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import ContactcSearch from '../../components/custom/contactc/ContactcSearch';
//import Data from '../../data/contacts/ContactsData';
// import OnCallUser from '../../components/custom/OnCallUser';
  
const Dashboard1 = () => {
  const [activeTab, setActiveTab] = useState('2');
  const [searchResults, setSearchResults] = useState([]);
  const [displayCallInfo,setDisplayCallInfo] = useState({});
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const handleSearchResults = (results) => {
    setSearchResults(results);
  }
  const handleInfoFlagChange = (data) => {
    setDisplayCallInfo(data);
  };
  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      toast.success('Logged in successfully!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.removeItem('loggedIn');
    }
  }, []);
  return (
    <>
     <ToastContainer />
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
          
           <Card>
      <CardBody>
      <TwoColumn
            leftContent={
              <>
               <ContactcSearch onSearchResults={handleSearchResults} />
               <Contactc onInfoFlagChange={handleInfoFlagChange} searchData={searchResults} />
              </>
            }
            rightContent={<ContactcDetails displayInfo={displayCallInfo}  />}
          />
      </CardBody>
    </Card>
        </TabPane>
      </TabContent> 
      {/* //  <Card>
      //   <CardBody>
      //       <OnCallUser />
      //   </CardBody>
      //   </Card> */}
    </>
  );
};

export default Dashboard1;
