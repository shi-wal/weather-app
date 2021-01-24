import React from 'react';
import axios from "axios";
import Home from './Components/Home';
import Comment from './Components/Comment';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isLoaded: false,
      error: null,
      list: []
    };
    // For hiding previous loaded data
    this.hideData = () => {
      this.setState({ isLoaded: false, error: null });
    }
  }

  //  Method for unix to normal time conversion
  normalTime = (time) => {
    var t = new Date(time * 1000);
    var formatted = ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2) + ':' + ('0' + t.getSeconds()).slice(-2);
    return formatted;
  }

  // For fetching data on API call
  fetchData = async (city) => {
    this.setState({ isLoading: true });
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b91ad9c0d5a96d0d6953ef6f594c3e9e";
    try {
      const response = await axios.get(url);
      this.setState({
        list: response.data,
        isLoading: false,
        isLoaded: true
      });
    }
    // This will catch the error if occurs
    catch (error) {
      this.setState({ isLoading: false, error });
    }
  };

  render() {
    const { list, isLoading, error, isLoaded } = this.state;
    const weather = [list];
    return (
      <div>
        <Home getWeatherData={this.fetchData} hidePreviousData={this.hideData} />

        {/* Showing the error if occurs */}
        {error ? <div className="status-box"><p className="error">City Name not found</p></div> : null}

        {/* Shows loading process */}
        {isLoading ? (
          <div className="status-box">
            <p>Searching City name...</p>
          </div>
        ) : null}

        {/* Rendering the fetched data on API call */}
        {isLoaded ? (<div className="weather-container">
          {weather.map(info => {
            var date = new Date();
            return (
              <div key={info.id} className="weather-info">
                <div className="left-container">
                  <div>{info.name}, {info.sys.country}, {date.toDateString()} </div>
                  <div className="temp">{parseFloat((info.main.temp) - 273.15).toFixed(1)}°C <i className="fas fa-water"></i></div>
                </div>
                <ul>
                  <div className="divider">
                    <li>Weather: <span>{info.weather[0].main}</span></li>
                    <li>Wind: <span>{parseFloat((info.wind.speed) * 3.6).toFixed(1)} km/hr</span></li>
                  </div>
                  <div className="divider">
                    <li>Humidity: <span>{info.main.humidity}%</span></li>
                    <li>Pressure: <span>{info.main.pressure} Pa</span></li>
                  </div>
                  <div className="divider">
                    <li>Max Temp: <span>{parseInt((info.main.temp_max) - 273.15)}°C</span></li>
                    <li>Min Temp: <span>{parseInt((info.main.temp_min) - 273.15)}°C</span></li>
                  </div>
                  <div className="divider">
                    <li>Sunrise: <span>{this.normalTime(info.sys.sunrise)}</span></li>
                    <li>Sunset: <span>{this.normalTime(info.sys.sunset)}</span></li>
                  </div>
                </ul>
              </div>
            )
          })}
          {/* Rendering comment section */}
          <Comment />
        </div>) : null}
      </div>
    );
  }
}

export default App;