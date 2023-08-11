import React from 'react';
import Chart from 'react-apexcharts';
import DashCard from '../../dashboardCards/DashCard';

const WeeklyUsage = () => {
  const optionsweeklyusage = {
    chart: {
      type: 'bar',
      fontFamily: 'Rubik,sans-serif',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    fill: {
      colors: ['#2cabe3'],
      opacity: 1,
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 7,
      colors: ['transparent'],
    },
    xaxis: {
      type: 'category',
      categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      labels: {
        show: true,
        style: {
          colors: ['#a1aab2', '#a1aab2', '#a1aab2', '#a1aab2', '#a1aab2', '#a1aab2', '#a1aab2'],
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
      marker: {
        show: true,
        fillColors: ['#2cabe3'],
      },
      x: {
        show: false,
      },
    },
  };
  const seriesweeklyusage = [
    {
      name: 'Usage',
      data: [50, 40, 30, 70, 50, 20, 30],
    },
  ];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                            */
    /*--------------------------------------------------------------------------------*/
    <DashCard
      title="Weekly Useage"
      subtitle="Check the data weekly"
      actions={<h3 className="font-medium">$58.80</h3>}
    >
      <div>
        <Chart options={optionsweeklyusage} series={seriesweeklyusage} type="bar" height="315" />
      </div>
    </DashCard>
  );
};

export default WeeklyUsage;
