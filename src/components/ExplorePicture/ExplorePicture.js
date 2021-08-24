import React from "react";
import { ExplorePictureLeft } from "./ExplorePictureLeft/ExplorePictureLeft";
import { ExplorePictureRight } from "./ExplorePictureRight/explorePictureRight";
import './explorePicture.scss';

export const ExplorePicture = () => {
    return (
        <div className="explore-picture" id="picture-explore">
            <div id="explore-picture-link" className="scroll-link explore-picture"></div>
            <div className="wrapper">
                <div className="explore-picture__wrapper">
                    <ExplorePictureLeft/>
                    <ExplorePictureRight/>
                </div>
            </div>
        </div>
    )
}