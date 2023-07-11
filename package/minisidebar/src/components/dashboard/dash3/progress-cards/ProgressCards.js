import React from 'react';
import { Row, Col } from 'reactstrap';
import DashCard from '../../dashboardCards/DashCard';

const PostCard = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Wizard Page                                                            */
    /*--------------------------------------------------------------------------------*/
    <Row>
      <Col md={6} lg={3}>
        <DashCard title="New Clients">
          <div className="d-flex align-items-center">
            <h2 className="mb-0 display-6">
              <i className="bi bi-people text-info"></i>
            </h2>
            <div className="ms-auto">
              <h2 className="mb-0">23</h2>
            </div>
          </div>
        </DashCard>
      </Col>
      <Col md={6} lg={3}>
        <DashCard title="New Projects">
          <div className="d-flex align-items-center">
            <h2 className="mb-0 display-6">
              <i className="bi bi-folder text-primary"></i>
            </h2>
            <div className="ms-auto">
              <h2 className="mb-0">169</h2>
            </div>
          </div>
        </DashCard>
      </Col>
      <Col md={6} lg={3}>
        <DashCard title="Open Projects">
          <div className="d-flex align-items-center">
            <h2 className="mb-0 display-6">
              <i className="bi bi-journal-check text-danger"></i>
            </h2>
            <div className="ms-auto">
              <h2 className="mb-0">311</h2>
            </div>
          </div>
        </DashCard>
      </Col>
      <Col md={6} lg={3}>
        <DashCard title="New Invoices">
          <div className="d-flex align-items-center">
            <h2 className="mb-0 display-6">
              <i className="bi bi-wallet text-success"></i>
            </h2>
            <div className="ms-auto">
              <h2 className="mb-0">117</h2>
            </div>
          </div>
        </DashCard>
      </Col>
    </Row>
  );
};

export default PostCard;
