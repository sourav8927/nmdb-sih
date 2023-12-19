import React from 'react'
import { useState } from 'react';
import json from './indiaStatesAndDistricts.json'

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
          <p>Select your state</p>
          <select>
            <option></option>
          </select>
        </div>

        <div className="lc-dist">
          o
        </div>
      </div>
    </div>
  )

}

export default LocateCenter;
