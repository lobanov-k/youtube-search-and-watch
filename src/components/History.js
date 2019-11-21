import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeVideoFromHistory, setCurrentVideo } from '../actionCreators';

export default function() {
    const dispatch = useDispatch();
    let history = useSelector(state => state.history);

    return (
        <div className="history">
            {history.map((item, index) => {
                const {id: {videoId}, snippet: {thumbnails, title} } = item;

                return (
                    <div key={index} className="history__item">
                        <p className="history__item-text"
                            onClick={() => dispatch(setCurrentVideo(Object.assign({}, item, {isFromHistory: true})))}>
                            {title}
                        </p>
                        <span 
                            className="history__item-delete"
                            onClick={() => dispatch(removeVideoFromHistory(index))}>
                            X
                        </span>
                    </div>
                );
            })}
        </div>
    );
}