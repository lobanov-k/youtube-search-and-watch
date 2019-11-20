import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { requestSearchAction, fetchSearchVideos } from './../../actionCreators';

export default function() {
    let [searchString, setSearchString] = useState('');
    const dispatch = useDispatch();
    const processSearch = (searchString) => dispatch(requestSearchAction(searchString));
    const processFetchVideos = (searchString) => dispatch(fetchSearchVideos(searchString));

    const onChange = (event) => {
        setSearchString(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (searchString.trim() === '') return;
        processSearch({searchString});
        setSearchString(searchString);
        processFetchVideos(searchString);
    }

    return (
        <form className="search__form"
            onSubmit={onSubmit}>
            <input
                type="text"
                name="search"
                value={searchString}
                className="search__input"
                onChange={onChange}
            />
        </form>
    );
}