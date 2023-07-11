import React from 'react';
import { Row, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import DashCard from '../../dashboardCards/DashCard';

const SparklineCards = () => {
  const optionsSparklineCards1 = {
    chart: {
      type: 'bar',
      fontFamily: 'Rubik,sans-serif',
      height: 30,
      sparkline: {
        enabled: true,
      },
    },
    fill: {
      colors: ['#2cd07e'],
      opacity: 1,
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
        barHeight: '100%',
      },
    },
    stroke: {
      show: true,
      width: 7,
      colors: ['transparent'],
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
      marker: {
        show: true,
        fillColors: ['#2cd07e'],
      },
      x: {
        show: false,
      },
    },
  };
  const seriesSparklineCards1 = [
    {
      name: '',
      data: [1, 5, 6, 10, 9, 12, 4, 9],
    },
  ];
  // 2
  const optionsSparklineCards2 = {
    chart: {
      type: 'bar',
      fontFamily: 'Rubik,sans-serif',
      height: 30,
      sparkline: {
        enabled: true,
      },
    },
    fill: {
      colors: ['#707cd2'],
      opacity: 1,
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
        barHeight: '100%',
      },
    },
    stroke: {
      show: true,
      width: 7,
      colors: ['transparent'],
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
      marker: {
        show: true,
        fillColors: ['#707cd2'],
      },
      x: {
        show: false,
      },
    },
  };
  const seriesSparklineCards2 = [
    {
      name: '',
      data: [1, 5, 6, 10, 9, 12, 4, 9],
    },
  ];
  // 3
  const optionsSparklineCards3 = {
    chart: {
      type: 'bar',
      fontFamily: 'Rubik,sans-serif',
      height: 30,
      width: 100,
      sparkline: {
        enabled: true,
      },
    },
    fill: {
      colors: ['#2cabe3'],
      opacity: 1,
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
        barHeight: '100%',
      },
    },
    stroke: {
      show: true,
      width: 7,
      colors: ['transparent'],
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
      marker: {
        show: true,
        fillColors: ['#2cd07e'],
      },
      x: {
        show: false,
      },
    },
  };
  const seriesSparklineCards3 = [
    {
      name: '',
      data: [1, 5, 6, 10, 9, 12, 4, 9],
    },
  ];
  // 4
  const optionsSparklineCards4 = {
    chart: {
      type: 'bar',
      fontFamily: 'Rubik,sans-serif',
      height: 30,
      sparkline: {
        enabled: true,
      },
    },
    fill: {
      colors: ['#ff5050'],
      opacity: 1,
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
        barHeight: '100%',
      },
    },
    stroke: {
      show: true,
      width: 7,
      colors: ['transparent'],
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
      marker: {
        show: true,
        fillColors: ['#2cd07e'],
      },
      x: {
        show: false,
      },
    },
  };
  const seriesSparklineCards4 = [
    {
      name: '',
      data: [1, 5, 6, 10, 9, 12, 4, 9],
    },
  ];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <Row>
      <Col lg={3} md={6}>
        <DashCard title="Total Visit">
          <div className="d-flex align-items-center mt-2">
            <div style={{ width: '80px' }}>
              <Chart
                options={optionsSparklineCards1}
                series={seriesSparklineCards1}
                type="bar"
                height="30"
              />
            </div>
            <div className="ms-auto">
              <h3 className="text-success mb-0">
                <i className="bi bi-arrow-up"></i>659
              </h3>
            </div>
          </div>
        </DashCard>
      </Col>
      <Col lg={3} md={6}>
        <DashCard title="Total Page Views">
          <div className="d-flex align-items-center mt-2">
            <div style={{ width: '80px' }}>
              <Chart
                options={optionsSparklineCards2}
                series={seriesSparklineCards2}
                type="bar"
                height="30"
              />
            </div>
            <div className="ms-auto">
              <h3 className="text-primary mb-0">
                <i className="bi bi-arrow-up"></i>358
              </h3>
            </div>
          </div>
        </DashCard>
      </Col>
      <Col lg={3} md={6}>
        <DashCard title="Unique Visitor">
          <div className="d-flex align-items-center mt-2">
            <div style={{ width: '80px' }}>
              <Chart
                options={optionsSparklineCards3}
                series={seriesSparklineCards3}
                type="bar"
                height="30"
              />
            </div>
            <div className="ms-auto">
              <h3 className="text-info mb-0">
                <i className="bi bi-arrow-up"></i>781
              </h3>
            </div>
          </div>
        </DashCard>
      </Col>
      <Col lg={3} md={6}>
        <DashCard title="Bounce Rate">
          <div className="d-flex align-items-center mt-2">
            <div style={{ width: '80px' }}>
              <Chart
                options={optionsSparklineCards4}
                series={seriesSparklineCards4}
                type="bar"
                height="30"
              />
            </div>
            <div className="ms-auto">
              <h3 className="text-danger mb-0">
                <i className="bi bi-arrow-down"></i>659
              </h3>
            </div>
          </div>
        </DashCard>
      </Col>
    </Row>
  );
};

export default SparklineCards;
