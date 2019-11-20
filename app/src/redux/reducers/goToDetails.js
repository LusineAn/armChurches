import { GO_TO_DETAILS } from "../actionTypes";

const initialState = [];

const goToDetails = (state = initialState, action) => {
  switch (action.type) {
    case GO_TO_DETAILS: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default goToDetails;
