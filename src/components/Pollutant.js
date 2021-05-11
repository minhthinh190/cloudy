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
         allowedConcentration: {
            pm10: '50',
            pm2_5: '25',
            so2: '50',
         },
      };

      this.makePollutantNameUppercase = this.makePollutantNameUppercase.bind(this);
      this.hightlightPollutantValue = this.hightlightPollutantValue.bind(this);
   }

   componentDidMount() {
      const location = LOCATION[`${this.state.location}`];

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
         const location = LOCATION[`${this.props.location}`];

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
      let pollutantUppercase = '';

      switch (pollutant) {
         case 'pm10':
            pollutantUppercase = 'PM10';
            break;
         case 'pm2_5':
            pollutantUppercase = 'PM2.5';
            break;
         case 'so2':
            pollutantUppercase = 'SO2';
            break;
         default:
            pollutantUppercase = pollutant;
      }

      return pollutantUppercase;
   }

   hightlightPollutantValue(pollutant, value) {
      let color = 'good';

      if (pollutant === 'pm10' && value >= 35) color = 'moderate';
      if (pollutant === 'pm10' && value >= 50) color = 'poor';
      if (pollutant === 'pm10' && value >= 100) color = 'very-poor';

      if (pollutant === 'pm2_5' && value >= 20) color = 'moderate';
      if (pollutant === 'pm2_5' && value >= 25) color = 'poor';
      if (pollutant === 'pm2_5' && value >= 50) color = 'very-poor';

      if (pollutant === 'so2' && value >= 35) color = 'moderate';
      if (pollutant === 'so2' && value >= 50) color = 'poor';
      if (pollutant === 'so2' && value >= 100) color = 'very-poor';

      return color;
   }

   render() {
      if (this.state.isLoading) {
         return <div></div>;
      }
      else {
         const pollutants = Object.entries(this.state.pollutants.components);
         
         // Remove unnecessary pollutants
         pollutants.pop()
         pollutants.reverse();

         return (
            <div>
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
                                 <span className="pollutant-value">{this.state.allowedConcentration[pollutant]}</span> 
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
