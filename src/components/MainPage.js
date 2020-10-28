import React, { useState, useEffect } from 'react';

//import ListProducts from './ListProducts';
import MainAppBar from './AppBar';
import MainCategories from './Categories';

import { Container } from '@material-ui/core';

export default function MainPage(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://mas.diagonal-software.com/api/products/')
        .then(res => res.json())
        .then(product => {
            //console.log(product);
            setProducts(product);
        });
    }, []);

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
                <MainCategories />
                {/*<ListProducts dataProducts={products}/>*/}
            </Container>
        </div>
    )
}