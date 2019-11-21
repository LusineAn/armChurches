import { ADD_IMG, SET_IMG } from "./actionTypes";

// let nextTodoId = 0;

export const setImg = img => ({
    type: SET_IMG,
    payload: { img }
});

export const addImg = img => ({
    type: ADD_IMG,
    payload: { img }
})