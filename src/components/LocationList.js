import React from 'react';
import { AREA } from '../services/location';

function LocationList(props) {
   const handleLocationSelect = (e) => {
      props.onLocationChange(e.target.value);
   };

   return (
      <div className="dropdown-content">
            <div className="dropdown-area-container">
               <h2 className="area-name">{AREA[0].name}</h2>
               {
                  AREA[0].sub_area.map((subArea) => {
                        let locationList = subArea.location.map((location) => {
                           return (
                              <button 
                                 className="dropdown-option" 
                                 key={location.title} 
                                 value={location.title} 
                                 onClick={handleLocationSelect}
                              >
                                 {location.title}
                              </button>
                           );
                        });
                        locationList.unshift(
                           <h3 className="subarea-name" key={subArea.name}>{subArea.name}</h3>
                        );
                        
                        return <div className="dropdown-subarea-container" key={subArea.name}>{locationList}</div>;
                  })
               }
            </div>
            <div className="dropdown-area-container">
               <h2 className="area-name">{AREA[1].name}</h2>
               {
                  AREA[1].sub_area.map((subArea) => {
                        let locationList = subArea.location.map((location) => {
                           return (
                              <button 
                                 className="dropdown-option" 
                                 key={location.title} 
                                 value={location.title} 
                                 onClick={handleLocationSelect}
                              >
                                 {location.title}
                              </button>
                           );
                        });
                        locationList.unshift(
                           <h3 className="subarea-name" key={subArea.name}>{subArea.name}</h3>
                        );
                        
                        return <div className="dropdown-subarea-container" key={subArea.name}>{locationList}</div>;
                  })
               }
            </div>
            <div className="dropdown-area-container">
               <h2 className="area-name">{AREA[2].name}</h2>
               {
                  AREA[2].sub_area.map((subArea) => {
                        let locationList = subArea.location.map((location) => {
                           return (
                              <button 
                                 className="dropdown-option" 
                                 key={location.title} 
                                 value={location.title} 
                                 onClick={handleLocationSelect}
                              >
                                 {location.title}
                              </button>
                           );
                        });
                        locationList.unshift(
                           <h3 className="subarea-name" key={subArea.name}>{subArea.name}</h3>
                        );
                        
                        return <div className="dropdown-subarea-container" key={subArea.name}>{locationList}</div>;
                  })
               }
            </div>
      </div>
   );
}

export default LocationList;
