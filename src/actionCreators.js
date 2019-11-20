import fetch from 'isomorphic-fetch';
import { REQUEST_SEARCH, REQUEST_SEARCH_FAILURE,
    RECEIVE_VIDEOS, SET_CURRENT_VIDEO } from './constants';
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