import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RingProgress } from '@ant-design/plots';

const RingChart = ({percent}) => {


  const config = {
    height: 100,
    width: 100,
    autoFit: true,
    percent: percent,
    color: ['green', 'rgb(40, 40, 40)'],
    
    
  };
  return <RingProgress  {...config} />;
};

export default RingChart;