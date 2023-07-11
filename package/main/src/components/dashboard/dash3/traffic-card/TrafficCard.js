import React from 'react';
import { Card, CardBody } from 'reactstrap';
import Chart from 'react-apexcharts';

const TrafficCard = () => {
  const optionstrafficcard1 = {
    chart: {
      fontFamily: 'Rubik,sans-serif',
      height: 50,
      type: 'area',
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      borderColor: 'transparent',
    },
    stroke: {
      curve: 'straight',
      width: 0,
    },
    colors: ['#ff5050'],
    fill: {
      type: 'solid',
      colors: ['#ff5050'],
      opacity: 1,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
    },
  };
  const seriestrafficcard1 = [
    {
      name: '',
      data: [0, 7, 2, 5, 3, 5, 8, 0],
    },
  ];
  // 2
  const optionstrafficcard2 = {
    chart: {
      fontFamily: 'Rubik,sans-serif',
      height: 50,
      type: 'area',
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      borderColor: 'transparent',
    },
    stroke: {
      curve: 'straight',
      width: 0,
    },
    colors: ['#2cabe3'],
    fill: {
      type: 'solid',
      colors: ['#2cabe3'],
      opacity: 1,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
    },
  };
  const seriestrafficcard2 = [
    {
      name: '',
      data: [0, 7, 2, 5, 3, 5, 8, 0],
    },
  ];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Wizard Page                                                            */
    /*--------------------------------------------------------------------------------*/
    <div>
      <Card>
        <CardBody>
          <div className="d-flex align-items-center mb-3">
            <h4 className="mb-0 fw-bold">Mothly Site Traffic</h4>
            <div className="ms-auto">
              <small className="text-success">
                <i className="fas fa-sort-up"></i> 18% High
              </small>
            </div>
          </div>
          <div className="d-flex pt-2">
            <div className="px-3 ps-0 border-end">
              <h6 className="fw-bold">Yearly</h6>
              <span className="font-bold">80.40%</span>
            </div>
            <div className="px-3 border-end">
              <h6 className="fw-bold">Montly</h6>
              <span className="font-bold">20.40%</span>
            </div>
            <div className="px-3">
              <h6 className="fw-bold">Day</h6>
              <span className="font-bold">5.40%</span>
            </div>
          </div>
        </CardBody>
        <div className="mt-3">
          <Chart
            options={optionstrafficcard1}
            series={seriestrafficcard1}
            type="area"
            height="50"
          />
        </div>
      </Card>

      <Card>
        <CardBody>
          <div className="d-flex align-items-center mb-3">
            <h4 className="mb-0 fw-bold">Weekly Site Traffic</h4>
            <div className="ms-auto">
              <small className="text-danger">
                <i className="fas fa-sort-down"></i> 18% Low
              </small>
            </div>
          </div>
          <div className="d-flex pt-2">
            <div className="px-3 ps-0 border-end">
              <h6 className="fw-bold">Yearly</h6>
              <span className="font-bold">80.40%</span>
            </div>
            <div className="px-3 border-end">
              <h6 className="fw-bold">Montly</h6>
              <span className="font-bold">20.40%</span>
            </div>
            <div className="px-3">
              <h6 className="fw-bold">Day</h6>
              <span className="font-bold">5.40%</span>
            </div>
          </div>
        </CardBody>
        <div className="mt-3">
          <Chart
            options={optionstrafficcard2}
            series={seriestrafficcard2}
            type="area"
            height="50"
          />
        </div>
      </Card>
    </div>
  );
};

export default TrafficCard;
