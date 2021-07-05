import React from 'react';
import Textbox from '../Atoms/Textbox';
import SearchIcon from '../Atoms/SearchIcon';
import classes from './SearchBar.module.css';

const SearchBar = () => {
    return <div className={classes.SearchBar}>
        <Textbox className={classes.Textbox} placeholder="Search for a show, episode, shorts etc." maxlength="100" />
        <SearchIcon className={classes.SearchIcon}/>
    </div>
}

export default SearchBar;