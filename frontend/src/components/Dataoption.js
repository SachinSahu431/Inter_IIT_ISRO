import React, { useState, useEffect } from "react";
import "./Option2.css";

const Dataoption = (props) => {
  const [peakarray, setpeakarray] = useState([]);

  useEffect(() => {
    var dataarray = [];
    if (props.values.x) {
      var n = props.values.x.length;
      var n1 = props.values.time_of_occurances.length;
      var i = 0,
        j = 0;
      dataarray = [];
      while (i < n && j < n1) {
        if (props.values.time_of_occurances[j] === props.values.x[i]) {
          dataarray.push({ x: props.values.x[i], y: props.values.y[i] });
          i += 1;
          j += 1;
        } else {
          i += 1;
        }
      }

      setpeakarray(dataarray);
    }
  }, [props]);

  return (
    <div>
      <table className="table table-striped">
          <thead className = "thead-dark">
                <tr>
                <th >Sl No.</th><th> Peak Flare occurrence time</th> <th>Count/s</th> <th>Starting Time</th> <th>Ending time</th> <th>Rise Time</th> <th> Decay Time</th> <th> Total Time</th>
                </tr>
        </thead>

        {props.values.time_of_occurances ? (
          peakarray.map((ele, idx) => (
            <>
              <tr>
                <td>{idx + 1}</td>
                <td>{ele.x}</td>
                <td>{ele.y}</td>
                <td>{props.values.left[idx]}</td>
                <td>{props.values.right[idx]}</td>
                <td>{props.values.rise_time[idx]}</td>
                <td>{props.values.decay_time[idx]}</td>
                <td>{props.values.rise_time[idx] + props.values.decay_time[idx]}</td>
              </tr>{" "}
            </>
          ))
        ) : (
          <li>Nothing to display</li>
        )}
      </table>
      <button
        onClick={() => {
          var html = document.querySelector("table").outerHTML;
          export_table_to_csv(html, "table.csv");
        }}
      >
        Download as CSV file
      </button>
    </div>
  );
  function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], { type: "text/csv" });

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
  }

  function export_table_to_csv(html, filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
      var row = [],
        cols = rows[i].querySelectorAll("td, th");

      for (var j = 0; j < cols.length; j++) row.push(cols[j].innerText);

      csv.push(row.join(","));
    }

    // Download CSV
    download_csv(csv.join("\n"), filename);
  }
};

export default Dataoption;
