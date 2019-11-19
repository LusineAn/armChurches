import React from 'react';
import PropTypes from 'prop-types';

import M from '../../Messages/messages';

class Details extends React.Component {

    static propTypes = {
        imgTitle: PropTypes.string.isRequired,
        imgDescription: PropTypes.string.isRequired,
        imgPath: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="detailsContainer">
                <div className='imgTitle'>
                    <span>{this.props.imgTitle}</span>
                </div>
                <div className='imgDesc'>
                    <span>{this.props.imgDescription}</span>
                </div>
                <div className='imgContainer'>
                    <img src={this.props.imgPath} />
                </div>
            </div>
        )
    }
}

export default Details;