import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiChevronDoubleRight } from '@mdi/js';

import M from '../../messages/messages';

class ImgCard extends React.Component {

    static propTypes = {
        imgSrc: PropTypes.string.isRequired,
        imgName: PropTypes.string.isRequired,
        onMoreClick: PropTypes.func.isRequired,
        onFavoriteClick: PropTypes.func.isRequired,
        isFav: PropTypes.bool.isRequired
    }

    onMoreClick = () => {
        if (this.props.onMoreClick) {
            this.props.onMoreClick();
        }
    }

    onFavoriteClick = () => {
        if (this.props.onFavoriteClick) {
            this.props.onFavoriteClick();
        }
    }

    render() {
        return (
            <div className='imgCard'>
                <div className='cardBody'>
                    <div className='cardLeft'>
                        <img src={this.props.imgSrc} />
                    </div>
                    <div className='cardRight'>
                        <div className='imgName'>{this.props.imgName}</div>
                        <button className='moreButton' onClick={this.onMoreClick}>
                            <span className='moreText'>{M.more}</span>
                            <Icon
                                path={mdiChevronDoubleRight}
                                size={1}
                                color='#900'
                            />
                        </button>
                    </div>
                </div>
                <div className='cardFooter'>
                    <Button
                        className={'favButton ' + (this.props.isFav ? 'removeFav' : 'addFav')}
                        onClick={this.onFavoriteClick} >
                        {this.props.isFav ? M.removeFavorite : M.addFavorite}
                    </Button>
                </div>
            </div>
        );
    }
}

export default ImgCard;