import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function AutoSuggest (props) { 
  return (
    <Autocomplete
      id="combo-box-demo"
      options={props.autoList}
      onClick={props.handleSubmit}
      // getOptionLabel={option => option.title}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField {...params} onClick={props.handleSubmit} label="Combo box" variant="outlined" fullWidth />
      )}
    />
  );
}
