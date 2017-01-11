import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store from './store'

// Layouts
import App from './components/App/'
import Header from './components/Header/'
import SideBar from './components/SideBar/'
import Home from './components/Home/'
import Users from './components/Users/'
import Counter from './components/Counter/'
import Visit from './components/Visit/'


export default (
<Provider store={store}>
    <Router history={browserHistory}>

        <Route path="/" component={App}>
            <IndexRoute components={{header: Header, sidebar: SideBar, home: Home}} />
            <Route path="/users" components={{header: Header, sidebar: SideBar, users: Users}} />
            <Route path="/counter" components={{header: Header, sidebar: SideBar, counter: Counter}} />
            <Route path="/visit" components={{header: Header, sidebar: SideBar, visit: Visit}} />
        </Route>

    </Router>
</Provider>
);
