import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class mainAppBar extends Component{
  render(){
    return this.props.dataRestau.map((rest, id)=>{
      return(
        <AppBar key={id}>
          <Toolbar>
            <Typography variant="h6">{rest.name}</Typography>
          </Toolbar>
        </AppBar>
      )
    })
  }
}