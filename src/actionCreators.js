import fetch from 'isomorphic-fetch';
import { REQUEST_SEARCH, REQUEST_SEARCH_SUCCESS,
    REQUEST_SEARCH_FAILURE, RECEIVE_VIDEOS } from './constants';
import getRequestString from './utils';

export function requestSearchAction(searchString) {
    return {
        type: REQUEST_SEARCH,
        payload: {
            searchString
        }
    };
}

export function recieveVideos(json) {
    return {
        type: RECEIVE_VIDEOS,
        payload: {
            json
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
            .then(json => {
                dispatch(recieveVideos(json));
            }).catch((error) => {
                dispatch(recieveVideos(error));
            });
    }
}

