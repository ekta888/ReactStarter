import React from 'react';

import { Card, CardBody, Row, Col } from 'reactstrap';

import Chart from 'react-apexcharts';

const WeatherCard = () => {
  const optionsweathercard = {
    chart: {
      height: 205,
      type: 'line',
      fontFamily: 'Rubik,sans-serif',
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: '3',
    },
    markers: {
      size: 4,
      strokeColors: 'rgba(255,255,255,0.5)',
      fillOpacity: 1,
    },
    colors: ['rgba(255,255,255,0.5)'],
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: 'dark',
    },
  };
  const seriesweathercard = [
    {
      name: 'Kufri',
      data: [5, 2, 7, 4, 5, 3, 5, 4],
    },
  ];
  const Wheaterday = [
    {
      day: 'Mon',
      value: '32',
      icon: 'bi bi-cloud',
    },
    {
      day: 'Tue',
      value: '29',
      icon: 'bi bi-cloud-drizzle',
    },
    {
      day: 'Wed',
      value: '30',
      icon: 'bi bi-brightness-high',
    },
    {
      day: 'Thu',
      value: '27',
      icon: 'bi bi-cloud-sun',
    },
    {
      day: 'Fri',
      value: '32',
      icon: 'bi bi-cloud-drizzle',
    },
    {
      day: 'Sat',
      value: '30',
      icon: 'bi bi-cloud',
    },
  ];
  const cdate = new Date().toDateString();
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <CardBody className="bg-primary text-white rounded-top">
        <div className="pb-4">
          <h3>Kufri, Himachal Pradesh</h3>
          <h6 className="opacity-50">{cdate}</h6>
        </div>
        <div className="hstack gap-4 mt-4">
          <span>
            <i className="bi bi-cloud-sun display-5"></i>
          </span>
          <div className="ml-4">
            <h2 className="display-7">
              <span className="font-medium">25°</span>
            </h2>
            <p className="font-14 mb-0 font-light">Mostly Sunny</p>
          </div>
        </div>
        <div className="mt-4">
          <Chart options={optionsweathercard} series={seriesweathercard} type="line" height="205" />
        </div>
      </CardBody>
      <Row className="no-gutters">
        <Col lg={12}>
          <Row className="text-center m-0 no-gutters">
            {Wheaterday.map((item) => (
              <Col xs={6} md={2} key={item.day} className="border-start py-4">
                <h5 className="mb-3 fw-bold">{item.day}</h5>
                <h2 className="weather-type">
                  <i className={item.icon}></i>
                </h2>
                <div className="">
                  {item.value} <sup>°F</sup>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default WeatherCard;
