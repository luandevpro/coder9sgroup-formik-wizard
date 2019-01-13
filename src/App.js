import React, { Component } from "react";
import Context from "./contexts";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<Context.Provider value={this.state}>
            hello
			</Context.Provider>
		);
	}
}

export default App;
