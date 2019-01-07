import * as Type from "../constants/ActionTypes";

const activeStepIndex = (state, action) => {
	switch (action.type) {
		case Type.ACTIVE_STEP_INDEX:
			return {
				...state,
				activeStepIndex: state.activeStepIndex + action.payload,
			};
		default:
			return state;
	}
};

export default activeStepIndex;
