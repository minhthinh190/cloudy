import React from 'react';
import LocationList from './LocationList.js';

function Navbar(props) {
   return (
      <div className="navbar">
            <div className="option-container">
               <a className="dropdown" href="#!">
                  Tỉnh / Thành phố
                  <LocationList onLocationChange={props.onOptionChange}/>
               </a>
            </div>
      </div>
   );
}

export default Navbar;