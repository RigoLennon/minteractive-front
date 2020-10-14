import React, { Component } from 'react';

import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'

//import DetailProduct from './DetailProduct';

export default class ListProducts extends Component{

    render() {
        return this.props.dataProducts.map((product, id)=>{
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
                        <Button variant="contained" color="primary" size="small" onClick={this.ShowProduct}>
                            Ver mas...
                        </Button>
                    </CardActions>
                </Card>
            );
        })
    }
}