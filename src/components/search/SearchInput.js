import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSearchVideos } from './../../actionCreators';

export default function() {
    let [searchString, setSearchString] = useState('');
    let searchStringState = useSelector(state => state.searchString);

    useEffect(() => {
        setSearchString(searchStringState);
    }, [searchStringState]);

    const dispatch = useDispatch();
    const processFetchVideos = (searchString) => dispatch(fetchSearchVideos(searchString));

    const onChange = (event) => {
        setSearchString(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (searchString.trim() === '') return;

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