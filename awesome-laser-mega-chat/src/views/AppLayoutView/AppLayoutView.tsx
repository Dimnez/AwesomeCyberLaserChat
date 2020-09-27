import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './AppLayoutView.css';


const AppLayoutView: FunctionComponent<{}> = props => {

    return <div><AppBar position ="static"> 
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" style={{ flex: 1 }}>
        ALMC // Awesome Laser Mega Chat
      </Typography>
      <Button color="inherit">Join</Button>
    </Toolbar>
  </AppBar>
  <div>
      {props.children}
  </div></div>
};

export default AppLayoutView;