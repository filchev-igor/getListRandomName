import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, Grid } from '@mui/material';
import AddNewItemPage from './pages/addNewItemPage/AddNewItemPage';
import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar';

const App = () : JSX.Element => (
  <>
    <CssBaseline />

    <Grid container spacing={5}>
      <Grid container item>
        <ButtonAppBar />
      </Grid>

      <Grid
        container
        item
        justifyContent="center"
      >
        <Routes>
          <Route path="/" element={<AddNewItemPage />} />
        </Routes>
      </Grid>
    </Grid>
  </>
);

export default App;
