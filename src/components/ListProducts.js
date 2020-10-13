import React, { Component } from 'react';

import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core'


export default class ListProducts extends Component{
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
        fetch('http://mas.diagonal-software.com/api/products/')
        .then(res => res.json())
        .then((data) => {
            this.setState({products:data});
        });
    }

    render() {
        return this.state.products.map((product, id) => {
            return (
                <Card className="maxWidth: 345" key={id}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://picsum.photos/140"
                        title={product.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {product.short_descrip}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained" color="primary" size="small">
                            Ver mas...
                        </Button>
                    </CardActions>
                </Card>
            );
        })
    }
}