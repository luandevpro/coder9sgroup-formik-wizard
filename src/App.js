import React, { Component } from "react";
import Context from "./contexts";
import RadioContainer from "./containers/RadioContainer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languages: ["vi", "en", "cn", "jp", "us", "be"],
		};
	}
	render() {
		return (
			<Context.Provider value={this.state}>
				<RadioContainer />
			</Context.Provider>
		);
	}
}

export default App;
