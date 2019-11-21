import { REQUEST_SEARCH, REQUEST_SEARCH_FAILURE, RECEIVE_VIDEOS } from '../constants';

export default function searchResult(state = {
    isFetching: false,
    searchError: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_SEARCH:
            return {...state, isFetching: true };

        case RECEIVE_VIDEOS:
            return {...state, isFetching: false, items: action.payload.list};

        case REQUEST_SEARCH_FAILURE:
            return {...state, isFetching: false, searchError: true};

        default:
            return state;
    }
}