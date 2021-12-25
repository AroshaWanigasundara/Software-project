import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Shop from '../components/Shop'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Category - 1',
  'Category - 2',
  'Category - 3'
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const events: NextPage = () => {
    const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);
  
    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    
        return (
            <div className="buyer-bg shop-home">
                <Navbar/>
                <div className='event-container'>
                    <div className='event-container-left'>
                        <div className='event-container-left-content'>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                            >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search Your Event"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                        <div>
                            <h4>
                                Event Date
                            </h4>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateRangePicker
                                startText="Check-in"
                                endText="Check-out"
                                value={value}
                                onChange={(newValue) => {
                                setValue(newValue);
                                }}
                                renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                    <TextField {...startProps} />
                                    <Box sx={{ mx: 2 }}> to </Box>
                                    <TextField {...endProps} />
                                </React.Fragment>
                                )}
                            />
                            </LocalizationProvider>
                        </div>
                        <div>
                            <h4>
                                Area
                            </h4>
                            <div>
                                <FormControl sx={{ m: 1, width: 300 }}>
                                    <InputLabel id="demo-multiple-name-label">Select Area</InputLabel>
                                    <Select
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Select Category" />}
                                    MenuProps={MenuProps}
                                    >
                                    {names.map((name) => (
                                        <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                        >
                                        {name}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div>
                            <h4>
                                Ticket Types
                            </h4>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Level 1 Tickets" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Level 2 Tickets" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Level 3 Tickets" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Level 4 Tickets" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Level 5 Tickets" />
                            </FormGroup>
                        </div>
                        <div>
                            <h4>
                                Event Category 
                            </h4>
                            <div>
                                <FormControl sx={{ m: 1, width: 300 }}>
                                    <InputLabel id="demo-multiple-name-label">Select Category</InputLabel>
                                    <Select
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Select Category" />}
                                    MenuProps={MenuProps}
                                    >
                                    {names.map((name) => (
                                        <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                        >
                                        {name}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='event-container-Right'>
                        <Shop/>
                    </div>
                </div>
            </div>
        );
}

export default events;