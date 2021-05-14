import React from 'react';

function LocationList(props) {
   const handleLocationSelect = (event) => {
      props.onLocationChange(event.target.value);
   };

   return (
      <div className="dropdown-content">
         {
            props.areas.map((area) => {
               return (
                  <Area 
                     area={area} 
                     handleLocationSelect={handleLocationSelect}
                     key={area.name}   
                  />
               );
            })
         }
      </div>
   );
}

function Area(props) {
   return (
      <div className="dropdown-area-container">
         <h2 className="area-name">{props.area.name}</h2>
         {
            props.area.sub_area.map((subArea) => {
               return (
                  <SubArea 
                     subArea={subArea} 
                     handleLocationSelect={props.handleLocationSelect} 
                     key={subArea.name}
                  />
               );
            })
         }
      </div>
   );
}

function SubArea(props) {
   return (
      <div className="dropdown-subarea-container">
         <h3 className="subarea-name">{props.subArea.name}</h3>
         {
            props.subArea.location.map((location) => {
               return (
                  <button
                     className="dropdown-option"
                     key={location.title}
                     value={location.title}
                     onClick={props.handleLocationSelect}
                  >
                     {location.title}
                  </button>
               );
            })
         }
      </div>
   );
}

export default LocationList;
