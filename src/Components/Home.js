import React from 'react';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    }

    // Handler for setting this state to the searchbar value
    onInputChange = (event) => {
        this.setState({ city: event.target.value });
    };

    // Handler for handling the events on button click
    getCityHandler(e) {
        e.preventDefault();
        console.log(this.state.city);
        this.props.getWeatherData(this.state.city);
        this.props.hidePreviousData();
    }

    render() {
        return (
            <div>
                {/* ========Header Part======= */}
                <div className="header">
                    <span>Weather App</span>
                </div>

                {/* ===========Search Bar========== */}
                <div className="body-container">
                    <form onSubmit={this.getCityHandler.bind(this)}>
                        <input type="text"
                            onChange={this.onInputChange}
                            placeholder="Enter City Name...">
                        </input>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;