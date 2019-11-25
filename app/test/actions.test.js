import * as actions from '../src/redux/actions';
import * as types from '../src/redux/actionTypes';

describe('actions', () => {
    it('should create an action to add images', () => {
        const imgs = [
            {id: '0', src: '/app/assets/images/monasteries/Axtala.jpg', name: 'Axtala', desc: 'Axtala'},
            {id: '1', src: '/app/assets/images/monasteries/Dadivanq.jpg', name: 'Dadivanq', desc: 'Dadivanq'},
            {id: '2', src: '/app/assets/images/monasteries/Gayane.jpg', name: 'Gayane', desc: 'Gayane'}
        ];
        const expectedAction = {
            type: types.SET_ALL_IMGS,
            payload: { imgs }
        };
        expect(actions.setAllImages(imgs)).toEqual(expectedAction);
    });
    it('should create an action to add image id to favorite images ids list', () => {
        const id = 10;
        const expectedAction = {
            type: types.ADD_FAV_IMG,
            payload: { id }
        };
        expect(actions.addFavImg(id)).toEqual(expectedAction);
    });
    it('should create an action to remove image id from favorite images ids list', () => {
        const index = 1;
        const expectedAction = {
            type: types.REMOVE_FAV_IMG,
            payload: { index }
        };
        expect(actions.removeFavImg(index)).toEqual(expectedAction);
    });
    it('should create an action to save the selected image', () => {
        const img = {id: '1', src: '/app/assets/images/monasteries/Axtala.jpg', name: 'Axtala', desc: 'Ախթալա'};
        const expectedAction = {
            type: types.SET_IMG,
            payload: { img }
        };
        expect(actions.setImg(img)).toEqual(expectedAction);
    });
});