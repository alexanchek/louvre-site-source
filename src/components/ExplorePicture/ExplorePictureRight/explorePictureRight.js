import React from "react";
import LeftImage from './image_right.png';
import './explorePictureRight.scss';

export const ExplorePictureRight = () => {
    return (
        <div className="explore-picture__right">
            <div className="explore-picture__img">
                <img src={LeftImage} alt="left" className="responsive"/>
            </div>
        </div>
    )
}