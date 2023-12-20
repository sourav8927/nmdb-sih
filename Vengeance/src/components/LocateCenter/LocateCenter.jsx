import React from 'react'
import { useState } from 'react';
import json from './indiaStatesAndDistricts.json'
import "../LocateCenter/LocateCenter.css";

function LocateCenter() {

  const [selectedState, setSelectedState] = useState("Gujarat");
  const [selectedDistrict, setSelectedDistrict] = useState("select");

  let availableState = [""];

  function changeState(s) {
    setSelectedState(s);
    console.log(selectedState);
    availableState = json.states.find((s) => s.state === selectedState);
    console.log(availableState);
  }
  return (
    <div>
      <center><h1>Locate center</h1></center>
      <div className="lc">
        <div className="lc-state">
          <p className='lc-p'>Select your state</p>
          <select className='opt'>
            <option></option>
          </select>
        </div>

        <div className="lc-state">
          <p className='lc-p'>Select your district</p>
          <select className='opt'>
            <option></option>
          </select>
        </div>
      </div>
      <center> <button>Search</button></center>
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
        <td><button>View</button></td>
      </tr>
      <tr>
        <td>Center 2</td>
        <td>456 Oak Avenue, Townsville</td>
        <td>300</td>
        <td>220</td>
        <td><button>View</button></td>
      </tr>
   
    </tbody>
  </table>


    
    </div>
  )

}

export default LocateCenter;
