import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const ColumnBars = () => {
  const data = [
    {
      name: 'Non-Veg',
      month: 'Jan.',
      sales: 18.9,
    },
    {
      name: 'Non-Veg',
      month: 'Feb.',
      sales: 28.8,
    },
    {
      name: 'Non-Veg',
      month: 'Mar.',
      sales: 39.3,
    },
    {
      name: 'Non-Veg',
      month: 'Apr.',
      sales: 81.4,
    },
    {
      name: 'Non-Veg',
      month: 'May',
      sales: 47,
    },
    {
      name: 'Non-Veg',
      month: 'Jun.',
      sales: 20.3,
    },
    {
      name: 'Non-Veg',
      month: 'Jul.',
      sales: 24,
    },
    {
      name: 'Non-Veg',
      month: 'Aug.',
      sales: 35.6,
    },
    {
      name: 'Veg',
      month: 'Jan.',
      sales: 12.4,
    },
    {
      name: 'Veg',
      month: 'Feb.',
      sales: 23.2,
    },
    {
      name: 'Veg',
      month: 'Mar.',
      sales: 34.5,
    },
    {
      name: 'Veg',
      month: 'Apr.',
      sales: 99.7,
    },
    {
      name: 'Veg',
      month: 'May',
      sales: 52.6,
    },
    {
      name: 'Veg',
      month: 'Jun.',
      sales: 35.5,
    },
    {
      name: 'Veg',
      month: 'Jul.',
      sales: 37.4,
    },
    {
      name: 'Veg',
      month: 'Aug.',
      sales: 42.4,
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: 'month',
    yField: 'sales',
    seriesField: 'name',
    color:["red","green"],

    /** 设置颜色 */
    //color: ['#1ca9e6', '#f88c24'],

    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
      
    },
  };
  return <Column style={{width:"80%",height:"80%",margin:" 60px 0px 0px 0px"}} {...config} />;
};

export default ColumnBars;