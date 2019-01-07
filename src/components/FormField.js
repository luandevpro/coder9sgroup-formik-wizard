import React, { Component } from "react";
import { Form } from "formik";

export default class FormField extends Component {
	handleActiveStepIndex = () => {
		this.props._activeStepIndex({
			type: "ACTIVE_STEP_INDEX",
			payload: -1,
		});
	};
	render() {
		const activePage = React.Children.toArray(this.props.children)[
			this.props.activeStepIndex
		];
		const isLastPage =
			this.props.activeStepIndex ===
			React.Children.count(this.props.children) - 1;
		return (
			<Form>
				{activePage}
				<div>
					{this.props.activeStepIndex > 0 && (
						<button
							type="button"
							className="btn btn-primary btn-lg  mr-3"
							onClick={this.handleActiveStepIndex}
						>
							« Previous
						</button>
					)}
					{!isLastPage && <button type="submit">Next</button>}
					{isLastPage && <button type="submit">Submit</button>}
				</div>
			</Form>
		);
	}
}
