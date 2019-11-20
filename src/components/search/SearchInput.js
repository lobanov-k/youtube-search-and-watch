import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { processSearchAction } from './../../actionCreators';

export default function() {
    let [searchString, setSearchString] = useState('');
    const dispatch = useDispatch();
    const processSearch = (searchString) => dispatch(processSearchAction(searchString));

    const onChange = (event) => {
        setSearchString(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (searchString.trim() === '') return;
        processSearch({searchString});
        setSearchString(searchString);
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