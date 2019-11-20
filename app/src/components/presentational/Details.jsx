import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import { getSelectedImg } from '../../redux/selectors';

import M from '../../messages/messages';

class Details extends React.Component {

    static propTypes = {
        imgTitle: PropTypes.string,
        imgDesc: PropTypes.string,
        imgPath: PropTypes.string
    }

    constructor(props) {
        super(props);
        console.log('content88: ', this.props.selectedImg);
    }

    render() {
        const selectedImg = this.props.selectedImg
        return (
            <div className="detailsContainer">
                <div className='imgTitle'>
                    <span>{selectedImg.name}</span>
                </div>
                <div className='imgDesc'>
                    <span>{selectedImg.desc}</span>
                </div>
                <div className='imgContainer'>
                    <img src={selectedImg.src} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const { selectedImg } = state.setSelectedImg;
    return {selectedImg};
};

export default withRouter(connect(mapStateToProps)(Details));

// export default Details;