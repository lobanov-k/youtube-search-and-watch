import React from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

export default function Search() {
    return (
        <div className="search">
            <SearchInput/>
            <SearchResults/>
        </div>
    );
}