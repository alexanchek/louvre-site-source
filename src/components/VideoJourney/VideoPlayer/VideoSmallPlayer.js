import React from "react";
import './videoSmallPlayer.scss';

const YoutubeEmbed = ({ embedId }) => (
    <div className="video__box">
        <div className="video-responsive">
            <iframe
            width="452"
            height="254"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </div>
    </div>
);

export default YoutubeEmbed;