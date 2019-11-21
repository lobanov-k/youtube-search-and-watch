import {combineReducers} from 'redux';

import currentVideo from './currentVideo';
import searchResult from './searchResult';
import searchString from './searchString';
import history from './history';
import isSearchListOpened from './isSearchListOpened';

export default combineReducers({
    currentVideo,
    searchResult,
    searchString,
    history,
    isSearchListOpened
});