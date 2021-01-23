import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './layouts/Nav';
import Home from './layouts/Home'
import Favourites from './layouts/Favourites'
import ReadLater from './layouts/ReadLater'
import Details from './layouts/Details'
import Footer from './layouts/Footer'

const Routes = () => {
    return (
        < Router >
            <Nav />
            <Switch>
                <Route path='/blog/:slug' exact component={Details} />
                <Route path='/Favourites' exact component={Favourites} />
                <Route path='/ReadLater' exact component={ReadLater} />
                <Route path='/' exact component={Home} />
            </Switch>
            <Footer />

        </Router >

    );
}
export default Routes