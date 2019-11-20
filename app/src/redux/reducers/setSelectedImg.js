import { SET_SELECTED_IMG } from "../actionTypes";

const initialState = {
  selectedImg: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_IMG: {
      const { selectedImg } = action.payload;
      return {
        ...state,
        selectedImg: selectedImg
      };
    }
    default:
      return state;
  }
}