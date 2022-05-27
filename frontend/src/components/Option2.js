// import imgg from "../static/table.jpg";
import "./Option2.css";

const stylee = { fontStyle: "normal", fontWeight: "400" };

const Option2 = (props) => {
  
  return (
    <div className="container">
      {/* <div className="col-xs-12 col-md-6"> */}
      <div className="about-text">
        <h3>What is a Solar Flare?</h3>
        <p>
          A solar flare is a sudden explosion of energy caused by tangling,
          crossing or reorganizing of magnetic field lines near sunspots. Flares
          produce a burst of radiation across the electromagnetic spectrum, from
          radio waves to x-rays and gamma-rays.
        </p>
        <h3>Classification of Solar Flares:</h3>
        <h6>
          Classification of solar flares according to their strength in the
          wavelength range 1 to 8 Å is done as:
        </h6>
        <table className="table">
          <thead>
            <tr>
              <th>&nbsp;Class&nbsp;</th>
              <th>
                Peak Flux Range (W/m<sup>2</sup>)
              </th>
              <th>Effects on Earth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>
                &lt; 10<sup>-7</sup>
              </td>
              <td>Too small to harm Earth</td>
            </tr>
            <tr>
              <td>B</td>
              <td>
                <span style={stylee}>
                  10<sup>-7</sup> -&nbsp;
                </span>
                10<sup>-6</sup>
                <span style={stylee}>
                  <br />
                </span>
              </td>
              <td>Too small to harm Earth</td>
            </tr>
            <tr>
              <td>C</td>
              <td>
                10<sup>-6</sup> -&nbsp;
                <span style={stylee}>
                  10<sup>-5</sup>
                </span>
              </td>
              <td>Too weak to noticeably affect Earth</td>
            </tr>
            <tr>
              <td>M</td>
              <td>
                <span style={stylee}>
                  10<sup>-5</sup> -&nbsp;
                </span>
                <span style={stylee}>
                  10<sup>-4</sup>
                </span>
              </td>
              <td>
                Can cause brief radio blackouts at the poles and minor radiation
                storms
              </td>
            </tr>
            <tr>
              <td>X</td>
              <td>
                &gt;10<sup>-4</sup>
              </td>
              <td>
                Can cause long lasting radiation storms, global transmission
                problems, worldwide radio blackouts and may even harm satellites
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          Each category has nine subdivisions ranging from 1-9, which in turn is
          also the factor for that event within the class. <br />
          Subdivisions in X class can go higher as it's the last class and can
          be used for classifying any flare of strength greater than 10
          <sup>-4</sup> Å
          <br />
          For example: an X9 flare is of thrice the strength compared to an X3
          flare.
        </p>
      </div>
    </div>
    // </div>
  );
};

export default Option2;
