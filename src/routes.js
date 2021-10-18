import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import MainLayout from './hoc/mainLayout';
import Contact from './components/contact';
import PostComponent from './components/post';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <MainLayout>
            <Switch>
                <Route path="/article/:id" component={PostComponent} /> 
                <Route path="/contact" component={Contact} />   
                <Route path="/" component={Home} />
            </Switch>
        </MainLayout>
    </BrowserRouter>
)

export default Routes; 