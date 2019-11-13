import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/App.scss';

import AppNavbar from '../reactComponents/AppNavbar';
import Gallery from '../presentational/Gallery';
import Details from '../presentational/Details';
import HomePage from '../presentational/HomePage';
import Monasteries from '../presentational/Monasteries';
import History from '../presentational/History';
import { Container } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <Router>
                <AppNavbar />
                <Container className='homeContainer'>
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/gallery/monasteries" >
                            <Gallery />
                        </Route>
                        <Route path="/gallery/history">
                            <History />
                        </Route>
                        <Route path="/gallery/nature">
                            <div>This is the 4-th page</div>
                        </Route>
                    </Switch>
                </Container>
            </Router>
        )
    }
}

export default App;