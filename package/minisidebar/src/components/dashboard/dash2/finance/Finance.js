import React from 'react';
import Chart from 'react-apexcharts';
import { Button } from 'reactstrap';
import DashCard from '../../dashboardCards/DashCard';

const Finanace = () => {
  const optionfinanace = {
    chart: {
      fontFamily: 'Rubik,sans-serif',
      type: 'radialBar',
      height: 300,
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          value: {
            show: false,
          },
          total: {
            show: true,
            color: '#a1aab2',
            fontSize: '18px',
            fontWeight: '400',
            label: 'Sales',
          },
        },
      },
    },
    track: {
      show: true,
      startAngle: 270,
      background: 'transparent',
      strokeWidth: '0',
      opacity: 1,
      margin: 0,
    },
    tooltip: {
      fillSeriesColor: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#53e69d', '#ff7676', '#88B8E6', '#BEDBE9', '#EDEBEE'],
  };
  const seriesfinance = [45, 53, 80, 90, 95];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <DashCard title="Finance" subtitle="Get the data">
      <div className="my-4 d-flex align-items-center justify-content-center">
        <Chart options={optionfinanace} series={seriesfinance} type="radialBar" height="290" />
      </div>
      <div className="d-flex align-items-center mt-5">
        <div>
          <h3 className="fw-bold">56%</h3>
          <h5 className="text-muted">Increase in Nov</h5>
        </div>
        <div className="ms-auto">
          <Button className="btn btn-success btn-circle btn-lg text-white">
            <i className="bi bi-graph-up"></i>
          </Button>
        </div>
      </div>
    </DashCard>
  );
};

export default Finanace;
