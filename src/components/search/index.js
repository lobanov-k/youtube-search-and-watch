import React from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

export default function() {
    return (
        <React.Fragment>
            <SearchInput/>
            <SearchResults/>
        </React.Fragment>
    );
}