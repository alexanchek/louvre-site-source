import React from 'react';
import './logo.scss';
import background from './logo.svg';

const styles = {
    logo: {
        marginRight: '20px'
    },
    text: {
        fontFamily: 'Forum',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '28px',
        lineHeight: '50px',
        letterSpacing: '5px',
        textTransform: 'uppercase',
        color: '#FFFFFF'
    }
}

export const Logo = () => {
    return (
        <div className="logo">
            <div className="logo__box">
                <img style={styles.logo} src={background} alt="background"/>
                <div style={styles.text}>LOUVRE</div>
            </div>
        </div>
    )
}