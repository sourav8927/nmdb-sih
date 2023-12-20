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
  )

}

export default LocateCenter;
