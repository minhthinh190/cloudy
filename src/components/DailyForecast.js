import React from 'react';

import { getDailyWeather } from '../services/provider';
import { WEATHER_ICON, WEATHER_ICON_FORMAT } from '../services/provider';
import { LOCATION } from '../services/location';
import { timestampToDate } from '../utils';

class DailyForecast extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         location: this.props.location,
         weatherData: [],
      };
   }

   componentDidMount() {
      const location = LOCATION[`${this.state.location}`];

      getDailyWeather(location.coord.lat, location.coord.lon).then((val) => {
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
         const location = LOCATION[`${this.props.location}`];

         getDailyWeather(location.coord.lat, location.coord.lon).then((val) => {
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
                                    src={WEATHER_ICON + element.weather[0].icon + WEATHER_ICON_FORMAT}
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
