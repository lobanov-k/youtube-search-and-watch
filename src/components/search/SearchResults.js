import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentVideo } from '../../actionCreators';
import PropTypes from 'prop-types';

export default function() {
    const dispatch = useDispatch();

    const searchResult = useSelector(state => state.searchResult);

    if (searchResult.isFetching) {
        return <div>loading</div>
    }

    return (
        <div>
            {
                searchResult.items.map(item => {
                    const {id: {videoId}, snippet: {thumbnails, title} } = item;

                    return (
                        <div key={videoId} className="videoList__item"
                            onClick={() => dispatch(setCurrentVideo(item))}>
                            <img className="videosList__thumbnail"
                                src={thumbnails.medium.url}
                             />
                            <p>{title}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}
