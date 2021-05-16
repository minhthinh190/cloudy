import React from 'react';

import { getCurrentAirQuality } from '../services/provider';
import { LOCATION } from '../services/location';
import { AIR_QUALITY_LEVEL } from '../services/air_quality';

class AirQuality extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         location: this.props.location,
         isLoading: true,
         airQualityData: {},
      };
   }

   componentDidMount() {
      const location = LOCATION[this.state.location];

      getCurrentAirQuality(location.coord.lat, location.coord.lon).then((data) => {
         this.setState({
            isLoading: false,
            airQualityData: data.list[0],
         });
      });
   }

   componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
         const location = LOCATION[this.props.location];

         getCurrentAirQuality(location.coord.lat, location.coord.lon).then((data) => {
            this.setState({
               location: this.props.location,
               isLoading: false,
               airQualityData: data.list[0],
            });
         });
      }
   }

   render() {
      const { isLoading, airQualityData } = this.state;

      return (
         !isLoading
         &&
         <div className="air-quality-container">
            <p className="air-quality-title">Chất lượng không khí</p>
            <p className={"air-quality-score quality-" + AIR_QUALITY_LEVEL[airQualityData.main.aqi].description}>
               {airQualityData.main.aqi}
            </p>
            <ul className="air-quality-level">
               {
                  Object.values(AIR_QUALITY_LEVEL).map((level) => {
                     return (
                        <li key={level.score}>
                           {level.score}
                           <span className="air-quality-description">
                              {level.vietnameseDescription}
                           </span>
                        </li>
                     );
                  })
               }
            </ul>
         </div>
      );
   }
}

export default AirQuality;
