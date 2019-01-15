import React from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

class CustomDate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: moment(),
		};
	}
	render() {
		console.log(this.props);
		return (
			<div className="form-group">
				<SingleDatePicker
					date={this.state.date}
					displayFormat={"DD-MM-YYYY"}
					showClearDate={true}
					withPortal={true}
					showDefaultInputIcon={true}
					withFullScreenPortal={false}
					isDayHighlighted={() => true}
					onDateChange={date =>
						this.setState(
							{ date },
							this.props.setFieldValue("date", date)
						)
					}
					focused={this.state.focused}
					onFocusChange={({ focused }) => this.setState({ focused })}
					id={"15-01-2019"}
					placeholder="Date"
				/>
			</div>
		);
	}
}

export default CustomDate;
