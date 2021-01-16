import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        <span>Weather App</span>
      </div>
      <div className="body-container">
        <input placeholder="Enter City Name..."></input>
        <button>Search</button>
      </div>
    </div>
  );
}

export default App;
