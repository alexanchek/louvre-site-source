import React from "react";
import ReactPlayer from 'react-player';
import './videoPlayer.scss';

const VideoPlayer = ({size}) => {
    return (
        <div className="player-wrapper">
            <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=6vuFh6NNa70"
                width={size.width}
                height={size.height}/>
        </div>
    )
}

export default VideoPlayer;