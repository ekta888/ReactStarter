import React from 'react';
import { Progress } from 'reactstrap';
import DashCard from '../../dashboardCards/DashCard';

const VisitCountries = () => {
  const Cdata = [
    {
      courntry: 'India',
      visit: '6530',
      value: '48',
      high: true,
      prog: 'success',
    },
    {
      courntry: 'UAE',
      visit: '3250',
      value: '98',
      high: false,
      prog: 'info',
    },
    {
      courntry: 'Australia',
      visit: '1250',
      value: '12',
      high: true,
      prog: 'danger',
    },
    {
      courntry: 'China',
      visit: '7530',
      value: '78',
      high: false,
      prog: 'dark',
    },
    {
      courntry: 'Albania',
      visit: '6330',
      value: '48',
      high: true,
      prog: 'warning',
    },
    {
      courntry: 'Argentina',
      visit: '3250',
      value: '40',
      high: true,
      prog: 'success',
    },
  ];

  return (
    <DashCard title="Visit From the countries" subtitle="Data from the different Countries">
      {Cdata.map((ctry) => (
        <div className="mb-3 mt-4" key={ctry.courntry}>
          <div className="d-flex align-items-end">
            <div>
              <h4 className="mb-0">{ctry.visit}</h4>
              <small>From : {ctry.courntry}</small>
            </div>
            <div className="ms-auto">{ctry.value}%</div>
          </div>
          <Progress color={ctry.prog} value={ctry.value} className="mt-2" />
        </div>
      ))}
    </DashCard>
  );
};

export default VisitCountries;
