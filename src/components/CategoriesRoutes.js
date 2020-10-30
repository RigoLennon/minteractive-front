import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Alimentos from './testing/AlimentosTst';
import Bebidas from './testing/BebidasTst';
import MainCategories from './Categories';

export default function CategoriesRoutes() {    
      return (
        <main>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainCategories} />
                    <Route path="/alimentos" component={Alimentos} />
                    <Route path="/bebidas" component={Bebidas} />
                </Switch>
            </Router>
        </main>
      );
}
