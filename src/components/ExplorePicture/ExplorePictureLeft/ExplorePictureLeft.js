import React from "react";
import Title from "../../Title/Title";
import './explorePictureLeft.scss';

export const ExplorePictureLeft = () => {
    return (
        <div className="explore-picture__left" style={{width: '600px'}}>
            <Title 
                label={"Picture Explore"} 
                color={"white"}
                underlined={false} 
                width={'100%'}
                marginFromLine={'75px'}/>

                <div className="explore-picture__text">Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age.</div>
                <div className="explore-picture__text">It was cleaned in 1984 to remove a "yellow veil" of dust that had gathered since the previous restoration in the 19th century.</div>
                <div className="explore-picture__text">The cleaning provoked furious protests, not because the picture had been damaged in any way, but because it looked different.</div>
        </div>
    )
}