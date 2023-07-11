import React from 'react';
import { Card, CardGroup, Progress } from 'reactstrap';

const TopCards = () => {
  return (
    <div>
      <CardGroup>
        <Card className="p-2 p-lg-3">
          <div className="p-lg-3 p-2">
            <div className="d-flex align-items-center">
              <div className="circle-box lg-box text-white bg-danger flex-shrink-0">
                <i className="bi bi-clipboard"></i>
              </div>
              <div className="ms-4 w-100 me-3">
                <h4 className="font-light">Total Projects</h4>
                <Progress value="4" color="danger" max="5" width="100%" />
              </div>
              <div className="ms-auto">
                <h2 className="display-7 mb-0">23</h2>
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-2 p-lg-3">
          <div className="p-lg-3 p-2">
            <div className="d-flex align-items-center">
              <div className="circle-box lg-box text-white bg-info flex-shrink-0">
                <i className="bi bi-wallet2"></i>
              </div>
              <div className="ms-4 w-100 me-3">
                <h4 className="font-light">Total Earnings</h4>
                <Progress value="3" color="info" max="5" />
              </div>
              <div className="ms-auto">
                <h2 className="display-7 mb-0">76</h2>
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-2 p-lg-3">
          <div className="p-lg-3 p-2">
            <div className="d-flex align-items-center">
              <div className="circle-box lg-box text-white bg-warning flex-shrink-0">
                <i className="bi bi-currency-euro"></i>
              </div>
              <div className="ms-4 w-100 me-3">
                <h4 className="font-light">Total Earnings</h4>
                <Progress value="4" color="warning" max="5" />
              </div>
              <div className="ms-auto">
                <h2 className="display-7 mb-0">83</h2>
              </div>
            </div>
          </div>
        </Card>
      </CardGroup>
    </div>
  );
};

export default TopCards;
