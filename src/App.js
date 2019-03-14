import React, { Component } from "react";
import Context from "./contexts";
import DraftContainer from "./containers/DraftContainer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Context.Provider value={this.state}>
				<DraftContainer />
			</Context.Provider>
		);
	}
}

export default App;
