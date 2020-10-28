import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      //color: theme.palette.text.secondary,
    },
  }));

export default function MainCategories() {
    const classes = useStyles();

    function FormRow() {
        return (
          <React.Fragment>
            <Grid item xs={6}>
              <Paper className={classes.paper}>🍲 Alimentos</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>🥤 Bebidas</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>🍺 Cerveza Sake Soju</Paper>
            </Grid>
          </React.Fragment>
        );
      }
    
      return (
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <FormRow />
            </Grid>
          </Grid>
        </div>
      );
}
