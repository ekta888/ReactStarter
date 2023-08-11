import React from 'react';
import Chart from 'react-apexcharts';
import { Button } from 'reactstrap';
import DashCard from '../../dashboardCards/DashCard';

const TotalSales = () => {
  const optiontotalsales = {
    chart: {
      fontFamily: 'Rubik,sans-serif',
      type: 'donut',
      height: 300,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75px',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '16px',
              color: undefined,
              offsetY: 10,
            },
            value: {
              show: false,
              color: '#99abb4',
            },
            total: {
              show: true,
              label: 'Sales',
              color: '#99abb4',
            },
          },
        },
      },
    },
    tooltip: {
      fillSeriesColor: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    legend: {
      show: false,
    },
    labels: ['Open', 'Clicked', 'Un-opened', 'Bounced'],
    colors: ['#2cabe3', '#2cd07e', '#ff5050', '#7bcef3'],
  };
  const seriestotalsales = [40, 12, 28, 60];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <DashCard title="Sales" subtitle="Monthly Sales">
      <div
        className="my-4 d-flex align-items-center justify-content-center"
        style={{ height: '305px' }}
      >
        <Chart options={optiontotalsales} series={seriestotalsales} type="donut" height="240" />
      </div>
      <div className="d-flex align-items-center mt-5">
        <div>
          <h4 className="fw-bold">Total Sales</h4>
          <h6 className="text-muted">160 sales monthly</h6>
        </div>
        <div className="ms-auto">
          <Button color="info" className="btn-circle btn-lg text-white">
            <i className="bi bi-cart"></i>
          </Button>
        </div>
      </div>
    </DashCard>
  );
};

export default TotalSales;
