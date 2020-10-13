import React, { Component } from 'react';

export default class GetProducts extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            products: []
        };
        this.getProd = this.getProd.bind(this);
    }

    componentDidMount() {
        this.getProd()
    }

    getProd(){
        fetch('http://minteractive-prod.diagonal-software.com/api/products/')
        .then(res => res.json())
        .then((data) => {
            this.setState({products:data});
        });
    }
}