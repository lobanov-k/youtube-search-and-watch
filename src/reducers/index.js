import {combineReducers} from 'redux';
import { REQUEST_SEARCH, SET_CURRENT_VIDEO,
    REQUEST_SEARCH_FAILURE, RECEIVE_VIDEOS } from '../constants';

function currentVideo(state = null, action) {
    switch (action.type) {
        case SET_CURRENT_VIDEO:
            return action.payload.currentVideo;

        default:
            return state;
    }
}

function searchResult(state = {
    isFetching: false,
    searchError: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_SEARCH:
            return Object.assign({}, state, {
                isFetching: true
            });

        case RECEIVE_VIDEOS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.payload.list
            });

        case REQUEST_SEARCH_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                searchError: true
            });

        default:
            return state;
    }
}

function searchString(state = '', action) {
    switch (action.type) {
        case REQUEST_SEARCH:
            return action.payload.searchString;

        default:
            return state;
    }
}

function history(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    currentVideo,
    searchResult,
    searchString,
    history
});