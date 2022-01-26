import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selectfrm() {
  const [v, setV] = React.useState('');

  const handleChange = (event) => {
    setV(event.target.value);
  };

  return (
    <Box item xs={12}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">services</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={v}
          label="services"
          onChange={handleChange}
        >
          <MenuItem value={1}>Electricien</MenuItem>
          <MenuItem value={2}>Painture</MenuItem>
          <MenuItem value={3}>Jardinier</MenuItem>
          <MenuItem value={4}>Carpenter</MenuItem>
          <MenuItem value={5}>Plumbier</MenuItem>
          <MenuItem value={6}>Installation Parabole</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

