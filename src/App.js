import React, { Component } from "react";
import Context from "./contexts";
import UploadContainer from "./containers/UploadContainer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Context.Provider value={this.state}>
				<UploadContainer />
			</Context.Provider>
		);
	}
}

export default App;
