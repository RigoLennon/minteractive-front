import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
    },
  }));

export default function MainCategories() {
    const classes = useStyles();

    const [category, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://mas.diagonal-software.com/api/categories/2')
        .then(res => res.json())
        .then(categories => {
            setCategories(categories);
        });
    }, []);

    function setCatId(catID) {
      //alert(`hello, ${catID}`);
      let catid = catID;
      console.log(catid)
    }

    function FormRow() {
      return category.map((cat) =>
        <React.Fragment key={cat.id} >
            <Grid item xs={6} >
              <Link component={RouterLink} to='/products' underline="none" onClick={()=> setCatId(cat.id)}>
                <Paper className={classes.paper}><span>🍲</span> {cat.cat_name}</Paper>
              </Link>
              <Button onClick={()=> setCatId(cat.id)}>Test</Button>
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
