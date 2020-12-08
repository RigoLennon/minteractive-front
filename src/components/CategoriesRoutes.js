import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainCategories from './Categories';
import ListProducts from './ListProducts';

export default function CategoriesRoutes(props) {

    return props.dataRestr.map((restr)=>{
        let rest_id = restr.id
        
        return (
        <main>
            <Router>
                <Switch>
                    <Route exact path="/:id">
                        <MainCategories id_rest={rest_id}/>
                    </Route>
                    <Route path="/products/:id" children={<ListProducts />} />
                </Switch>
                
            </Router>
        </main>
        );
    })
}
