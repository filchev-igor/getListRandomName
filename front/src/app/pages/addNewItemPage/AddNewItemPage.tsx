import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import SaveIcon from '@mui/icons-material/Save';
import GridRowBreak from '../../components/GridRowBreak/GridRowBreak';
import { ERASE_INPUT_CONFIRM_TEXT } from '../../constants/addNewItemPage';

const AddNewItemPage = () : JSX.Element => {
  const [list, setList] = useState('');

  const handleListChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setList(event.target.value);
  };

  const handleEraseInput = () => {
    if (!window.confirm(ERASE_INPUT_CONFIRM_TEXT)) {
      return;
    }

    setList('');
  };

  return (
    <>
      <Grid
        item
        xs={6}
      >
        <TextField
          placeholder="Enter values"
          multiline
          rows={10}
          fullWidth
          value={list}
          onChange={handleListChange}
        />
      </Grid>

      <GridRowBreak />

      <Grid
        container
        item
        xs={6}
        mt={3}
        justifyContent="space-between"
      >
        <Button variant="outlined" color="info" onClick={handleEraseInput}>
          <ClearIcon />
          &nbsp;
          Clear
        </Button>

        <Button variant="outlined" color="success">
          <SaveIcon />
          &nbsp;
          Save
        </Button>
      </Grid>
    </>
  );
};

export default AddNewItemPage;
