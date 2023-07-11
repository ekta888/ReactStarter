import React from 'react';

import { Card, Row, Col, Button } from 'reactstrap';

import Chart from 'react-apexcharts';

const Expance = () => {
  const optionsexpance = {
    chart: {
      type: 'line',
      height: 130,
      fontFamily: 'Rubik,sans-serif',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      stacked: false,
    },
    tooltip: {
      fillSeriesColor: false,
      theme: 'dark',
    },
    dataLabels: {
      enabled: false,
    },
    legends: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '35%',
      },
    },
    colors: ['rgba(255,255,255)', 'rgba(255,255,255,0.5)'],
    fill: {
      type: 'solid',
      colors: ['rgba(255,255,255)', 'rgba(255,255,255,0.5)'],
      opacity: 1,
    },
    stroke: {
      width: 0,
    },
    grid: {
      show: false,
    },
  };
  const seriesexpance = [
    {
      name: 'Site A',
      type: 'column',
      data: [5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8],
    },
    {
      name: 'Site B',
      type: 'column',
      data: [1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3, 3, 12, 5, 6, 3],
    },
  ];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <div className="bg-danger p-3">
        <h4 className="card-title  mb-0 text-white">Expance</h4>
        <Chart options={optionsexpance} series={seriesexpance} type="area" height="180" />
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
