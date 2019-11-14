import React from 'react';

import ImgCard from '../reactComponents/ImgCard';
import M from '../../Messages/messages';

class Gallery extends React.Component {
    render() {
        return (
            <div className='galleryContainer'>
                <div className='galleryTitle'>
                    <span>Title</span>
                </div>
                <div className='imgCardsContainer'>
                    {/* <ImgCard imgSrc={} imgDesc={}/> */}
                    <ImgCard />
                    <ImgCard />
                    <ImgCard />
                </div>
            </div>
        )
    }
}

export default Gallery;