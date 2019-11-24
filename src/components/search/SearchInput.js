import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchVideos, toggleSearchList } from './../../actionCreators';

export default function SearchInput () {
    let [searchString, setSearchString] = useState('');
    let searchStringState = useSelector(state => state.searchString);
    let isSearchListOpened = useSelector(state => state.isSearchListOpened);

    useEffect(() => {
        setSearchString(searchStringState);
    }, [searchStringState]);

    const dispatch = useDispatch();
    const processFetchVideos = (searchString) => dispatch(fetchSearchVideos(searchString));

    const onChange = (event) => {
        setSearchString(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const trimString = searchString.trim();
        if (!trimString.length) return;

        setSearchString(trimString);
        processFetchVideos(trimString);

        if (!isSearchListOpened) dispatch(toggleSearchList(true));
    };

    const onFocus = (ev) => {
        if (searchString && searchStringState) dispatch(toggleSearchList(true));
    };

    return (
        <form className="search__form"
            onSubmit={onSubmit}
        >
            <input
                type="text"
                placeholder="Search"
                name="search"
                value={searchString}
                className="search__input"
                onChange={onChange}
                onFocus={onFocus}
            />
        </form>
    );
}