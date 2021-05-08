import React from 'react';

import {getHourlyWeather} from '../api/provider.js';
import {weatherIcon, weatherIconFormat} from '../api/provider.js';
import {province} from '../api/location.js';
import {timestampToTime} from '../utils.js';

class HourlyForecast extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         location: this.props.location,
         weatherData: [],
      };
   }

   componentDidMount() {
      const location = province[`${this.state.location}`];

      getHourlyWeather(location.coord.lat, location.coord.lon).then(val => {
         this.setState({
               location: this.props.location,
               weatherData: val.hourly,
         });
      });
   }

   componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
         const location = province[`${this.props.location}`];

         getHourlyWeather(location.coord.lat, location.coord.lon).then(val => {
               this.setState({
                  location: this.props.location,
                  weatherData: val.hourly,
               });
         });
      }
   }

   render() {
      return (
         <div className="forecast-container">
               <h2 className="section-title">Dự báo thời tiết hôm nay</h2>
               <div className="forecast-card-container">
                  {
                     this.state.weatherData.slice(0, 5).map(element => {
                           return (
                              <div key={element.dt} className="forecast-card">
                                 <p className="time">{timestampToTime(element.dt)}</p>
                                 <p className="max-temp">{Math.round(element.temp)} <span>°</span></p>
                                 <img 
                                       className="forecast-weather-icon"
                                       src={weatherIcon + element.weather[0].icon + weatherIconFormat}
                                       alt="weather icon"
                                 />
                              </div>
                           );
                     })
                  }
               </div>
         </div>
      );
   }
}

export default HourlyForecast;