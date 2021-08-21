import React from 'react';
import { VideoJourneyTitle } from './VideoJourneyTitle/VideoJorneyTitle';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import './videoJourney.scss';

const styles ={
    playerSize: {
        width: '100%',
        height: '100%'
    },

    playerSmallSize: {
        width: '33%',
        height: '33%'
    }
}

export const VideoJourney = () => {
    return (
        <div className="video-journey" id="video-journey">
            <div className="wrapper">
                <VideoJourneyTitle/>
                <div className="video-journey__wrapper">
                    <VideoPlayer size={styles.playerSize}/>
                </div>
            </div>
        </div>
    )
}