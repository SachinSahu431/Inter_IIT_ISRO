import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin);

const Graph = (props) => {
  const [graphdata, setgraphdata] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Rainfall",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 41, 33, 11, 10, 14, 69, 71],
      },
    ],
  });
  useEffect(() => {
    console.log("This is from the graph");
    console.log(props.values);
    setgraphdata({
      labels: props.values.x,
      datasets: [
        {
          label: "Flux",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: props.values.y,
        },
      ],
    });
  }, [props.values]);

  return (
    <div>
      <Line
        data={graphdata}
        options={{
          scales: {
            x: { title: { display: true, text: "TIME" } },
            y: { title: { display: true, text: "COUNT / SEC" } },
          },
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
          plugins: {
            zoom: {
              zoom: {
                drag: true,
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true,
                },
                mode: "x",
              },
              pan: {
                enabled: true,
                mode: "xy",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Graph;
