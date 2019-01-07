import React, { Component } from "react";
import Context from "./contexts";
import FormWizardContainer from "./containers/FormWizardContainer";
import EmailContainer from "./containers/stepperContainers/EmailContainer";
import LanguageContainer from "./containers/stepperContainers/LanguageContainer";
import SongContainer from "./containers/stepperContainers/SongContainer";
import { activeStepIndex } from "./reducers";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeStepIndex: 0,
			_activeStepIndex: action =>
				this.setState(state => activeStepIndex(state, action)),
		};
	}
	render() {
		return (
			<Context.Provider value={this.state}>
				<FormWizardContainer>
					<EmailContainer />
					<LanguageContainer />
					<SongContainer />
				</FormWizardContainer>
			</Context.Provider>
		);
	}
}

export default App;
