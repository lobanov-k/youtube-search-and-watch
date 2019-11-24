import fetch from 'isomorphic-fetch';
import { REQUEST_SEARCH, REQUEST_SEARCH_FAILURE,
    RECEIVE_VIDEOS, SET_CURRENT_VIDEO,
    ADD_VIDEO_TO_HISTORY, REMOVE_VIDEO_FROM_HISTORY, TOOGLE_SEARCH_LIST} from './constants';
import {getRequestString} from './utils';

export function requestSearchAction(searchString) {
    return {
        type: REQUEST_SEARCH,
        payload: {
            searchString
        }
    };
}

export function recieveVideos(list) {
    return {
        type: RECEIVE_VIDEOS,
        payload: {
            list
        }
    };
}

export function requestVideosFailure(error) {
    return {
        type: REQUEST_SEARCH_FAILURE,
        payload: {
            error
        }
    };
}

export function fetchSearchVideos(searchString) {
    return (dispatch) => {
        dispatch(requestSearchAction(searchString));

        return fetch(getRequestString(searchString))
            .then(response => {
                return response.json();
            }).then((result) => {
                dispatch(recieveVideos(result.items));
            }).catch((error) => {
                dispatch(recieveVideos(error));
            });
    }
}

export function setCurrentVideo(currentVideo) {
    return {
        type: SET_CURRENT_VIDEO,
        payload: {
            currentVideo
        }
    }
}

export function addVideoToHistory(currentVideo) {
    return {
        type: ADD_VIDEO_TO_HISTORY,
        payload: {
            currentVideo
        }
    }
}

export function removeVideoFromHistory(index) {
    return {
        type: REMOVE_VIDEO_FROM_HISTORY,
        payload: {
            index
        }
    }
}

export function toggleSearchList(isOpen) {
    return {
        type: TOOGLE_SEARCH_LIST,
        payload: {
            isOpen
        }
    }
}