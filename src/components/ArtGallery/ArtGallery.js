import React from 'react';
import Title from '../Title/Title';
import Slides from './Slides/Slides';
import './artgallery.scss';

export const ArtGallery = () => {
    return (
        <div className="art-gallery" id="gallery">
            <div id="art-gallery-link" className="scroll-link art-gallery"></div>
            <div className="wrapper">
                <Title 
                    label={"Picture Explore"} 
                    color={"white"}
                    underlined={false} 
                    width={'100%'}
                    marginFromLine={'75px'}/>
                <Slides/>
            </div>
        </div>
    )
}