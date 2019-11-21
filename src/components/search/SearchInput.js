import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchVideos, toogleSearchList } from './../../actionCreators';

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
    }

    const onInputClick = () => {
        if (searchStringState && !isSearchListOpened) {
            dispatch(toogleSearchList());
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (searchString.trim() === '') return;

        setSearchString(searchString);
        processFetchVideos(searchString);

        if (!isSearchListOpened) dispatch(toogleSearchList());
    }

    return (
        <form className="search__form"
            onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search"
                name="search"
                value={searchString}
                className="search__input"
                onChange={onChange}
                onClick={onInputClick}
            />
        </form>
    );
}