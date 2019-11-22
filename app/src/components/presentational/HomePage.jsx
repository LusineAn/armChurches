import React from 'react';

import SimpleSlider from '../reactComponents/SimpleSlider';
import M from '../../messages/messages';

class HomePage extends React.Component {
    render() {
        return (
            <div className="homePage">
                <div className='pageDescription'>
                    <div>
                        {M.homeDescription}
                    </div>
                    <div className='welcomeMsg'>
                        {M.welcomeMsg}
                    </div>
                </div>
                <SimpleSlider />
                <div className="footer">
                    {M.footerMsg}
                </div>
            </div>
        );
    }
}

export default HomePage;