import React from 'react';

import { getCurrentAirQuality } from '../services/provider';
import { LOCATION } from '../services/location';

class Pollutant extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         location: this.props.location,
         isLoading: true,
         pollutants: {},
         concentrationLimit: {
            pm10: '50',
            pm2_5: '25',
            so2: '50',
         },
      };

      this.makePollutantNameUppercase = this.makePollutantNameUppercase.bind(this);
      this.hightlightPollutantValue = this.hightlightPollutantValue.bind(this);
   }

   componentDidMount() {
      const location = LOCATION[this.state.location];

      getCurrentAirQuality(location.coord.lat, location.coord.lon).then((data) => {
         this.setState({
            location: this.props.location,
            isLoading: false,
            pollutants: data.list[0],
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
               pollutants: data.list[0],
            });
         });
      }
   }

   makePollutantNameUppercase(pollutant) {
      const uppercasePollutant = {
         pm10: 'PM10',
         pm2_5: 'PM2.5',
         so2: 'SO2',
      };

      return uppercasePollutant[pollutant];
   }

   between(value, min, max) {
      return (value >= min && value < max);
   }

   hightlightPollutantValue(pollutant, value) {
      let level = '';

      const pollutionLevel = {
         pm10: [
            { level: 'good', min: 0, max: 35 },
            { level: 'moderate', min: 35, max: 50 },
            { level: 'poor', min: 50, max: 100 },
            { level: 'very-poor', min: 100, max: Infinity },
         ],
         pm2_5: [
            { level: 'good', min: 0, max: 20 },
            { level: 'moderate', min: 20, max: 25 },
            { level: 'poor', min: 25, max: 50 },
            { level: 'very-poor', min: 50, max: Infinity },
         ],
         so2: [
            { level: 'good', min: 0, max: 35 },
            { level: 'moderate', min: 35, max: 50 },
            { level: 'poor', min: 50, max: 100 },
            { level: 'very-poor', min: 100, max: Infinity },
         ],
      };
      
      pollutionLevel[pollutant].forEach(element => {
         if (this.between(value, element.min, element.max)) {
            level = element.level;
         }
      });

      return level;
   }

   render() {
      if (this.state.isLoading) {
         return <div></div>;
      } else {
         const pollutants = Object.entries(this.state.pollutants.components);
         
         // Remove unnecessary pollutants
         pollutants.pop()
         pollutants.reverse();

         return (
            <div>
               <h3 className="pollutant-section-title">Các chất gây ô nhiễm</h3>
               {
                  pollutants.slice(0, 3).map(([pollutant, value]) => {
                     return (
                        <div className="pollutant" key={pollutant}>
                           <div className="pollutant-detail">
                              <p className="pollutant-name">{this.makePollutantNameUppercase(pollutant)}</p>
                              <p>
                                 <span className={"pollutant-value quality-" + this.hightlightPollutantValue(pollutant, value)}>
                                    {value}
                                 </span> 
                                 <span className="pollutant-unit"> μg/m3</span>
                              </p>
                           </div>
                           <div className="pollutant-detail">
                              <p className="pollutant-unit">Giới hạn cho phép</p>
                              <p>
                                 <span className="pollutant-value">{this.state.concentrationLimit[pollutant]}</span> 
                                 <span className="pollutant-unit"> μg/m3</span>
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
}

export default Pollutant;
