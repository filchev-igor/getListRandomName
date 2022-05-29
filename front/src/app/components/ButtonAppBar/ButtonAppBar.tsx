import {
  AppBar, CssBaseline, Grid, Toolbar,
} from '@mui/material';
import React from 'react';
import AppBarIcons from './AppBarIcons';

const ButtonAppBar = () : JSX.Element => (
  <>
    <CssBaseline />

    <AppBar
      position="sticky"
      enableColorOnDark={false}
      color="transparent"
    >
      <Toolbar>
        <Grid
          container
          justifyContent="space-between"
          spacing={12}
        >
          <AppBarIcons />
        </Grid>
      </Toolbar>
    </AppBar>
  </>
);

export default ButtonAppBar;
