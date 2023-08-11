import React from 'react';

import { Card, Row, Col, Button } from 'reactstrap';

import Chart from 'react-apexcharts';

const Expance = () => {
  const optionssalesexpance = {
    chart: {
      id: 'basic-bar',
      fontFamily: 'Nunito,sans-serif',
      type: 'area',
      height: 265,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      stacked: false,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    colors: ['#2cabe3', '#ff5050'],
    legend: {
      show: false,
    },
    markers: {
      size: 4,
      strokeColors: 'transparent',
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      labels: {
        show: false,
        style: {
          colors: '#99abb4',
          fontSize: '12px',
          fontFamily: "'Nunito', sans-serif",
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
        style: {
          colors: '#99abb4',
          fontSize: '12px',
          fontFamily: "'Nunito', sans-serif",
        },
      },
    },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    tooltip: {
      theme: 'dark',
    },
  };
  const seriessalesexpance = [
    {
      name: 'Site A',
      data: [2, 5, 2, 6, 2, 5, 2, 4],
    },
    {
      name: 'Site B',
      data: [5, 2, 7, 4, 5, 3, 5, 4],
    },
  ];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <div className="">
        <h4 className="fw-bold  mb-0 p-3">Expance</h4>
        <Chart options={optionssalesexpance} series={seriessalesexpance} type="area" height="180" />
      </div>
      <div className="d-flex align-items-center p-4 border-bottom">
        <div>
          <h3 className="fw-bold">$458.90</h3>
          <h6 className="text-muted mb-0">Expence for December 1 to 10</h6>
        </div>
        <div className="ms-auto">
          <Button color="info" size="lg" className="btn btn-circle btn-lg">
            <i className="bi bi-plus"></i>
          </Button>
        </div>
      </div>
      <Row className="m-0">
        <Col lg={6} className="border-end border-bottom">
          <div className="hstack gap-4 py-3 px-2">
            <h3 className="mb-0 text-info display-6">
              <i className="bi bi-headphones"></i>
            </h3>
            <div className="ml-4">
              <h3 className="fw-bold">$250</h3>
              <h6>Entertainment</h6>
            </div>
          </div>
        </Col>
        <Col lg={6} className="border-bottom">
          <div className="hstack gap-4 py-3 px-2">
            <h3 className="mb-0 text-info display-6">
              <i className="bi bi-house"></i>
            </h3>
            <div className="ml-4">
              <h3 className="fw-bold">$60.50</h3>
              <h6>House Rent</h6>
            </div>
          </div>
        </Col>
        <Col lg={6} className="border-end ">
          <div className="hstack gap-4 py-3 px-2">
            <h3 className="mb-0 text-info display-6">
              <i className="bi bi-send"></i>
            </h3>
            <div className="ml-4">
              <h3 className="fw-bold">$28</h3>
              <h6>Travel</h6>
            </div>
          </div>
        </Col>
        <Col lg={6} className="">
          <div className="hstack gap-4 py-3 px-2">
            <h3 className="mb-0 text-info display-6">
              <i className="bi bi-cart"></i>
            </h3>
            <div className="ml-4">
              <h3 className="fw-bold">$70</h3>
              <h6>Shopping</h6>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Expance;
