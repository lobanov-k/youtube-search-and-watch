import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVideoToHistory } from '../actionCreators';

export default function Player() {
    const dispatch = useDispatch();

    let videoData = useSelector(state => state.currentVideo);
    let [player, setPlayer] = useState(null);

    const onVideoReady = (event) => {
        event.target.playVideo();
    }

    const loadVideo = () => {
        let player = new window.YT.Player("player-iframe", {
            videoId: videoData.id.videoId,
            events: {
                'onReady': onVideoReady
            },
            playerVars: {
                'origin':'http://localhost:8080'
            }
        });
        setPlayer(player);
    }

    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';

            if (videoData) {
                window.onYouTubeIframeAPIReady = loadVideo;
            }

            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
            if (!videoData) return;

            if (!videoData.isFromHistory) dispatch(addVideoToHistory(videoData));
            if (!player) {
                loadVideo();
            } else {
                player.loadVideoById(videoData.id.videoId, 0, 'large');
            }
        }
    }, [videoData]);

    return <div width="100%" id="player-iframe" className="player__iframe"></div>;
}