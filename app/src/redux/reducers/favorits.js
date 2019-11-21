import { ADD_FAV_IMG, REMOVE_FAV_IMG } from "../actionTypes";

const initialState = {
    favIds: []
};

const favIds = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV_IMG: {
        const { id } = action.payload;
        return {
            favIds: [...state.favIds, id]
        }
    }
    case REMOVE_FAV_IMG: {
        const { index } = action.payload;
        return {
            favIds: state.favIds
                .slice(0, index)
                .concat(state.favIds.slice(index + 1))
        }
    }
    default: {
      return state;
    }
  }
};

export default favIds;