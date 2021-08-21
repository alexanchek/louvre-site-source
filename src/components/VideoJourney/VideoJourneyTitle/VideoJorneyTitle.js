import React from 'react';
import Title from '../../Title/Title';

export const VideoJourneyTitle = () => {
    return (
        <div className="video-journey__title">
            <Title 
                label={"Video Journey"} 
                color={"#9D8665"}
                underlined={false}/>
            <div className="video-journey__text">Enter and visit one of the most famous museums in the world and enjoy masterpieces such as Mona Lisa or Hammurabi's Code</div>
        </div>
    )
}