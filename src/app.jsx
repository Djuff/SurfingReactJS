import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import FullComponentsHome from './app/layouts/FullComponentsHome';
import FullComponentsAbout from './app/layouts/FullComponentsAbout';
import FullComponentsSurfboard from './app/layouts/FullComponentsSurfboard';
import FullComponentsDivingAmmunition from './app/layouts/FullComponentsDivingAmmunition';
import FullComponentsCommits from './app/layouts/FullComponentsComments';
import PageNotFound from './app/layouts/PageNotFound';

import { Provider } from 'react-redux';
import store from './app/stores/commentStore';

const body = document.getElementById('allHTML');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/">
                <IndexRoute component={FullComponentsHome}/>
                <Route path="about" component={FullComponentsAbout}/>
                <Route path="surfboard" component={FullComponentsSurfboard}/>
                <Route path="diving_ammunition" component={FullComponentsDivingAmmunition}/>
                <Route path="comments" component={FullComponentsCommits}/>
                <Route path="*" component={PageNotFound}/>
            </Route>
        </Router>
    </Provider>,
    body);