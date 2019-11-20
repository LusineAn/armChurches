import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/App.scss';

import AppNavbar from '../reactComponents/AppNavbar';
import Gallery from '../presentational/Gallery';
import Details from '../presentational/Details';
import HomePage from '../presentational/HomePage';
import { Container } from 'react-bootstrap';

import { getImages } from '../../data';
import M from '../../Messages/messages'

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="appContainer">
                    <AppNavbar />
                    <Container className='homeContainer'>
                        <Switch>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            <Route path="/gallery/monasteries">
                                <Gallery
                                    title='Monasteries and Churches'
                                    galleryDescription={M.monasteryDesc}
                                    images={getImages('monastery')}
                                />
                            </Route>
                            <Route path="/gallery/history">
                                <Gallery
                                    title='History'
                                    galleryDescription={M.historyDesc}
                                    images={getImages('history')}
                                />
                            </Route>
                            <Route path="/gallery/nature">
                                <Gallery
                                    title='Nature'
                                    galleryDescription={M.natureDesc}
                                    images={getImages('nature')}
                                />
                            </Route>
                            <Route path="/details">
                                <Details />
                            </Route>
                        </Switch>
                    </Container>
                </div>
            </Router>
        )
    }
}

export default App;