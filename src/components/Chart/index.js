/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useIsMobile } from '@/src/utils/helper';
import { dashboardData } from '@/src/utils/constants';

const CustomPieChart = ({
  color,
  type,
  width,
  dataChart,
  radius,
  labels,
  xDisplay,
  height,
  xGridDisplay,
  yGridDisplay,
  maintainAspectRatio,
  yDisplay,
}) => {
  const chartRef = useRef(null);
  const { isMobile } = useIsMobile();
  const dataStore = dashboardData;

  useEffect(() => {
    if (Object.keys(dataStore).length !== 0) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy the existing chart if it exists
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const data = {
        labels: labels,
        datasets: [
          {
            data: dataChart, // Replace with your data values
            backgroundColor: color, // Customize the colors as needed
            borderWidth: 1,
            borderRadius: radius,
            borderSkipped: false,
          },
        ],
      };

      // Set the desired width for the chart's parent container using CSS
      chartRef.current.parentElement.style.width = width; // Replace with your desired width
      chartRef.current.parentElement.style.height = height;

      const newChart = new Chart(ctx, {
        type: type,
        data: data,
        options: {
          responsive: true,
          // responsive: true, // Make the chart responsive to the parent container
          maintainAspectRatio: maintainAspectRatio, // Disable aspect ratio maintenance
          plugins: {
            legend: {
              display: false,
              position: 'top',
            },
            title: {
              display: false,
              text: '',
            },
          },
          scales: {
            x: {
              display: xDisplay,
              grid: {
                display: xGridDisplay,
              },
            },
            y: {
              display: yDisplay,
              grid: {
                display: yGridDisplay,
              },
            },
          },
        },
      });

      // Store the new chart instance in the ref
      chartRef.current.chart = newChart;
    }
  }, [dataStore, isMobile]);

  return <canvas ref={chartRef} />;
};

export default CustomPieChart;
