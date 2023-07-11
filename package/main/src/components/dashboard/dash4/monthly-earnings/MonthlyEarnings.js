import React from 'react';

import { Card, CardBody, Button, Input } from 'reactstrap';

import user1 from '../../../../assets/images/users/user1.jpg';
import user2 from '../../../../assets/images/users/user2.jpg';
import user4 from '../../../../assets/images/users/user4.jpg';

const MonthlyEarnings = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <div className="p-4 border-bottom">
        <div className="d-flex align-items-center">
          <div>
            <h5 className="mb-0 ">Monthly Earnings</h5>
            <h3 className="mb-0 fw-bold">$580.50</h3>
          </div>
          <div className="ms-auto">
            <Input type="select">
              <option>January 2022</option>
              <option>February 2020</option>
              <option>March 2019</option>
            </Input>
          </div>
        </div>
      </div>
      <CardBody className="bg-light pt-0">
        <div className="d-flex align-items-center py-3">
          <img src={user1} className="rounded-circle" width="50" alt="user" />
          <div className="ms-3">
            <h5 className="font-normal mb-0">Andrew Simon</h5>
            <span className="text-muted">10-11-2016</span>
          </div>
          <div className="ms-auto">
            <h3 className="mb-0 fw-bold">$46</h3>
          </div>
        </div>
        {/* 2 */}
        <div className="d-flex align-items-center py-3">
          <img src={user2} className="rounded-circle" width="50" alt="user" />
          <div className="ms-3">
            <h5 className="font-normal mb-0">John Deo</h5>
            <span className="text-muted">01-11-2018</span>
          </div>
          <div className="ms-auto">
            <h3 className="mb-0 fw-bold">$56</h3>
          </div>
        </div>
        {/* 4 */}
        <div className="d-flex align-items-center py-3">
          <img src={user4} className="rounded-circle" width="50" alt="user" />
          <div className="ms-3">
            <h5 className="font-normal mb-0">Emily Sion</h5>
            <span className="text-muted">14-04-2018</span>
          </div>
          <div className="ms-auto">
            <h3 className="mb-0 fw-bold">$12</h3>
          </div>
        </div>
        {/* 2 */}
        <div className="d-flex align-items-center py-3">
          <img src={user2} className="rounded-circle" width="50" alt="user" />
          <div className="ms-3">
            <h5 className="font-normal mb-0">John Deo</h5>
            <span className="text-muted">01-11-2018</span>
          </div>
          <div className="ms-auto">
            <h3 className="mb-0 fw-bold">$56</h3>
          </div>
        </div>
        <Button color="info" className="btn-rounded py-2 font-14" size="sm" block>
          Withdrow Money
        </Button>
      </CardBody>
    </Card>
  );
};

export default MonthlyEarnings;
