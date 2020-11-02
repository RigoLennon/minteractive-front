import React, { useState, useEffect, useParams } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MainCategories from './Categories';
import ListProducts from './ListProducts';

/* TESTING */
import Alimentos from './testing/AlimentosTst';
import Bebidas from './testing/BebidasTst';
import setCatId from './Categories';

export default function CategoriesRoutes(props) {   

    let catid = props.setCatId;
    console.log(catid)

    return (
        <main>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainCategories} />
                    <Route path="/products/" children={<ListProducts dataCat={catid}/>} />
                </Switch>
            </Router>
        </main>
    );
}
