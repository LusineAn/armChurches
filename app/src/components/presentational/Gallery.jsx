import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

import ImgCard from '../reactComponents/ImgCard';

class Gallery extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        galleryDescription: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired,
        history: PropTypes.any
    }

    onMoreClick = (img) => {
        this.props.history.push(`/details/${img.name}`);
        // this.props.goToDetails(img);
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
                    {this.props.images.map(img =>
                        <ImgCard
                            key={img.name}
                            imgSrc={img.src}
                            imgName={img.name}
                            onMoreClick={() => this.onMoreClick(img)} />
                    )}
                </div>
            </div>
        )
    }
}

export default withRouter(Gallery);
// export default connect(
//     null,
//     { goToDetails }
//   )(Gallery);