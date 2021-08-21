import React, {Component} from 'react';
import Title from '../Title/Title';
import './card.scss';

export default class Card extends Component {
    styles = {
        imgPath: {
            width: '440px',
            height: '285px',
            marginBottom: '25px',
        }
    }

    render() {
        const {title} = this.props.card;
        const sourceImg = `img/virtual-tour/lg/${this.props.card.url}`;

        return (
            <div className="card__inner">
                {/* <div className={css(this.styles.imgPath)}></div> */}
                <img className="responsive" src={sourceImg} alt={title}/>
                <Title 
                    label={title} 
                    color={"#9D8665"}
                    underlined={true} 
                    thickLine={'3px'}
                    width={'300px'}
                    fontSize={'40px'}/>
                <div className="card__title">360 Street View</div>
                <div className="card__subtitle">Google street Panorama view</div>
            </div>
        )
    }
}
