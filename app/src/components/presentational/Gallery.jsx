import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import { setImg, addFavImg, removeFavImg } from "../../redux/actions";
import ImgCard from '../reactComponents/ImgCard';

class Gallery extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        galleryDescription: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        }
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
        return isFav ? this.props.removeFavImg(this.props.favIds.indexOf(id)) : this.props.addFavImg(id);
    }

/**
 * Check if image is added on favorite images list or not
 */
    isImgFavorite = (id) => {
        return this.props.favIds.includes(id);
    }

    render() {
        const { selectedImg } = this.props;

        return this.state.isRedirect ?
            <Redirect to={`/details/${selectedImg.name}`} /> :
            <div className='galleryContainer'>
                <div className='galleryTitle'>
                    <span>{this.props.title}</span>
                </div>
                <div className='galleryDesc'>
                    <span>{this.props.galleryDescription}</span>
                </div>
                <div className='imgCardsContainer'>
                    {this.props.images.map(img =>
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
            </div>
    }
}

const mapStateToProps = state => {
    const { selectedImg } = state;
    const { favIds } = state.favorits;
    return { 
        selectedImg,
        favIds
    };
}

export default withRouter(connect(
    mapStateToProps,
    { setImg, addFavImg, removeFavImg }
)(Gallery));