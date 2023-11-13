import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Selector() {
    return (
        <FormControl sx={{ minWidth: 80 }} size='small'>
            <InputLabel id="demo-select-small-label">5</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="questions"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
            </Select>
        </FormControl>
    );
}

export default Selector;