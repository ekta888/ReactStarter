import React from 'react';
import { Input } from 'reactstrap';
import Chart from 'react-apexcharts';
import DashCard from '../../dashboardCards/DashCard';

const TopEarning = () => {
  const optionstopearning = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    colors: ['#2962FF', '#ff7676'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      width: 3,
    },
    grid: {
      borderColor: '#e7e7e7',
      yaxis: {
        lines: {
          offsetX: -30,
        },
      },
      padding: {
        left: 20,
      },
    },
    markers: {
      size: 2,
      colors: 'transparent',
      strokeColors: ['#2962FF', '#ff7676'],
      strokeWidth: 2,
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: '#a1aab2',
        },
      },
    },
    yaxis: {
      tickAmount: 4,
      floating: false,

      labels: {
        style: {
          colors: '#a1aab2',
        },
        offsetY: -7,
        offsetX: 0,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      floating: true,
      labels: {
        colors: '#a1aab2',
      },
    },
    tooltip: {
      theme: 'dark',
    },
  };
  const seriestopearning = [
    {
      name: 'Max temp',
      data: [5, 15, 11, 15, 12, 13, 10],
    },
    {
      name: 'Min temp',
      data: [1, -2, 2, 5, 3, 2, 0],
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
        <Chart options={optionstopearning} series={seriestopearning} type="line" height="370" />
      </div>
    </DashCard>
  );
};

export default TopEarning;
