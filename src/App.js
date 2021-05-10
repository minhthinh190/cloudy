import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import AirQuality from './components/AirQuality';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         location: 'Hà Nội',
      };
   }

   handleLocationChange = location => {
      this.setState({ location });
   };

   render() {
      return (
         <div className="App">
            <Navbar onOptionChange={this.handleLocationChange}/>
            <div className="content-section">
               <div className="main-content">
                  <CurrentWeather location={this.state.location}/>
                  <HourlyForecast location={this.state.location}/>
                  <DailyForecast location={this.state.location}/>
               </div>
               <div className="sub-content">
                  <AirQuality location={this.state.location}/>
               </div>
            </div>
         </div>
      );
   }
}

export default App;
