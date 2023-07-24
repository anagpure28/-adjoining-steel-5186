import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const PieChart = () => {
  const data = [
    {
      type: 'India',
      value: 27,
    },
    {
      type: 'China',
      value: 25,
    },
    {
      type: 'USA',
      value: 18,
    },
    {
      type: 'UAE',
      value: 15,
    },
    {
      type: 'Germany',
      value: 10,
    },
    {
      type: 'Canada',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    color:["orange","#ff7e75","yellowgreen","#c175ff","#75ffd3","#75d1ff"],
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config}  />;
};

export default PieChart;