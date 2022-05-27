import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar, Chart } from "react-chartjs-2";
import { Chart as ch } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

ch.register(zoomPlugin);

const FullGraph = (props) => {
    const [xrange, setxrange] = useState({min : -1000, max :1000})
    const [yrange, setyrange] = useState({min : -1000, max : 1000})
  const [graphdata, setgraphdata] = useState({
    labels: [],
    datasets: [
      {
        type: "line",
        label: "Flux",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [],
      },
    ],
  });
  const [propertyval, setpropertyval] = useState([]);
  const [isvisibleproperty, setisvisibleproperty] = useState(false);

  useEffect(() => {
    setpropertyval(props.data)
    setisvisibleproperty(true)
    


    var dataarray = [
      {
        x: 1,
        y: 2,
      },
    ];
    if (props.data) {

        setxrange({
            min : Math.min(...props.values.x),
            max : Math.max(...props.values.x)
        })

        setyrange({
            min : Math.min(...props.values.y),
            max : Math.max(...props.values.y)
        })
        

      var n = props.values.x.length;
      var n1 = props.data.length;
      var i = 0,
        j = 0;
      dataarray = [];
      while (i < n && j < n1) {
        if (props.data[j] === props.values.x[i]) {
          dataarray.push({ x: props.values.x[i], y: props.values.y[i] });
          i += 1;
          j += 1;
        } else {
          i += 1;
        }
      }
    }

    console.log("data array");
    console.log(dataarray);



    setgraphdata({
      labels: props.values.x,
      datasets: [
        {
          type: "bubble",
          borderColor: "rgba(120,0,0,1)",
          backgroundColor: "orange",
          fill: false,
          label: props.details.legend,
          data: dataarray,
        },
        {
          type: "line",
          label: "Flux",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(0,120,0,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: props.values.y,
        },
      ],
    });
  }, [props]);

  return (
    <div>
      <Chart
        data={graphdata}
        options={{
          scales: {
            x: { 
                title: {
                     display: true, 
                    text: "TIME" 
                },
                min: xrange.min - 100,
                max : xrange.max + 100
            },
            y: { 
                title: { 
                    display: true, 
                    text: "COUNT / SEC" 
                },
                min : yrange.min - 100,
                max : yrange.max + 100 
            },
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

export default FullGraph;
