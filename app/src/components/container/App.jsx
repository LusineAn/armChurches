import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/stylesheets/App.scss';

import { setAllImages } from '../../redux/actions';
import Routes from '../../routes/Routes';
import AppNavbar from '../reactComponents/AppNavbar';
import Details from '../presentational/Details';
import HomePage from '../presentational/HomePage';
import { Container } from 'react-bootstrap';
import { getAllImages } from '../../data';
import M from '../../messages/messages';

class App extends React.Component {

    componentDidMount() {
        //Fetch data from db and save in redux store
        const allImgs = getAllImages();
        this.props.setAllImages(allImgs);
    }

    getGalleryImages(galleryType) {
        let galleryImages = this.props.allImages.filter((img) => img.type === galleryType);
        let favoriteImages = this.props.allImages.filter((img) => this.props.favIds.includes(img.id));
        return galleryType === M.favorite ? favoriteImages : galleryImages;
    }

    render() {
        return (
            <Router>
                <div className='appContainer'>
                    <AppNavbar />
                    <Container className='homeContainer'>
                        <Switch>
                            <Route exact path='/'>
                                <HomePage />
                            </Route>
                            {Routes.map((route, index) =>
                                <Route
                                    key={index}
                                    path={route.path}
                                    render={() => <route.component
                                        {...route.props}
                                        images={this.getGalleryImages(route.props.type)}
                                    />}
                                />
                            )}
                            <Route path='/details'
                                render={() => <Details />}
                            />
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    const { allImages, favIds } = state.data;
    return {
        allImages,
        favIds
    };
};

export default connect(mapStateToProps, { setAllImages })(App);