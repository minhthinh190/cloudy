import React from 'react';
import './App.css';

import Navbar from './components/Navbar.js';
import CurrentWeather from './components/CurrentWeather.js';
import HourlyForecast from './components/HourlyForecast.js';
import DailyForecast from './components/DailyForecast.js';

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
               <CurrentWeather location={this.state.location}/>
               <HourlyForecast location={this.state.location}/>
               <DailyForecast location={this.state.location}/>
         </div>
      );
   }
}

export default App;