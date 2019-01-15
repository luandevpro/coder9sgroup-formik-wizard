import React, { Component } from "react";
import Context from "./contexts";
import DateContainer from "./containers/DateContainer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Context.Provider value={this.state}>
				<DateContainer />
			</Context.Provider>
		);
	}
}

export default App;
