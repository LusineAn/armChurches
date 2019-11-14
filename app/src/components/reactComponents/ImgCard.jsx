import React from 'react';

import Icon from '@mdi/react'
import { mdiChevronDoubleRight } from '@mdi/js';

import M from '../../Messages/messages';

class ImgCard extends React.Component {
    render() {
        return (
            <div className='imgCard'>
                <div className='cardLeft'>
                    <img src="/app/images/19.jpg" />
                </div>
                <div className='cardRight'>
                    <div className='imgDesc'>This is the image short description</div>
                    <button className='moreButton'>
                        <span className='moreText'>{M.more}</span>
                        <Icon
                            path={mdiChevronDoubleRight}
                            size={1}
                            color="darkorchid" />
                    </button>
                </div>
            </div>
        )
    }
}

export default ImgCard;