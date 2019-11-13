import React from 'react';

import { Card, CardColumns, Button } from 'react-bootstrap';
import Icon from '@mdi/react'
import { mdiChevronRight } from '@mdi/js';


import M from '../../Messages/messages';

class Gallery extends React.Component {
    render() {
        return (
            <div className='galleryContainer'>
                <div className='galleryTitle'>
                    <span>Title</span>
                </div>
                <div className='imgCardsContainer'>
                    <div className='imgCard'>
                        <img src="/app/images/19.jpg"/>
                        <div className='imgDesc'></div>
                        <button className='imgMore'>
                            <span className='moreText'>{M.more}</span>
                            <Icon
                                path={mdiChevronRight}
                                size={1}
                                color="red" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;