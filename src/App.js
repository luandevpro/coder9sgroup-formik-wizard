import React, { Component } from "react";
import Context from "./contexts";
import CheckBoxContainer from "./containers/CheckBoxContainer";

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
				<CheckBoxContainer />
			</Context.Provider>
		);
	}
}

export default App;
