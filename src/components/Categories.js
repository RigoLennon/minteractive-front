import React, { useState, useEffect } from "react";

import {  Link as RouterLink, useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
    },
  }));

export default function MainCategories(props) {

  let id_rest = props.id_rest;

    const classes = useStyles();

    const [category, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://mas.diagonal-software.com/api/categories/' + id_rest)
        .then(res => res.json())
        .then(categories => {
            setCategories(categories);
        });
    }, []);

    function FormRow() {
      return category.map((cat) =>
        <React.Fragment key={cat.id} >
            <Grid item xs={6} >
              <Link component={RouterLink} to={`/products/${cat.id}`} underline="none" >
                <Paper className={classes.paper}><span>🍲</span> {cat.cat_name}</Paper>
              </Link>
            </Grid>
        </React.Fragment>
      );
      }
    
      return (
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid container item xs={12} spacing={1}>
              <FormRow />
            </Grid>
          </Grid>
        </div>
      );
}
