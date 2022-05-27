import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Graph from "./components/Graph";
import Details from "./components/Details";
import FileUpload from "./components/FileUpload";

import React, { useState, useEffect } from 'react'




function App() {
  const [values, setvalues] = useState({})
  const [uploaded, setuploaded] = useState(false)

  return (
    <div className="App" >
      <Navbar></Navbar>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div className="container" style={{minHeight:"100vh"}}>
      {uploaded ? 
      <div
        className="container"
        style={{
          height: "80vh",
          width: "80vw",
        }}
      > 
        
          <Graph values = {values}></Graph>
          
      </div>
      :
      <div style={{height : "20vh"}}/>
    }


      <div className="container">
        <div className="container mt-4">
          <h4 className="display-6 text-center mb-4">
            <i className="fab fa-react" /> Upload Your File
          </h4>
          <FileUpload setvalues = {setvalues} setuploaded = {setuploaded}/>
        </div>
      </div>

        {uploaded ? 
      <div className="container">
        <Details values = {values}></Details>
      </div>
      : 
      <div/>
        }
      


      </div>
      <div className="footer">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <p style={{ marginTop: "10px" }} className="copyright text-muted">
              Team ABCD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
