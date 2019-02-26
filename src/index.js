import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
// Specially named function specific to JS - not required by React
	constructor(props) {
		super(props);
		// initialize your state object
		this.state = { lat: null };

		window.navigator.geolocation.getCurrentPosition(
	// success callback
			(position) => {
				// must call setState - you CAN NOT mutate state directly
				this.setState({ lat: position.coords.latitude });
			},
	// failure callback
			(err) => console.log(err)
		);
	}

// React requires us to define render
	render() {
		return <div>Latitude: {this.state.lat}</div>;
	}
}

ReactDOM.render(<App />,document.querySelector('#root'));
