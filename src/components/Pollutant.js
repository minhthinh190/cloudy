import React from 'react';

import { getCurrentAirQuality } from '../services/provider';
import { LOCATION } from '../services/location';
import { POLLUTANT, UNNECESSARY_POLLUTANT } from '../services/air_quality';

class Pollutant extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         location: this.props.location,
         isLoading: true,
         pollutantData: {},
      };

      this.removeUnnecessaryPollutant = this.removeUnnecessaryPollutant.bind(this);
      this.classifyPollutionLevel = this.classifyPollutionLevel.bind(this);
   }

   componentDidMount() {
      const location = LOCATION[this.state.location];

      getCurrentAirQuality(location.coord.lat, location.coord.lon).then((data) => {
         data.list[0].components = this.removeUnnecessaryPollutant(data.list[0].components);

         this.setState({
            isLoading: false,
            pollutantData: data.list[0],
         });
      });
   }

   componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
         const location = LOCATION[this.props.location];

         getCurrentAirQuality(location.coord.lat, location.coord.lon).then((data) => {
            data.list[0].components = this.removeUnnecessaryPollutant(data.list[0].components);
            
            this.setState({
               location: this.props.location,
               isLoading: false,
               pollutantData: data.list[0],
            });
         });
      }
   }

   removeUnnecessaryPollutant(pollutantJson) {
      UNNECESSARY_POLLUTANT.forEach((pollutant) => {
         delete pollutantJson[pollutant];
      });

      return pollutantJson;
   }

   classifyPollutionLevel(pollutant, value) {
      let level = '';
      
      POLLUTANT[pollutant].level.forEach(element => {
         if (value >= element.min && value < element.max) {
            level = element.level;
         }
      });

      return level;
   }

   render() {
      const { isLoading, pollutantData } = this.state;

      return (
         !isLoading
         &&
         <div>
            <h3 className="pollutant-section-title">Các chất gây ô nhiễm</h3>
            {
               Object.entries(pollutantData.components).reverse().map(([pollutant, value]) => {
                  return (
                     <div className="pollutant" key={pollutant}>
                        <div className="pollutant-detail">
                           <p className="pollutant-name">{POLLUTANT[pollutant].name}</p>
                           <p>
                              <span className={"pollutant-value quality-" + this.classifyPollutionLevel(pollutant, value)}>
                                 {value}
                              </span> 
                              <span className="pollutant-unit">{' ' + POLLUTANT.unit}</span>
                           </p>
                        </div>
                        <div className="pollutant-detail">
                           <p className="pollutant-unit">Giới hạn cho phép</p>
                           <p>
                              <span className="pollutant-value">{POLLUTANT[pollutant].limit}</span> 
                              <span className="pollutant-unit">{' ' + POLLUTANT.unit}</span>
                           </p>
                        </div>
                     </div>
                  );
               })
            }
         </div>
      );
   }
}

export default Pollutant;
