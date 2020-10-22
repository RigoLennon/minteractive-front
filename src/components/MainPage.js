import React, { useState, useEffect } from 'react';

//import Child from './testing/Child'; //Testing
import ListProducts from './ListProducts';
import MainAppBar from './AppBar';
import TestingFunc from './MainPageFunc';//Testing
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
            console.log(restr)
            setRestaurant(restr);
        });
    }, []);

    return(
        <div>
            <MainAppBar dataRestr={restaurant}/>
            <Container maxWidth='xl'>
                <ListProducts dataProducts={products}/>
            </Container>
        </div>
    )
}

/*export default class MainPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            products: [],
            restaurant: [],
        };
        this.getProd = this.getProd.bind(this);
        this.getRestau = this.getRestau.bind(this);
    }

    componentDidMount() {
        this.getProd()
        this.getRestau()
    }

    getProd(){
        fetch('http://mas.diagonal-software.com/api/products/')
        .then(res => res.json())
        .then((data) => {
            this.setState({products:data});
        });
    }

    getRestau(){
        fetch('http://mas.diagonal-software.com/api/restaurants/')
        .then(res => res.json())
        .then((data) => {
            this.setState({restaurant:data});
        });
    }

    render(){
        //var data = this.state.products;
        //console.log(this.state.products)
        //console.log(this.state.restaurant)

        return(
            <div>
                <Child dataProducts = {this.state.products} />
                <TestingFunc />
                <ElevateAppBar dataRestau = {this.state.restaurant} />
                <ListProducts dataProducts = {this.state.products} />
            </div>
        )

        /*return data.map((product,id)=>{
            return(
                <div>
                    <ul key={product.id}>
                        <li>{product.name}</li>
                    </ul>
                </div>
            )
        })*/
        
        /*return this.state.products.map((product, id) => {
            return(
                <div>
                    {<ul key={id}>
                        <li>{product.name}</li>
                    </ul>}
                </div>
            )
        });
    }
}*/