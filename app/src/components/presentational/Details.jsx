import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Details extends React.Component {

    static propTypes = {
        imgTitle: PropTypes.string,
        imgDesc: PropTypes.string,
        imgPath: PropTypes.string
    }

    render() {
        const { selectedImg } = this.props;

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
        );
    }
}
const mapStateToProps = (state) => {
    const { selectedImg } = state.data;
    return { selectedImg };
};

export default withRouter(connect(mapStateToProps)(Details));