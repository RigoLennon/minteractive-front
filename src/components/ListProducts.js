import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";



import DetailProduct from './DetailProduct';
//import DetailProductTest from './DetailProductTest';

const useStyles = makeStyles({
    root: {
        maxWidth: 425,
        marginTop: 10,
        marginBottom: 5,
    },
});

export default function ListProducts(props){

    const classes = useStyles();

    return props.dataProducts.map((product, id)=>{
      return (
        <Card className={classes.root} key={id}>
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
            <DetailProduct />
          </CardActions>
        </Card>
      );
    })
}