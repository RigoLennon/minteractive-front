import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function MainAppBar(props){
  return props.dataRestr.map((restr)=>{
    return (
      <div key={restr.id}>
        <AppBar>
            <Toolbar>
              <Typography variant="h6">{restr.name}</Typography>
            </Toolbar>
          </AppBar>
        <Toolbar />
      </div>
    );
  })
}