import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import MainAppBar from './AppBar';
import MainCategories from './Categories';
import CategoriesRoutes from './CategoriesRoutes';

export default function MainPage(){

    const [restaurant, setRestaurant] = useState([]);

    useEffect(() =>{
        fetch('http://mas.diagonal-software.com/api/restaurants/')
        .then(res => res.json())
        .then(restr => {
            //console.log(restr)
            setRestaurant(restr);
        });
    }, []);

    return(
        <div>
            <MainAppBar dataRestr={restaurant}/>
            <Container maxWidth='xl'>
                {/*<Router>
                    <Switch>
                        <Route exact path="/" component={MainCategories} />
                    </Switch>
                </Router>*/}
                {/*<MainCategories />*/}
                <CategoriesRoutes />
            </Container>
        </div>
    )
}