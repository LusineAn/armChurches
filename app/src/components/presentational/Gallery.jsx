import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import { setSelectedImg } from "../../redux/actions";
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
            isRedirect: false,
            selectedImg: null
        }
    }

    onMoreClick = (img) => {
        this.props.setSelectedImg(img);
        this.setState({
            isRedirect: true,
            selectedImg: img
        });
    }

    render() {
        return this.state.isRedirect ?
            <Redirect to={`/details/${this.state.selectedImg.name}`} /> :
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
                            key={img.name}
                            imgSrc={img.src}
                            imgName={img.name}
                            onMoreClick={() => this.onMoreClick(img)} />
                    )}
                </div>
            </div>;
    }
}

export default withRouter(connect(
    null,
    { setSelectedImg }
)(Gallery));