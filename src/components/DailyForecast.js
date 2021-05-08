import React from 'react';

import {getDailyWeather} from '../api/provider.js';
import {weatherIcon, weatherIconFormat} from '../api/provider.js';
import {province} from '../api/location.js';
import {timestampToDate} from '../utils.js';

class DailyForecast extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         location: this.props.location,
         weatherData: [],
      };
   }

   componentDidMount() {
      const location = province[`${this.state.location}`];

      getDailyWeather(location.coord.lat, location.coord.lon).then(val => {
         // remove today weather from the daily forecast list
         val.daily.shift();

         this.setState({
               location: this.props.location,
               weatherData: val.daily,
         });
      });
   }

   componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
         const location = province[`${this.props.location}`];

         getDailyWeather(location.coord.lat, location.coord.lon).then(val => {
               // remove today weather from the daily forecast list
               val.daily.shift();

               this.setState({
                  location: this.props.location,
                  weatherData: val.daily,
               });
         });
      }
   }

   render() {
      return (
         <div className="forecast-container">
               <h2 className="section-title">Dự báo thời tiết 5 ngày tới</h2>
               <div className="forecast-card-container">
                  {
                     this.state.weatherData.slice(0, 5).map(element => {
                           return (
                              <div key={element.dt} className="forecast-card">
                                 <p className="date">{timestampToDate(element.dt)}</p>
                                 <p className="max-temp">{Math.round(element.temp.max)} <span>°</span></p>
                                 <p className="min-temp">{Math.round(element.temp.min)} <span>°</span></p>
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

export default DailyForecast;