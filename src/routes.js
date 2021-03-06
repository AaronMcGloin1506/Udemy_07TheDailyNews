import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route to="/" component={Home} />
        </Switch>
    </BrowserRouter>
)

export default Routes;