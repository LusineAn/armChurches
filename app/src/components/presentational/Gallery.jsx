import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import { setImg } from "../../redux/actions";
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

    onMoreClick = (img) => {
        this.props.setImg(img);
        this.setState({
            isRedirect: true
        });
    }

    render() {
        const selectedImg = this.props.selectedImg;

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
                            key={img.name}
                            imgSrc={img.src}
                            imgName={img.name}
                            onMoreClick={() => this.onMoreClick(img)} />
                    )}
                </div>
            </div>;
    }
}

const mapStateToProps = state => {
    return { selectedImg: state.selectedImg };
}

export default withRouter(connect(
    mapStateToProps,
    { setImg }
)(Gallery));