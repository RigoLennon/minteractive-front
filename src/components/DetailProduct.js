import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';

import ImgCarousel from './Carousel';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailProduct(props) {

  const [productDetail, setProductDetail] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const id = props.productId;

      const handleClickOpen = () => {
        setOpen(true);
    
        fetch('http://mas.diagonal-software.com/api/product-detail/' + id)
            .then(res => res.json())
            .then(product => {
                setProductDetail(product);
            })
      }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" size="small" onClick={handleClickOpen} >
        Ver mas
      </Button>
      {productDetail.map(productD =>(
    <div key={productD.id}>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} scroll={'body'}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton autoFocus edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Ver mas de {productD.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <ImgCarousel />
        <h2>{productD.name}</h2>
        <p>{productD.description}</p>
        <Divider />
        <h2>Precio</h2>
        <h2>${productD.price}</h2>
        <Divider />
        <h2>Ingredientes</h2>
        <List>
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary='Pescado'
                  />
                </ListItem>
            </List>
      </Dialog>
    </div>
    ))}
    </div>
  );
}