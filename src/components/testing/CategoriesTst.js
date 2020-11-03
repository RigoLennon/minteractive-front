import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Alimentos from './AlimentosTst';
import Bebidas from './BebidasTst';

export default function MainCategoriesTest() {
    return (
        <Router>
            <Switch>
              <Route exact path="/alimentos" component={Alimentos} />
              <Route path="/bebidas" component={Bebidas} />
            </Switch>
        </Router>
      );
}
