import React from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

export default function() {
    return (
        <div className="search">
            <SearchInput/>
            <SearchResults/>
        </div>
    );
}