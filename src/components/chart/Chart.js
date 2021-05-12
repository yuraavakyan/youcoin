import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./chart.scss";

const Chart = (props) => {
  const [state, setState] = useState({});

  fetch(
    `https://api.coinstats.app/public/v1/charts?period=1m&coinId=${props.id}`
  ).then((data) => {
    data.json().then((data) => setState(data));
  });

  const data = {
    chart: {
      backgroundColor: null,
      width: 800,
      align: "center",
      animation: false,
    },

    title: {
      text: props.id,
    },

    plotOptions: {
      series: {
        animation: false,
        color: "#ffa938",
      },
    },

    yAxis: {
      gridLineWidth: 0,
      visible: false,
    },

    xAxis: {
      gridLineWidth: 0,
      visible: false,
    },

    series: [
      {
        name: "chart",
        data: state.chart,
      },
    ],
  };

  return (
    <div className="chart">
      <HighchartsReact highcharts={Highcharts} options={data} />
    </div>
  );
};

export default Chart;
