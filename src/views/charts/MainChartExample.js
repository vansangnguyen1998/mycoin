import React, { useState, useEffect } from "react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import api from "src/services/api";

const brandSuccess = getStyle("success") || "#4dbd74";
const brandInfo = getStyle("info") || "#20a8d8";
const brandDanger = getStyle("danger") || "#f86c6b";
const MainChartExample = ({dataAddress, ...attributes}) => {

  const defaultDatasets = (() => {
    let data1 = [];

    data1 = dataAddress.amountArr;

    return [
      {
        label: "My First dataset",
        backgroundColor: hexToRgba(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: data1,
      },
      // {
      //   label: 'My Second dataset',
      //   backgroundColor: 'transparent',
      //   borderColor: brandSuccess,
      //   pointHoverBackgroundColor: brandSuccess,
      //   borderWidth: 2,
      //   data: data2
      // },
      // {
      //   label: 'My Third dataset',
      //   backgroundColor: 'transparent',
      //   borderColor: brandDanger,
      //   pointHoverBackgroundColor: brandDanger,
      //   borderWidth: 1,
      //   borderDash: [8, 5],
      //   data: data3
      // }
    ];
  })();

  const defaultOptions = (() => {
    return {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: dataAddress.amountArr[dataAddress.amountArr.length - 1],
            },
            gridLines: {
              display: true,
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    };
  })();

  // render
  return (
    <CChartLine
      {...attributes}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={dataAddress?.addressTransactions.map((d) => d.date)}
    />
  );
};

export default MainChartExample;
