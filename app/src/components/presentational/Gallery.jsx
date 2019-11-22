import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setGalleryType, setImg, addFavImg, removeFavImg } from '../../redux/actions';
import ImgCard from '../reactComponents/ImgCard';
import M from '../../messages/messages';

class Gallery extends React.Component {

    static propTypes = {
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        galleryDescription: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        };
    }

    /**
     * Functionality to get Gallery description related to Gallery type
     */
    onMoreClick = (img) => {
        this.props.setImg(img);
        this.setState({
            isRedirect: true
        });
    }

    /**
     * Functionality when user clicks on image card's more button
     */
    onMoreClick = (img) => {
        this.props.setImg(img);
        this.setState({
            isRedirect: true
        });
    }

    /**
     * Functionality when user add/remove image on/from favorite list
     */
    onFavoriteClick = (id) => {
        const isFav = this.props.favIds.includes(id);
        isFav ? this.props.removeFavImg(this.props.favIds.indexOf(id)) : this.props.addFavImg(id);
    }

    /**
     * Check if image is added on favorite images list or not
     */
    isImgFavorite = (id) => {
        return this.props.favIds.includes(id);
    }

    render() {
        const { title, galleryDescription, images, selectedImg } = this.props;
        return this.state.isRedirect ?
            <Redirect to={`/details/${selectedImg.name}`} /> :
            <div className='galleryContainer'>
                <div className='galleryTitle'>
                    <span>{title}</span>
                </div>
                <div className='galleryDesc'>
                    <span>{ images.length === 0 ? M.noData : galleryDescription }</span>
                </div>
                <div className='imgCardsContainer'>
                    {images.map(img =>
                        <ImgCard
                            key={img.id}
                            imgSrc={img.src}
                            imgName={img.name}
                            isFav={this.isImgFavorite(img.id)}
                            onMoreClick={() => this.onMoreClick(img)}
                            onFavoriteClick={() => this.onFavoriteClick(img.id)}
                        />
                    )}
                </div>
            </div>;
    }
}

const mapStateToProps = state => {
    const { favIds, selectedImg } = state.data;
    return {
        favIds,
        selectedImg
    };
};

export default withRouter(connect(
    mapStateToProps,
    { setGalleryType, setImg, addFavImg, removeFavImg }
)(Gallery));