import React from 'react';
import PropTypes from 'prop-types';

import ImgCard from '../reactComponents/ImgCard';
import M from '../../Messages/messages';

class Gallery extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        galleryDescription: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired
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
                    {this.props.images.map((img, index) =>
                        <ImgCard
                            key={img.desc}
                            imgSrc={img.src}
                            imgShortDesc={img.shortDesc}
                            onMoreClick={this.onMoreClick} />
                    )}
                </div>
            </div>
        )
    }
}

export default Gallery;