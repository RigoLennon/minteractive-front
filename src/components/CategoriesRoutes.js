import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainCategories from './Categories';
import ListProducts from './ListProducts';

export default function CategoriesRoutes(props) {   

    return (
        <main>
            <Router>
                <Switch>
                    <Route exact path="/:id" component={MainCategories} />
                    <Route path="/products/:id" children={<ListProducts />} />
                </Switch>
            </Router>
        </main>
    );
}
