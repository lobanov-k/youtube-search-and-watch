import {REQUEST_SEARCH} from '../constants';

export default function searchString(state = '', action) {
    switch (action.type) {
        case REQUEST_SEARCH:
            return action.payload.searchString;

        default:
            return state;
    }
}