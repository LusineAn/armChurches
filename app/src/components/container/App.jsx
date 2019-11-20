import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/stylesheets/App.scss';

import Routes from '../../routes/Routes';
import AppNavbar from '../reactComponents/AppNavbar';
import Gallery from '../presentational/Gallery';
import Details from '../presentational/Details';
import HomePage from '../presentational/HomePage';
import { Container } from 'react-bootstrap';

import { getImages } from '../../data';
import M from '../../messages/messages'

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
                            {Routes.map((route, index) =>
                                <Route
                                    key={index}
                                    path={route.path}
                                    render={() => <route.component {...route.props} images={getImages(route.props.type)} /> }
                                />
                            )}
                            <Route path="/details"
                                render={(location) => <Details location={location} />}
                            />
                        </Switch>
                    </Container>
                </div>
            </Router>
        )
    }
}

export default App;