import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import {observer} from "mobx-react";
import { createMuiTheme } from '@material-ui/core/styles';
import './AppLayoutView.css';

const AppLayoutView: FunctionComponent<{}> = props => {

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff0066',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

    return <div id ="App">
      <ThemeProvider theme={theme}>
      <AppBar position ="static"> 
    <Toolbar>
      <Typography variant="h6" style={{ flex: 1,textAlign : 'center' }}>
        Awesome Cyber Laser Mega Chat
      </Typography>
    </Toolbar>
  </AppBar>
      {props.children}
  </ThemeProvider>
  </div>
};

export default observer(AppLayoutView);