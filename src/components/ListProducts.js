import React, { Component } from 'react';

import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


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
                        <Button variant="contained" color="primary" size="small" onClick={this.FullScreenDialog}>
                            Ver mas...
                        </Button>
                    </CardActions>
                </Card>
            );
        })
    }
}