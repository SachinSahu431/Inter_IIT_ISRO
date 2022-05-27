import React from "react";
import Dataoption from "./Dataoption";

import Option1 from "./Option1";
import Option2 from "./Option2";
import Option3 from "./Option3";

const Details = (props) => {
  return (
    <div>
      <ul
        className="nav nav-tabs"
        id="myTab"
        role="tablist"
        style={{ marginBottom: "4%" }}
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="Details-tab"
            data-bs-toggle="tab"
            data-bs-target="#Details"
            type="button"
            role="tab"
            aria-controls="Details"
            aria-selected="true"
          >
            Details
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="Flares-tab"
            data-bs-toggle="tab"
            data-bs-target="#Flares"
            type="button"
            role="tab"
            aria-controls="Flares"
            aria-selected="false"
          >
            Flares
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="References-tab"
            data-bs-toggle="tab"
            data-bs-target="#Dataoptions"
            type="button"
            role="tab"
            aria-controls="References"
            aria-selected="false"
          >
            Data output
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="References-tab"
            data-bs-toggle="tab"
            data-bs-target="#References"
            type="button"
            role="tab"
            aria-controls="References"
            aria-selected="false"
          >
            References
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="Details"
          role="tabpanel"
          aria-labelledby="Details-tab"
        >
          <Option1 values={props.values} />
        </div>
        <div
          className="tab-pane fade"
          id="Flares"
          role="tabpanel"
          aria-labelledby="Flares-tab"
        >
          <Option2 />
        </div>
        <div
          className="tab-pane fade"
          id="References"
          role="tabpanel"
          aria-labelledby="References-tab"
        >
          <Option3 />
        </div>
        <div
          className="tab-pane fade"
          id="Dataoptions"
          role="tabpanel"
          aria-labelledby="References-tab"
        >
          <Dataoption values={props.values} />
        </div>
      </div>
    </div>
  );
};

export default Details;
