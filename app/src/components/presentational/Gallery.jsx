import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom'

import ImgCard from '../reactComponents/ImgCard';

class Gallery extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        galleryDescription: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        console.log('aaaaa:', this.props);
        this.state = {
            isRedirect: false,
            selectedImg: null
        }
    }

    onMoreClick = (img) => {
        this.setState({
            isRedirect: true,
            selectedImg: img
        })
        // this.props.history.push(`/details/${img.name}`);
    }

    goToDetails = () => {
        console.log('HI!!!!!!!');
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

export default withRouter(Gallery);
// export default withRouter(connect(
//     null,
//     { goToDetails }
// )(Gallery));