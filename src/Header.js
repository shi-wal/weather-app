import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }
      onSubmit(e) {
        e.preventDefault();
        var city = this.cityname.value;
    }
    render() {
        return (
            <div>
                <div className="header">
                    <span>Weather App</span>
                </div>
                <div className="body-container">
                    <form>
                    <input type="text"  ref={(c) => this.cityname = c} name="cityname"  id="cityname" placeholder="Enter City Name..."></input>
                    </form>
                    <button onClick={this.onSubmit}>Search</button>
                </div>
            </div>
        );
    }
}

export default Header;