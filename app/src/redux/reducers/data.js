import { SET_ALL_IMGS, ADD_FAV_IMG, REMOVE_FAV_IMG, SET_IMG } from '../actionTypes';

const initialState = {
    allImages: [],
    favIds: [],
    selectedImg: null
};

const imgData = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_IMGS: {
            return {
                ...state,
                allImages: action.payload.imgs
            };
        }
        case ADD_FAV_IMG: {
            const { id } = action.payload;
            return {
                ...state,
                favIds: [...state.favIds, id]
            };
        }
        case REMOVE_FAV_IMG: {
            const { index } = action.payload;
            return {
                ...state,
                favIds: state.favIds
                    .slice(0, index)
                    .concat(state.favIds.slice(index + 1))
            };
        }
        case SET_IMG: {
            return {
                ...state,
                selectedImg: action.payload.img
            };
        }
        default: {
            return state;
        }
    }
};

export default imgData;