import React from 'react'

import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import { SearchIcon } from '@material-ui/icons/Search';

const SearchBar = () => {
    return (
        <box display="flex">
            <Autocomplete>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                        <InputBase 
                            placeholder='Enter'
                            classes={{root: 'classes.inputRoot', input: 'classes.inputInput'}}
                        />
                    </div>
                </div>
            </Autocomplete>
        </box>
    )
}

export default SearchBar