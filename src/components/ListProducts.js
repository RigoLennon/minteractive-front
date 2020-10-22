import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//import DetailProduct from './DetailProduct';
//import DetailProductTest from './DetailProductTest';

const useStyles = makeStyles({
    root: {
        maxWidth: 425,
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
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
    })
}

/*export default class ListProducts extends Component{
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
                        <Button variant="contained" color="primary" size="small" onClick="">
                            Ver mas...
                        </Button>
                    </CardActions>
                </Card>
            );
        })
    }
}*/