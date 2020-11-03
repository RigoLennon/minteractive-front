import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';

import MainAppBar from './AppBar';
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
                <CategoriesRoutes />
            </Container>
        </div>
    )
}