import React from 'react';

import { getHourlyWeather } from '../services/provider';
import { WEATHER_ICON, WEATHER_ICON_FORMAT } from '../services/provider';
import { LOCATION } from '../services/location';
import { timestampToTime } from '../utils';

import uv_icon from '../uv_icon.png';

class HourlyForecast extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         location: this.props.location,
         isLoading: true,
         weatherData: [],
      };
   }

   componentDidMount() {
      const location = LOCATION[this.state.location];

      getHourlyWeather(location.coord.lat, location.coord.lon).then((val) => {
         this.setState({
               location: this.props.location,
               isLoading: false,
               weatherData: val.hourly,
         });
      });
   }

   componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
         const location = LOCATION[this.props.location];

         getHourlyWeather(location.coord.lat, location.coord.lon).then((val) => {
            this.setState({
               location: this.props.location,
               isLoading: false,
               weatherData: val.hourly,
            });
         });
      }
   }

   render() {
      const { isLoading, weatherData } = this.state;

      return (
         !isLoading
         &&
         <div className="forecast-container">
               <h2 className="section-title">Dự báo thời tiết hôm nay</h2>
               <div className="forecast-card-container">
                  {
                     weatherData.slice(0, 5).map(element => {
                        return (
                           <div key={element.dt} className="forecast-card">
                              <p className="time">{timestampToTime(element.dt)}</p>
                              <p className="max-temp">{Math.round(element.temp)} <span>°</span></p>
                              <img 
                                 className="forecast-weather-icon"
                                 src={WEATHER_ICON + element.weather[0].icon + WEATHER_ICON_FORMAT}
                                 alt="weather icon"
                              />
                              <div className="forecast-uv-container">
                                 <img className="forecast-uv-icon" src={uv_icon} alt="uv icon"/>
                                 <p className="forecast-uv-index">{element.uvi}</p>
                              </div>
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
