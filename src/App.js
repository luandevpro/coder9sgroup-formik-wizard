import React, { Component } from "react";
import Context from "./contexts";
import RadioContainer from "./containers/SelectContainer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			company: [
				{ value: "Facebook", label: "Facebook" },
				{ value: "Google", label: "Google" },
				{ value: "Apple", label: "Apple" },
				{ value: "Amazon", label: "Amazon" },
				{ value: "Netlify", label: "Netlify" },
			],
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
