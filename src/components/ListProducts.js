import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import DetailProduct from './DetailProduct';

const useStyles = makeStyles({
    root: {
        maxWidth: 425,
        marginTop: 10,
        marginBottom: 5,
    },
});

export default function ListProducts(){

  let {id} = useParams();
  const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://mas.diagonal-software.com/api/products/' + id)
        .then(res => res.json())
        .then(product => {
            setProducts(product);
        });
    }, []);

    const classes = useStyles();

    return products.map((product)=>{
      let img_url = ("http://mas.diagonal-software.com/public/img/products/" + product.image_1)
      return (
        <Card className={classes.root} key={product.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={img_url}
              title="Contemplative Reptile"
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
            <DetailProduct productId={product.id}/>
          </CardActions>
        </Card>
      );
    })
}