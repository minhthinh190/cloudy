import React from 'react';

import { getCurrentWeather } from '../services/provider';
import { WEATHER_ICON, WEATHER_ICON_FORMAT } from '../services/provider';
import { LOCATION } from '../services/location';
import { timestampToTime, toVietnamese } from '../utils';

class CurrentWeather extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         location: this.props.location,
         isLoading: true,
         weatherData: {},
      };
   }

   componentDidMount() {
      const location = LOCATION[this.state.location];

      getCurrentWeather(location.coord.lat, location.coord.lon).then((data) => {
         this.setState({
            isLoading: false,
            weatherData: data.current,
         });
      });
   }

   componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
         const location = LOCATION[this.props.location];

         getCurrentWeather(location.coord.lat, location.coord.lon).then((data) => {
            this.setState({
               location: this.props.location,
               isLoading: false,
               weatherData: data.current,
            });
         });
      }
   }

   render() {
      const { isLoading, location, weatherData } = this.state;

      return (
         !isLoading 
         &&
         <div className="current-container">
            <div className="current-main">
               <p className="current-location">{location}</p>
               <p className="current-temp">{Math.round(weatherData.temp)} °C</p>
               <img 
                  className="current-weather-icon"
                  src={WEATHER_ICON + weatherData.weather[0].icon + WEATHER_ICON_FORMAT} 
                  alt="weather icon"
               />
               <p className="current-weather">{toVietnamese(weatherData.weather[0].description)}</p>
            </div>
            <div className="current-details">
               <table className="table-details">
                  <tbody>
                     <tr>
                        <td>Nhiệt độ cảm nhận</td>
                        <td className="detail-val">{Math.round(weatherData.feels_like)} °C</td>
                     </tr>
                     <tr>
                        <td>Độ ẩm</td>
                        <td className="detail-val">{weatherData.humidity} %</td>
                     </tr>
                     <tr>
                        <td>Tầm nhìn xa</td>
                        <td className="detail-val">{weatherData.visibility / 1000} km</td>
                     </tr>
                     <tr>
                        <td>Mặt trời mọc</td>
                        <td className="detail-val">{timestampToTime(weatherData.sunrise)}</td>
                     </tr>
                  </tbody>
               </table>
               <table className="table-details">
                  <tbody>
                        <tr>
                           <td>Tỉ lệ mây</td>
                           <td className="detail-val">{weatherData.clouds} %</td>
                        </tr>
                        <tr>
                           <td>Chỉ số UV</td>
                           <td className="detail-val">{weatherData.uvi}</td>
                        </tr>
                        <tr>
                           <td>Gió</td>
                           <td className="detail-val">{Math.round(weatherData.wind_speed * 3.6)} km/h</td>
                        </tr>
                        <tr>
                           <td>Mặt trời lặn</td>
                           <td className="detail-val">{timestampToTime(weatherData.sunset)}</td>
                        </tr>
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}

export default CurrentWeather;
