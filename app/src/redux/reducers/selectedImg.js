import { SET_IMG } from "../actionTypes";

const initialState = [];

const selectedImg = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMG: {
      return action.payload.img;
    }
    default: {
      return state;
    }
  }
};

export default selectedImg;
