import React from 'react';
import { StyleSheet, css } from "aphrodite";
import background from './monalisa.png';
import { MainBlockButton } from '../Buttons/mainBlockButton/MainBlockButton';
import MonaLisa from './monalisa1000.png';
import './mainBlock.scss';

const styles = StyleSheet.create({
    bgHeaderImg: {
        background: `url(${background})`,
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        height:'100%',

        '@media (max-width: 1370px)': {
            backgroundImage: 'none'
        }
    },
    bgSize: {
        height: '810px',
        '@media (max-width: 1370px)': {
            height: '100%'
        }
    }
})

export const MainBlock = () => {
    return (
        <div className="main-block" id="main-block">
            <div className={`wrapper ${css(styles.bgSize)}`}>
                <div className={css(styles.bgHeaderImg)}>
                    <div className="main-block__titles">
                        <h1 className="main-block__title">Welcome</h1>
                        <h1 className="main-block__title">to the louvre</h1>
                    </div>
                    <div className="main-block__subtitle">From the castle to the museum</div>
                    <MainBlockButton/>
                    <div className="mona-lisa">
                        <img src={MonaLisa} className="responsive" alt="mona-lisa"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}