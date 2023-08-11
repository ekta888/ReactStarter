import React from 'react';
import { Button } from 'reactstrap';
import Chart from 'react-apexcharts';
import DashCard from '../../dashboardCards/DashCard';

const MonthlyUsage = () => {
  const optionsmonthylusage = {
    chart: {
      fontFamily: 'Rubik,sans-serif',
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 15,
          size: '70%',
        },
        track: {
          background: '#e7e7e7',
          strokeWidth: '80%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            opacity: 0.31,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 0,
            fontSize: '16px',
            color: '#99abb4',
          },
        },
      },
    },
    fill: {
      colors: ['rgb(44, 208, 126)'],
    },
    labels: ['Estimated Sales'],
  };
  const seriesmonthylusage = [76];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <DashCard
      title="Monthly Useage"
      subtitle="Check the data monthly"
      actions={<h3 className="fw-bold">$58.80</h3>}
    >
      <div className="mt-5 mb-4">
        <Chart
          options={optionsmonthylusage}
          series={seriesmonthylusage}
          type="radialBar"
          height="320"
        />
      </div>

      <div className="d-flex align-items-center p-3 border-top mt-5">
        <div>
          <span className="display-7">
            <span className="fw-bold">26.30</span>
          </span>
          <h4 className="mb-0 font-weight-light">AMps Used</h4>
        </div>
        <div className="ms-auto">
          <Button color="info" size="lg" className="btn-circle text-white">
            <i className="bi bi-dashboard"></i>
          </Button>
        </div>
      </div>
    </DashCard>
  );
};

export default MonthlyUsage;
