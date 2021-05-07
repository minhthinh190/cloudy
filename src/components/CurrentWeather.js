import React from 'react';

import {getCurrentWeather} from '../api/provider.js';
import {city} from '../api/city.js';
import {timestampToTime} from '../utils.js';

class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: this.props.location,
            temp: '',
            weather: '',
            feels_like: '',
            clouds: '',
            humidity: '',
            uv: '',
            visibility: '',
            wind_speed: '',
            sunrise: '',
            sunset: '',
        };
    }

    componentDidMount() {
        const location = city[`${this.state.location}`];
        
        getCurrentWeather(location.coord.lat, location.coord.lon).then(val => {
            console.log(val);
            this.setState({
                location: location.name,
                temp: val.current.temp,
                weather: val.current.weather[0].main,
                feels_like: val.current.feels_like,
                clouds: val.current.clouds,
                humidity: val.current.humidity,
                uv: val.current.uvi,
                visibility: val.current.visibility,
                wind_speed: val.current.wind_speed,
                sunrise: val.current.sunrise,
                sunset: val.current.sunset,
            });
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            const location = city[`${this.props.location}`];

            getCurrentWeather(location.coord.lat, location.coord.lon).then(val => {
                console.log(val);
                this.setState({
                    location: location.name,
                    temp: val.current.temp,
                    weather: val.current.weather[0].main,
                    feels_like: val.current.feels_like,
                    clouds: val.current.clouds,
                    humidity: val.current.humidity,
                    uv: val.current.uvi,
                    visibility: val.current.visibility,
                    wind_speed: val.current.wind_speed,
                    sunrise: val.current.sunrise,
                    sunset: val.current.sunset,
                });
            });
        }
    }

    render() {
        return (
            <div className="current-container">
                <div className="current-main">
                    <p className="current-location">{this.state.location}</p>
                    <p className="current-temp">{Math.round(this.state.temp)} °C</p>
                    <p className="current-weather">{this.state.weather}</p>
                </div>
                <div className="current-details">
                    <table className="table-details">
                        <tbody>
                            <tr>
                                <td>Nhiệt độ cảm nhận</td>
                                <td className="detail-val">{Math.round(this.state.feels_like)} °C</td>
                            </tr>
                            <tr>
                                <td>Độ ẩm</td>
                                <td className="detail-val">{this.state.humidity} %</td>
                            </tr>
                            <tr>
                                <td>Tầm nhìn xa</td>
                                <td className="detail-val">{this.state.visibility / 1000} km</td>
                            </tr>
                            <tr>
                                <td>Mặt trời mọc</td>
                                <td className="detail-val">{timestampToTime(this.state.sunrise)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table-details">
                        <tbody>
                            <tr>
                                <td>Tỉ lệ mây</td>
                                <td className="detail-val">{this.state.clouds} %</td>
                            </tr>
                            <tr>
                                <td>Chỉ số UV</td>
                                <td className="detail-val">{this.state.uv}</td>
                            </tr>
                            <tr>
                                <td>Gió</td>
                                <td className="detail-val">{Math.round(this.state.wind_speed * 3.6)} km/h</td>
                            </tr>
                            <tr>
                                <td>Mặt trời lặn</td>
                                <td className="detail-val">{timestampToTime(this.state.sunset)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CurrentWeather;