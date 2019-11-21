import { ADD_VIDEO_TO_HISTORY, REMOVE_VIDEO_FROM_HISTORY } from '../constants';

export default function history(state = [], action) {
    switch (action.type) {
        case ADD_VIDEO_TO_HISTORY:
            return [...state, action.payload.currentVideo];

        case REMOVE_VIDEO_FROM_HISTORY:
            return state.filter((item, index) => index !== action.payload.index);

        default:
            return state;
    }
}