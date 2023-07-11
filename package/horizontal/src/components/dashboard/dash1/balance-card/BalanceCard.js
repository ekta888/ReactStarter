import React from 'react';
import { Card, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import Chart from 'react-apexcharts';

const BalanceCard = () => {
  const optionsBalanceCard = {
    chart: {
      fontFamily: 'Rubik,sans-serif',
      height: 85,
      type: 'area',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
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
      width: '2',
    },
    colors: ['#79e580', '#2cabe3'],
    legend: {
      show: false,
    },
    fill: {
      type: 'solid',
      colors: ['#79e580', '#2cabe3'],
      opacity: 0.1,
    },
    grid: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
    },
  };
  const seriesBalanceCard = [
    {
      name: 'Site A',
      data: [50, 160, 110, 60, 130, 200, 100],
    },
    {
      name: 'Site B',
      data: [0, 100, 60, 200, 150, 90, 150],
    },
  ];
  const cardData = [
    {
      title: 'Withdraw Money',
      id: 1,
      icon: 'bi bi-wallet',
    },
    {
      title: 'Shop Now',
      id: 2,
      icon: 'bi bi-cart',
    },
    {
      title: 'Add funds',
      id: 3,
      icon: 'bi bi-bag',
    },
    {
      title: 'Statement',
      id: 4,
      icon: 'bi bi-clipboard',
    },
    {
      title: 'Purchase',
      id: 5,
      icon: 'bi bi-basket',
    },
    {
      title: 'Receipts',
      id: 6,
      icon: 'bi bi-pen',
    },
  ];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <CardBody>
        <div className="d-flex align-items-center">
          <div className="circle-box bg-success text-white lg-box">
            <i className="bi bi-plus"></i>
          </div>
          <div className="ms-3">
            <h2 className="mb-0">$456</h2>
            <h5 className="font-light">Your wallet Balance</h5>
          </div>
        </div>
      </CardBody>
      <div className="mt-5">
        <Chart options={optionsBalanceCard} series={seriesBalanceCard} type="area" height="75" />
      </div>
      <CardBody>
        <ListGroup>
          {cardData.map((cdata) => (
            <ListGroupItem tag="button" action key={cdata.id} className="p-3">
              <span className="me-3">
                <i className={cdata.icon} />
              </span>
              {cdata.title}
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default BalanceCard;
