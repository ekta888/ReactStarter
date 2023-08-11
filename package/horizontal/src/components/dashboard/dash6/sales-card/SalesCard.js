import React from 'react';
import { Progress, Row, Col } from 'reactstrap';
import DashCard from '../../dashboardCards/DashCard';

const SalesCard = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <div>
      <Row>
        <Col lg={3}>
          <DashCard title="Daliy Sales">
            <div className="text-end">
              <span className="text-muted ">Today&apos;s Income</span>
              <h3 className="mt-2">
                <sup>
                  <i className="bi bi-arrow-up text-success"></i>
                </sup>
                $12,000
              </h3>
            </div>
            <span className="text-success">20%</span>
            <Progress color="success" value="25" />
          </DashCard>
        </Col>
        <Col lg={3}>
          <DashCard title="Weekly Sales">
            <div className="text-end">
              <span className="text-muted ">Weekly Income</span>
              <h3 className="mt-2">
                <sup>
                  <i className="bi bi-arrow-down text-info"></i>
                </sup>
                $5,000
              </h3>
            </div>
            <span className="text-info">30%</span>
            <Progress color="info" value="30" />
          </DashCard>
        </Col>
        <Col lg={3}>
          <DashCard title="Monthly Sales">
            <div className="text-end">
              <span className="text-muted ">Monthly Income</span>
              <h3 className="mt-2">
                <sup>
                  <i className="bi bi-arrow-down text-danger"></i>
                </sup>
                $10,000
              </h3>
            </div>
            <span className="text-danger">60%</span>
            <Progress color="danger" value="60" />
          </DashCard>
        </Col>
        <Col lg={3}>
          <DashCard title="Yearly Sales">
            <div className="text-end">
              <span className="text-muted ">Yearly Income</span>
              <h3 className="mt-2">
                <sup>
                  <i className="bi bi-arrow-up text-inverse"></i>
                </sup>
                $9,000
              </h3>
            </div>
            <span className="text-dark">20%</span>
            <Progress color="dark" value="20" />
          </DashCard>
        </Col>
      </Row>
    </div>
  );
};

export default SalesCard;
