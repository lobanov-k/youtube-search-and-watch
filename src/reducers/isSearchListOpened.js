import {TOOGLE_SEARCH_LIST} from '../constants';

export default function isSearchListOpened(state = false, action) {
    switch (action.type) {
        case TOOGLE_SEARCH_LIST:
            return !state; 

        default:
            return state;
    }
}