import React, { Component } from "react";
import Context from "./contexts";
import FormWizardContainer from "./containers/FormWizardContainer";
import EmailContainer from "./containers/stepperContainers/EmailContainer";
import LanguageContainer from "./containers/stepperContainers/LanguageContainer";
import SongContainer from "./containers/stepperContainers/SongContainer";
import { activeStepIndex } from "./reducers";
import {
	emailValidator,
	languageValidator,
	songValidator,
} from "./components/form/validation";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeStepIndex: 0,
			languages: [{ name: "EN" }, { name: "VI" }, { name: "CN" }],
			categories: [
				{
					name: "Let Her Go",
					image:
						"https://a0.muscache.com/im/pictures/76e52436-ee61-4598-8868-f187a55720e8.jpg?aki_policy=xx_large",
				},
				{
					name: "Despacito",
					image:
						"https://a0.muscache.com/im/pictures/36d4b8d3-134a-4e42-afcf-eae717f5ab36.jpg?aki_policy=x_large",
				},
				{
					name: "Fade",
					image:
						"https://a0.muscache.com/im/pictures/82b8bcf5-1210-4229-956f-8e9a606db11f.jpg?aki_policy=x_large",
				},
			],
			_activeStepIndex: action =>
				this.setState(state => activeStepIndex(state, action)),
		};
	}
	render() {
		return (
			<Context.Provider value={this.state}>
				<FormWizardContainer>
					<EmailContainer validate={emailValidator} />
					<LanguageContainer validate={languageValidator} />
					<SongContainer validate={songValidator} />
				</FormWizardContainer>
			</Context.Provider>
		);
	}
}

export default App;
