import React from 'react';
import {travelLocationList} from '../api/location.js';

function TravelLocationList(props) {
   const handleLocationSelect = (e) => {
      props.onLocationChange(e.target.value);
   }

   return (
      <div className="dropdown-content dropdown-content-travel">
            <div className="dropdown-area-container">
               <h2 className="area-name">{travelLocationList[0].name}</h2>
               {
                  travelLocationList[0].sub_area.map(sub_area => {
                        let locationList = sub_area.location.map(location => {
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
                           <h3 className="subarea-name" key={sub_area.name}>{sub_area.name}</h3>
                        );
                        
                        return <div className="dropdown-subarea-container" key={sub_area.name}>{locationList}</div>;
                  })
               }
            </div>
            <div className="dropdown-area-container">
               <h2 className="area-name">{travelLocationList[1].name}</h2>
               {
                  travelLocationList[1].sub_area.map(sub_area => {
                        let locationList = sub_area.location.map(location => {
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
                           <h3 className="subarea-name" key={sub_area.name}>{sub_area.name}</h3>
                        );
                        
                        return <div className="dropdown-subarea-container" key={sub_area.name}>{locationList}</div>;
                  })
               }
            </div>
            <div className="dropdown-area-container">
               <h2 className="area-name">{travelLocationList[2].name}</h2>
               {
                  travelLocationList[2].sub_area.map(sub_area => {
                        let locationList = sub_area.location.map(location => {
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
                           <h3 className="subarea-name" key={sub_area.name}>{sub_area.name}</h3>
                        );
                        
                        return <div className="dropdown-subarea-container" key={sub_area.name}>{locationList}</div>;
                  })
               }
            </div>
      </div>
   );
}

export default TravelLocationList;