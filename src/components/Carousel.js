import React from 'react';

import Carousel from 'react-material-ui-carousel'
import {Paper, CardMedia} from '@material-ui/core'

export default function ImgCarousel(props)
{
    var items = [
        {
            image: "http://mas.diagonal-software.com/public/img/products/" + props.ProdImgNme
        },
        {
            image: "http://mas.diagonal-software.com/public/img/products/" + props.ProdImgNme
        },
        {
            image: "https://picsum.photos/542"
        },
    ]
 
    return (
        <Carousel animation="slide">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <div>
            <Paper>
                <CardMedia
                component="img"
                alt={props.ProdImgNme}
                height="240"
                image={props.item.image}
                title={props.ProdImgNme}
                />
            </Paper>
        </div>
    )
}