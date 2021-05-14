import React from 'react';

import { getCurrentAirQuality } from '../services/provider';
import { LOCATION } from '../services/location';

class AirQuality extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         location: this.props.location,
         isLoading: true,
         airQuality: {},
      };

      this.classifyAirQualityColor = this.classifyAirQualityColor.bind(this);
   }

   componentDidMount() {
      const location = LOCATION[this.state.location];

      getCurrentAirQuality(location.coord.lat, location.coord.lon).then((data) => {
         this.setState({
            location: this.props.location,
            isLoading: false,
            airQuality: data.list[0],
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
               airQuality: data.list[0],
            });
         });
      }
   }

   classifyAirQualityColor(airQualityScore) {
      const airQualityLevel = {
         1: 'good',
         2: 'fair',
         3: 'moderate',
         4: 'poor',
         5: 'very-poor',
      };

      return airQualityLevel[airQualityScore];
   }

   render() {
      return (
         this.state.isLoading ?
         <div></div>
         :
         <div className="air-quality-container">
            <p className="air-quality-title">Chất lượng không khí</p>
            <p className={"air-quality-score quality-" + this.classifyAirQualityColor(this.state.airQuality.main.aqi)}>
               {this.state.airQuality.main.aqi}
            </p>
            <ul className="air-quality-level">
               <li>
                  1<span className="air-quality-description">Tốt</span>
               </li>
               <li>
                  2<span className="air-quality-description">Khá tốt</span>
               </li>
               <li>
                  3<span className="air-quality-description">Trung bình</span>
               </li>
               <li>
                  4<span className="air-quality-description">Kém</span>
               </li>
               <li>
                  5<span className="air-quality-description">Rất kém</span>
               </li>
            </ul>
         </div>
      );
   }
}

export default AirQuality;
