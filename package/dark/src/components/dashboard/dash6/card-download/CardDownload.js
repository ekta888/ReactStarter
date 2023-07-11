import React from 'react';
import { Card, CardBody, CardSubtitle } from 'reactstrap';

import Chart from 'react-apexcharts';

const CardDownload = () => {
  const optionsdownload = {
    chart: {
      fontFamily: 'Nunito,sans-serif',
      height: 125,
      type: 'bar',
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '70%',
        barHeight: '70%',
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
      width: 1,
    },
    colors: ['rgba(255, 255, 255, 0.6)'],
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
  const seriesdownload = [
    {
      name: '',
      data: [4, 5, 2, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9, 12, 4, 9],
    },
  ];
  /*--------------------------------------------------------------------------------*/
  /* Used In Dashboard-1,2,3                                                        */
  /*--------------------------------------------------------------------------------*/
  return (
    <Card className="bg-danger">
      <CardBody>
        <div className="d-flex">
          <div className="me-3 align-self-center">
            <h1 className="text-white">
              <i className="bi bi-download" />
            </h1>
          </div>
          <div>
            <h5 className="text-white">Download count</h5>
            <CardSubtitle className="text-white opacity-50">March 2022</CardSubtitle>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="me-auto">
            <h2 className="text-white">35487</h2>
          </div>
          <div>
            <Chart
              options={optionsdownload}
              series={seriesdownload}
              type="bar"
              height="100px"
              width="250px"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardDownload;
