import React from 'react';
import { Input } from 'reactstrap';
import Chart from 'react-apexcharts';
import DashCard from '../../dashboardCards/DashCard';

const TopSales = () => {
  const optionstopsales = {
    chart: {
      height: 390,
      fontFamily: '"Rubik",sans-serif',
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#2962ff'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    markers: {
      size: 3,
      colors: '#2962ff',
      strokeColors: 'transparent',
      strokeWidth: 0,
    },
    grid: {
      show: true,
      borderColor: 'rgba(0,0,0,0.1)',
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
          width: 1,
          opacity: 0.2,
        },
      },
    },
    xaxis: {
      categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
      labels: {
        show: true,
        style: {
          colors: [
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
          ],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
            '#a1aab2',
          ],
        },
      },
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false,
      },
    },
  };
  const seriestopsales = [
    {
      name: 'Top selling',
      data: [2666, 2778, 4912, 3767, 6810, 5670, 4820, 15073, 10687, 8432],
    },
  ];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <DashCard
      title="Top Selling"
      actions={
        <Input type="select">
          <option>January 2022</option>
          <option>February 2022</option>
          <option>March 2022</option>
        </Input>
      }
    >
      <div>
        <Chart options={optionstopsales} series={seriestopsales} type="line" height="370" />
      </div>
    </DashCard>
  );
};

export default TopSales;
