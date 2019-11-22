import { SET_ALL_IMGS, ADD_FAV_IMG, REMOVE_FAV_IMG, SET_IMG } from './actionTypes';

export const setAllImages = imgs => ({
    type: SET_ALL_IMGS,
    payload: { imgs }
});

export const addFavImg = id => ({
    type: ADD_FAV_IMG,
    payload: { id }
});

export const removeFavImg = index => ({
    type: REMOVE_FAV_IMG,
    payload: { index }
});

export const setImg = img => ({
    type: SET_IMG,
    payload: { img }
});