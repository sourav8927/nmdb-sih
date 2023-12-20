import React from 'react';
import { useState } from 'react';
import json from './indiaStatesAndDistricts.json';
import '../LocateCenter/LocateCenter.css';

function LocateCenter() {
  const [selectedState, setSelectedState] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState('select');
  const [availableState, setAvailableState] = useState(null);

  function changeState(s) {
    setSelectedState(s);
    const stateData = json.states.find((state) => state.state === s);
    setAvailableState(stateData);
  }

  function changeDistrict(d) {
    setSelectedDistrict(d);
  }

  return (
    <div>
      <center>
        <h1>Locate center</h1>
      </center>
      <div className="lc">
        <div className="lc-state">
          <p className='lc-p'>Select your state</p>
          <select className='opt' value={selectedState} onChange={(e) => changeState(e.target.value)}>
            {json.states.map((value, key) => (
              <option value={value.state} key={key}>
                {value.state}
              </option>
            ))}
          </select>
        </div>

        <div className="lc-state">
          <p className='lc-p'>Select your district</p>
          <select className='opt' value={selectedDistrict} onChange={(e) => changeDistrict(e.target.value)}>
            {availableState?.districts.map((value, key) => (
              <option value={value} key={key}>
                {value}
              </option>
            ))}
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
  );
}

export default LocateCenter;