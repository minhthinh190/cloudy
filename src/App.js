import React from 'react';
import './App.css';

import {cities} from './api/city.js';
import CurrentWeather from './components/CurrentWeather.js';
import HourlyForecast from './components/HourlyForecast.js';
import DailyForecast from './components/DailyForecast.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'hanoi',
        };
    }

    handleOptionChange = (event) => {
        this.setState({ location: event.target.value });
    };

    render() {
        return (
            <div className="App">
                <div className="form">
                    <select onChange={this.handleOptionChange}>
                        {
                            cities.map(element => {
                                return <option value={element.value} key={element.value}>{element.title}</option>;
                            })
                        }
                    </select>
                </div>
                <CurrentWeather location={this.state.location}/>
                <HourlyForecast location={this.state.location}/>
                <DailyForecast location={this.state.location}/>
            </div>
        );
    }
}

export default App;