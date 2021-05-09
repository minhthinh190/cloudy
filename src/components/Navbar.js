import React from 'react';
import LocationList from './LocationList.js';
import TravelLocationList from './TravelLocationList.js';

function Navbar(props) {
   return (
      <div className="navbar">
            <div className="option-container">
               <a className="dropdown" href="#!">
                  Tỉnh / Thành phố
                  <LocationList onLocationChange={props.onOptionChange}/>
               </a>
               <a className="dropdown" href="#!">
                  Địa điểm du lịch
                  <TravelLocationList onLocationChange={props.onOptionChange}/>
               </a>
            </div>
            <div className="appname">
               <p class="letter letter-c">C</p>
               <p class="letter letter-l">l</p>
               <p class="letter letter-o">o</p>
               <p class="letter letter-u">u</p>
               <p class="letter letter-d">d</p>
               <p class="letter letter-y">y</p>
            </div>
      </div>
   );
}

export default Navbar;