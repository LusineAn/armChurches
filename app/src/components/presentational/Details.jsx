import React from 'react';
import PropTypes from 'prop-types';

import M from '../../messages/messages';

class Details extends React.Component {

    static propTypes = {
        imgTitle: PropTypes.string.isRequired,
        imgDesc: PropTypes.string.isRequired,
        imgPath: PropTypes.string.isRequired
    }

    render() {
        // console.log('location: ', this.props.location);
        return (
            <div className="detailsContainer">
                <div className='imgTitle'>
                    <span>{this.props.imgTitle}</span>
                </div>
                <div className='imgDesc'>
                    <span>{this.props.imgDesc}</span>
                </div>
                <div className='imgContainer'>
                    <img src={this.props.imgPath} />
                </div>
            </div>
        )
    }
}

export default Details;