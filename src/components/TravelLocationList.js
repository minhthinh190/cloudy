import React from 'react';
import { TRAVEL_AREA } from '../services/location';

function TravelLocationList(props) {
   const handleLocationSelect = (e) => {
      props.onLocationChange(e.target.value);
   }

   return (
      <div className="dropdown-content dropdown-content-travel">
            <div className="dropdown-area-container">
               <h2 className="area-name">{TRAVEL_AREA[0].name}</h2>
               {
                  TRAVEL_AREA[0].sub_area.map((subArea) => {
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
               <h2 className="area-name">{TRAVEL_AREA[1].name}</h2>
               {
                  TRAVEL_AREA[1].sub_area.map((subArea) => {
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
               <h2 className="area-name">{TRAVEL_AREA[2].name}</h2>
               {
                  TRAVEL_AREA[2].sub_area.map((subArea) => {
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

export default TravelLocationList;
