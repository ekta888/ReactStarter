import React from 'react';
import { Table, Input, Badge } from 'reactstrap';
import DashCard from '../../dashboardCards/DashCard';

const RecentSales = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <DashCard
      title="Recent Sales"
      subtitle="Check the sales table"
      actions={
        <Input type="select">
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
        </Input>
      }
    >
      <div className="p-3 bg-light row">
        <div className="d-flex align-items-center">
          <div>
            <h3 className="font-weight-normal">March 2017</h3>
            <p className="mb-2 font-14 fw-light">Sales Report</p>
          </div>
          <div className="ms-auto">
            <h2 className="text-info mb-0 font-light">$3,690</h2>
          </div>
        </div>
      </div>

      <Table responsive className="mb-0 fw-light mt-3 no-wrap">
        <thead>
          <tr>
            <th className="fw-bold">#</th>
            <th className="fw-bold">Name</th>
            <th className="fw-bold">Status</th>
            <th className="fw-bold">Date</th>
            <th className="fw-bold">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="fw-light">
              1
            </th>
            <td>Elite admin</td>
            <td>
              <Badge color="success">SALE</Badge>
            </td>
            <td>April 18, 2017 </td>
            <td className="text-success">$24</td>
          </tr>
          <tr>
            <th scope="row" className="fw-light">
              2
            </th>
            <td>Real Homes WP Theme</td>
            <td>
              <Badge color="info">EXTENDED</Badge>
            </td>
            <td>April 19, 2017</td>
            <td className="text-info">$1250</td>
          </tr>
          <tr>
            <th scope="row" className="fw-light">
              3
            </th>
            <td>Ample Admin</td>
            <td>
              <Badge color="info">EXTENDED</Badge>
            </td>
            <td>April 19, 2017</td>
            <td className="text-info">$1250</td>
          </tr>
          <tr>
            <th scope="row" className="fw-light">
              4
            </th>
            <td>Medical Pro WP Theme</td>
            <td>
              <Badge color="danger">TAX</Badge>
            </td>
            <td>April 20, 2017</td>
            <td className="text-danger">-$24</td>
          </tr>
          <tr>
            <th scope="row" className="fw-light">
              5
            </th>
            <td>Hosting press html</td>
            <td>
              <Badge color="warning">SALE</Badge>
            </td>
            <td>April 20, 2017</td>
            <td className="text-success">$24</td>
          </tr>
          <tr>
            <th scope="row" className="fw-light">
              6
            </th>
            <td>Digital Agency PSD</td>
            <td>
              <Badge color="success">SALE</Badge>
            </td>
            <td>April 20, 2017</td>
            <td className="text-danger">-$14</td>
          </tr>
          <tr>
            <th scope="row" className="fw-light">
              7
            </th>
            <td>Helping Hands WP Theme</td>
            <td>
              <Badge color="warning">MEMBER</Badge>
            </td>
            <td>April 20, 2017</td>
            <td className="text-success">$64</td>
          </tr>
        </tbody>
      </Table>
    </DashCard>
  );
};

export default RecentSales;
