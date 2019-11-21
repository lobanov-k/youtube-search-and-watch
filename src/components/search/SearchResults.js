import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentVideo, toogleSearchList } from '../../actionCreators';
import Loader from '../Loader';

export default function SearchResults() {
    const dispatch = useDispatch();

    const searchResult = useSelector(state => state.searchResult);
    let isSearchListOpened = useSelector(state => state.isSearchListOpened);

    if (searchResult.isFetching) {
        return <Loader/>;
    }

    return (
        <div className={`search__results ${isSearchListOpened ? 'search__results--active' : ''}`}>
            {
                searchResult.items.map(item => {
                    const {id: {videoId}, snippet: {thumbnails, title} } = item;

                    return (
                        <div key={videoId} className="search__item">
                            <img className="search__item-thumbnail"
                                src={thumbnails.medium.url}
                             />
                            <p className="search__item-title">{title}</p>
                            <button className="search__item-play"
                                onClick={() => {
                                    dispatch(setCurrentVideo(item));
                                    dispatch(toogleSearchList());
                                }}
                            >
                                Play
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
}