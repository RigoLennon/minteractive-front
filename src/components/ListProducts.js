import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import DetailProduct from './DetailProduct';
//import AlertDialog from './testing/DialogTest';
//import DetailProductTest from './DetailProductTest';

const useStyles = makeStyles({
    root: {
        maxWidth: 425,
        marginTop: 10,
        marginBottom: 5,
    },
});

export default function ListProducts(props){

  const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://mas.diagonal-software.com/api/products/' + props.dataCat)
        .then(res => res.json())
        .then(product => {
            //console.log(product);
            setProducts(product);
        });
    }, []);

    const classes = useStyles();

    return products.map((product)=>{
      return (
        <Card className={classes.root} key={product.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://picsum.photos/540"
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