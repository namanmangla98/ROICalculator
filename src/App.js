import React from "react";
import Toggle from "./Toggle";
import "./App.css";

class App extends React.Component {
  render() {    
    return (
      <div className="calculator">
        <div>
          <h3>ROI Calculator<span type="button" style={{ marginLeft: "350px", fontSize: "30px", color: "#ccc" }} >&times;</span></h3>
          <div>
            <div style={{ display: "flex", float: "right" }}>
              <div>
                <p style={{fontSize: "14px", marginRight:"20px", color:"#ccc"}}>CAKE</p>
              </div>
              <div>
                <Toggle label=" " />
              </div>
              <div>
                <p style={{ marginTop: "12px", marginLeft: "5px", color:"#ccc" }}>USD</p>
              </div>
            </div>
          </div>
          <input
            className="input"
            type="text"
            value="0.000 USD"
            readOnly
          ></input>
        </div>
        <div>
          <p>
            <span
              style={{
                border: "1px solid #ccc",
                paddingLeft: "10px",
                paddingRight: "10px",
                backgroundColor: "#ccc",
                borderRadius: "10px",
                marginRight: "50px",
              }}
            >
              $1000
            </span>
            <span
              style={{
                border: "1px solid #ccc",
                paddingLeft: "10px",
                paddingRight: "10px",
                backgroundColor: "#ccc",
                borderRadius: "10px",
              }}
            >
              $100
            </span>
            <span style={{ float: "right", fontSize: "12px", color: "#ccc" }}>
              ~CAKE 0.000
            </span>
          </p>
          <p>
            <strong>Timeframe</strong>
          </p>
        </div>
        <div className="day">
          <button
            style={{ backgroundColor: "#ebca12", border: "1px solid #ebca12" }}
          >
            1 Day
          </button>
          <button>7 Days</button>
          <button>30 Days</button>
          <button>1 Year</button>
          <button>5 year</button>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <p>
              <strong>Enable Accelerated APY</strong>
            </p>
          </div>
          <div style={{ marginLeft: "250px" }}>
            <Toggle label="  " />
          </div>
        </div>
        <div className="tier">
          <p style={{ fontSize: "14px", fontWeight: "bold", color: "#ccc" }}>
            Select Tier
          </p>
          <button
            style={{ backgroundColor: "#ebca12", border: "1px solid #ebca12" }}
          >
            Tier 1
          </button>
          <button>Tier 2</button>
          <button>Tier 3</button>
          <button>Tier 4</button>
          <button>Tier 5</button>
        </div>
        <div
          style={{
            textAlign: "right",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#ccc",
          }}
        >
          <p>ROI at Current Rates</p>
        </div>
        <div>
          <input className="input" type="text" value="0.00 USD" readOnly />
        </div>
        <div>
          <p style={{ fontSize: "14px", color: "#ccc", textAlign: "right" }}>
            ~0.000 CAKE + 0.000000 DON
          </p>
        </div>
        <div>
          <p style={{textAlign: "center"}}><strong>Hide Details&nbsp;&nbsp;&and;</strong></p>
          <p><strong>APY</strong><span style={{color: "yellow", fontSize:"20px", float:"right", fontWeight:"bold"}}>9.0%</span></p>
          <ul>
            <li style={{color:"#ccc"}}><b>Calculated based on current rates</b></li>
            <li style={{color:"#ccc"}}><b>All figures are estimates provided for your convience only, and by no means represent guaranted returns.</b></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
