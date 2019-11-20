import { REQUEST_SEARCH } from './constants';

export function requestSearchAction(searchString) {
    return {
        type: REQUEST_SEARCH,
        payload: {
            searchString
        }
    };
}


