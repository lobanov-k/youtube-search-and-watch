import {combineReducers} from 'redux';

function currentVideo(state = null, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function searchResult(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

function searchString(state = null, action) {
    switch (action.type) {
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