import {SET_CURRENT_VIDEO} from '../constants';

export default function currentVideo(state = null, action) {
    switch (action.type) {
        case SET_CURRENT_VIDEO:
            return action.payload.currentVideo;

        default:
            return state;
    }
}