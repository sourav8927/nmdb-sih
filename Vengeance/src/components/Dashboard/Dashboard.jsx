import React from "react";
// import Dashboard from 'Dashboard'
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <h1>STATS</h1>
      <div className="dashboard">
        <div className="d-map"> map </div>
        <div className="d-container">
          <div className="d1 dd">
            <h2>6477</h2>
          </div>
          <div className="d2 dd">
            <h2>689</h2>
          </div>
          <div className="d3 dd">
            <h2>6477</h2>
          </div>
          <div className="d4 dd">
            <h2>689</h2>
          </div>
        </div>
      </div>
    </>
  );
}
