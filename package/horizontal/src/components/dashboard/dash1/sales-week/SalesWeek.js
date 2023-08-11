import React from 'react';
import { Card, CardSubtitle } from 'reactstrap';
import Chart from 'react-apexcharts';

const SalesWeek = () => {
  const optionssalesweek = {
    chart: {
      id: 'basic-bar',
      type: 'bar',
      fontFamily: 'Nunito',
      toolbar: {
        show: false,
      },
      sparkline: { enabled: true },
    },
    colors: ['rgba(255,255,255,0.6)'],
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'flat',
        columnWidth: '30%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    fill: {
      opacity: 1,
    },

    tooltip: {
      theme: 'dark',
    },
  };
  const seriessalesweek = [
    {
      name: 'Week Sales',
      data: [5, 4, 3, 5.5, 5, 2, 3],
    },
  ];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <div className="bg-danger rounded-top">
        <div className="m-auto" style={{ height: '320px', width: '230px' }}>
          <Chart options={optionssalesweek} series={seriessalesweek} type="bar" height="320" />
        </div>
      </div>
      <div className="p-4">
        <div className="d-flex align-items-center">
          <div>
            <h3 className="fw-bold">Week Sales</h3>
            <CardSubtitle>Ios app - 160 sales</CardSubtitle>
          </div>
          <div className="ms-auto">
            <div className="bg-info circle-box text-white lg-box" href="">
              <i className="bi bi-cart"></i>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SalesWeek;
