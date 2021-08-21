import React, { Component } from 'react';
import Title from '../Title/Title';
import AllCards from '../Card/AllCards'; 
import './virtualTour.scss';

export default class VirtualTour extends Component {

    render() {
        return (
            <main className="visiting" id="visiting">
                <div className="wrapper">
                    <Title
                        label={"Virtual Tour"}
                        color={"#9D8665"}
                        underlined={true}/>
                    <AllCards/>
                </div>
            </main>
        )
    }
}