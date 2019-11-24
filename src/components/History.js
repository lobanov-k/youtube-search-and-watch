import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeVideoFromHistory, setCurrentVideo, toggleSearchList } from '../actionCreators';

export default function History() {
    const dispatch = useDispatch();
    let history = useSelector(state => state.history);
    let isSearchListOpened = useSelector(state => state.isSearchListOpened);

    return (
        <div className="history">
            {history.map((item, index) => {
                const { snippet: {thumbnails, title} } = item;

                return (
                    <div key={index} className="history__item">
                        <p className="history__item-text"
                            onClick={() => {
                                dispatch(setCurrentVideo({...item, isFromHistory: true}));
                                if (isSearchListOpened) dispatch(toggleSearchList(false));
                            }}
                        >
                            {title}
                        </p>
                        <span 
                            className="history__item-delete"
                            onClick={() => dispatch(removeVideoFromHistory(index))}>
                            delete
                        </span>
                    </div>
                );
            })}
        </div>
    );
}