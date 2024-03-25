import React from 'react';
import { useState } from 'react';
import json from './indiaStatesAndDistricts.json'
import "../LocateCenter/LocateCenter.css";
import {Link} from "react-router-dom";

function LocateCenter() {

  const [selectedState, setSelectedState] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState("select");

  let availableState = [""];

  function changeState(s) {
    setSelectedState(s);
    const stateData = json.states.find((state) => state.state === s);
    setAvailableState(stateData);
  }
  return (
    <div className='LClc'>
      <center>
        <h1>Locate center</h1>
      </center>
      <div className="lc">
        <div className="lc-state">
          <p className='lc-p'>Select your state</p>
          <select className='opt' value={selectedState} onChange={(e) => changeState(e.target.value)}>
            {
              json.states.map((value, key) => {
                return (
                  <option value={value.state} key={key}>
                    {value.state}
                  </option>
                )
              })
            }
          </select>
        </div>

        <div className="lc-state">
          <p className='lc-p'>Select your district</p>
          <select className='opt' value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
            {/* {
              availableState.districts.map((value,key) => {
                return (
                  <option value={value.districts} key={key}>
                      {value.districts}
                  </option>
                )
              })
            } */}
          </select>
        </div>
      </div>
      <center> <button className="lct-btn">Search</button></center>
        <table>
    <thead>
      <tr>
        <th>Center Name</th>
        <th>Address</th>
        <th>Beneficiary Number</th>
        <th>Recovered</th>
        <th>View Deatils</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Center 1</td>
        <td>123 Main Street, Cityville</td>
        <td>100</td>
        <td>29</td>
        <td><Link to="/Ngoinformation"><button className="lct-btn">View</button></Link></td>
      </tr>
      <tr>
        <td>Center 2</td>
        <td>456 Oak Avenue, Townsville</td>
        <td>300</td>
        <td>220</td>
        <td><Link to="/Ngoinformation"><button className="lct-btn">View</button></Link></td>
      </tr>
   
    </tbody>
  </table>

      <div className="center-details">
        <div className="center1">
          <p className='lc-cm'>Center Name: </p>
          <p className='lc-cm'>Address: </p>
        </div>
      </div>

      <div className="center-details">
        <div className="center1">
          <p className='lc-cm'>Center Name: </p>
          <p className='lc-cm'>Address: </p>
        </div>
      </div>

    </div>
  );
}

export default LocateCenter;