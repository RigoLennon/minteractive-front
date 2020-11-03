import React from 'react';

import Carousel from 'react-material-ui-carousel'
import {Paper, CardMedia} from '@material-ui/core'

export default function ImgCarousel(props)
{
    var items = [
        {
            image: "https://picsum.photos/540"
        },
        {
            image: "https://picsum.photos/541"
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
                alt="Contemplative Reptile"
                height="240"
                image={props.item.image}
                title="Contemplative Reptile"
                />
            </Paper>
        </div>
    )
}