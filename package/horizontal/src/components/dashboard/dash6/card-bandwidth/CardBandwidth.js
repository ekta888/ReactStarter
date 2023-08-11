import React from 'react';
import { Card, CardBody, CardSubtitle } from 'reactstrap';

import Chart from 'react-apexcharts';

const CardBandwidth = () => {
  const optionsbandwidth = {
    chart: {
      fontFamily: 'Rubik,sans-serif',
      height: 120,
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    stroke: {
      curve: 'smooth',
      width: 4,
    },
    colors: ['#fff'],
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    xaxis: {},
    tooltip: {
      theme: 'dark',
    },
  };
  const seriesbandwidth = [
    {
      name: '',
      data: [5, 0, 12, 1, 8, 3, 12, 15],
    },
  ];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1,2,3                                                        */
    /*--------------------------------------------------------------------------------*/
    <Card className="bg-primary">
      <CardBody>
        <div className="d-flex">
          <div className="me-3 align-self-center">
            <h1 className="text-white">
              <i className="bi bi-pie-chart" />
            </h1>
          </div>
          <div>
            <h5 className="text-white">Bandwidth usage</h5>
            <CardSubtitle className="text-white opacity-50">March 2022</CardSubtitle>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <h2 className="text-white">50 GB</h2>
          <div className="ms-auto">
            <Chart
              options={optionsbandwidth}
              series={seriesbandwidth}
              type="line"
              height="100px"
              width="250px"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardBandwidth;
