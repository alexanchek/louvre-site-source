import React, { Component } from 'react';
import SlidesJSON from './slides.json';
import './slides.scss';

export default class Slides extends Component {
    renderImages(index = 1) {
        const currentImages = SlidesJSON[index-1][`column${index}`];
        return (
            <div className="image-mosaic">
                {currentImages.map((image) => {
                    return (
                        <div 
                        key={image.id} 
                        className={image.style}
                        style={{backgroundImage: `url(img/artgallery/lg/${image.url})`}}></div>
                    )
                })}
            </div>
        )
    }


    render() {
        return (
            <div>
                {this.renderImages()}
            </div>
        )
    }
}