import React from 'react';
import PropTypes from 'prop-types';

import ImgCard from '../reactComponents/ImgCard';
import M from '../../Messages/messages';

class Gallery extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        galleryDescription: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        imgDesc: PropTypes.string.isRequired
    }

    onMoreClick = () => {
        console.log('AAAAAAAAAAAA');
    }

    render() {
        return (
            <div className='galleryContainer'>
                <div className='galleryTitle'>
                    <span>{this.props.title}</span>
                </div>
                <div className='galleryDesc'>
                    <span>{this.props.galleryDescription}</span>
                </div>
                <div className='imgCardsContainer'>
                    <ImgCard imgSrc={this.props.imgSrc} imgDesc={this.props.imgDesc} onMoreClick={this.onMoreClick}/>
                    <ImgCard imgSrc={this.props.imgSrc} imgDesc={this.props.imgDesc} onMoreClick={this.onMoreClick}/>
                    <ImgCard imgSrc={this.props.imgSrc} imgDesc={this.props.imgDesc} onMoreClick={this.onMoreClick}/>
                    <ImgCard imgSrc={this.props.imgSrc} imgDesc={this.props.imgDesc} onMoreClick={this.onMoreClick}/>
                    <ImgCard imgSrc={this.props.imgSrc} imgDesc={this.props.imgDesc} onMoreClick={this.onMoreClick}/>
                    <ImgCard imgSrc={this.props.imgSrc} imgDesc={this.props.imgDesc} onMoreClick={this.onMoreClick}/>
                    <ImgCard imgSrc={this.props.imgSrc} imgDesc={this.props.imgDesc} onMoreClick={this.onMoreClick}/>
                    <ImgCard imgSrc={this.props.imgSrc} imgDesc={this.props.imgDesc} onMoreClick={this.onMoreClick}/>
                    <ImgCard imgSrc={this.props.imgSrc} imgDesc={this.props.imgDesc} onMoreClick={this.onMoreClick}/>
                </div>
            </div>
        )
    }
}

export default Gallery;