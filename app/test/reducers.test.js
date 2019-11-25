import dataReducer from '../src/redux/reducers/data';
import * as types from '../src/redux/actionTypes';

describe('data reducer', () => {
    it('should return the initial state', () => {
        expect(dataReducer(undefined, {})).toEqual(
            {
                allImages: [],
                favIds: [],
                selectedImg: null
            }
        );
    });
    it('should handle SET_ALL_IMGS', () => {
        const initialState = {
            allImages: [],
            favIds: [],
            selectedImg: null
        };
        expect(dataReducer(initialState, {
            type: types.SET_ALL_IMGS,
            payload: {
                imgs: [
                    {id: '0', type: 'monastery', src: '/app/assets/images/monasteries/Axtala.jpg', name: 'Axtala', desc: 'Axtala'},
                    {id: '1', type: 'monastery', src: '/app/assets/images/monasteries/Dadivanq.jpg', name: 'Dadivanq', desc: 'Dadivanq'},
                    {id: '2', type: 'monastery', src: '/app/assets/images/monasteries/Gayane.jpg', name: 'Gayane', desc: 'Gayane'}
                ]
            }
        })).toEqual({
            allImages: [
                {id: '0', type: 'monastery', src: '/app/assets/images/monasteries/Axtala.jpg', name: 'Axtala', desc: 'Axtala'},
                {id: '1', type: 'monastery', src: '/app/assets/images/monasteries/Dadivanq.jpg', name: 'Dadivanq', desc: 'Dadivanq'},
                {id: '2', type: 'monastery', src: '/app/assets/images/monasteries/Gayane.jpg', name: 'Gayane', desc: 'Gayane'}
            ],
            favIds: [],
            selectedImg: null
        });
    });
    it('should handle ADD_FAV_IMG', () => {
        const initialState1 = {
            allImages: [],
            favIds: [],
            selectedImg: null
        };
        expect(dataReducer(initialState1, {
            type: types.ADD_FAV_IMG,
            payload: { id: 7 }
        })).toEqual({
            allImages: [],
            favIds: [7],
            selectedImg: null
        });
        const initialState2 = {
            allImages: [],
            favIds: [7],
            selectedImg: null
        };
        expect(dataReducer(initialState2, {
            type: types.ADD_FAV_IMG,
            payload: { id: 1 }
        })).toEqual({
            allImages: [],
            favIds: [7, 1],
            selectedImg: null
        });
    });
    it('should handle REMOVE_FAV_IMG', () => {
        const initialState1 = {
            allImages: [],
            favIds: [],
            selectedImg: null
        };
        expect(dataReducer(initialState1, {
            type: types.REMOVE_FAV_IMG,
            payload: { index: 7 }
        })).toEqual({
            allImages: [],
            favIds: [],
            selectedImg: null
        });
        const initialState2 = {
            allImages: [],
            favIds: [8, 9, 10],
            selectedImg: null
        };
        expect(dataReducer(initialState2, {
            type: types.REMOVE_FAV_IMG,
            payload: { index: 1 }
        })).toEqual({
            allImages: [],
            favIds: [8, 10],
            selectedImg: null
        });
    });
    it('should handle SET_IMG', () => {
        const initialState1 = {
            allImages: [],
            favIds: [],
            selectedImg: null
        };
        expect(dataReducer(initialState1, {
            type: types.SET_IMG,
            payload: {
                img: null
            }
        })).toEqual({
            allImages: [],
            favIds: [],
            selectedImg: null
        });
        const initialState2 = {
            allImages: [],
            favIds: [],
            selectedImg: null
        };
        expect(dataReducer(initialState2, {
            type: types.SET_IMG,
            payload: {
                img: {id: '2', type: 'monastery', src: '/app/assets/images/monasteries/Gayane.jpg', name: 'Gayane', desc: 'Gayane'}
            }
        })).toEqual({
            allImages: [],
            favIds: [],
            selectedImg: {id: '2', type: 'monastery', src: '/app/assets/images/monasteries/Gayane.jpg', name: 'Gayane', desc: 'Gayane'}
        });
        const initialState3 = {
            allImages: [],
            favIds: [],
            selectedImg: {id: '2', type: 'monastery', src: '/app/assets/images/monasteries/Gayane.jpg', name: 'Gayane', desc: 'Gayane'}
        };
        expect(dataReducer(initialState3, {
            type: types.SET_IMG,
            payload: {
                img: {id: '1', type: 'monastery', src: '/app/assets/images/monasteries/Dadivanq.jpg', name: 'Dadivanq', desc: 'Dadivanq'}
            }
        })).toEqual({
            allImages: [],
            favIds: [],
            selectedImg: {id: '1', type: 'monastery', src: '/app/assets/images/monasteries/Dadivanq.jpg', name: 'Dadivanq', desc: 'Dadivanq'}
        });
    });
});