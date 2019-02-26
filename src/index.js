import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
// Specially named function specific to JS - not required by React
	constructor(props) {
		super(props);
		// initialize your state object
		this.state = { lat: null, errorMessage: '' };
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
	// success callback
			(position) => {
				// must call setState - you CAN NOT mutate state directly
				this.setState({ lat: position.coords.latitude });
			},
	// failure callback
			(err) => {
				console.error(err);
				this.setState({ errorMessage: err.message });
			}
		);
	}

// React requires us to define render
	render() {
			if (this.state.errorMessage && !this.state.lat) {
				return <div>{this.state.errorMessage}</div>
			}
			if (this.state.lat && !this.state.errorMessage) {
				return <div>Latitude: {this.state.lat}</div>
			}

			return <div>Loading...</div>
	}
}

ReactDOM.render(<App />,document.querySelector('#root'));
