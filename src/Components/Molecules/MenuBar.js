import React from 'react';
import Link from '../Atoms/Link';
import classes from './MenuBar.module.css';
const MenuBar = () =>{
    return(
        <div className={classes.MenuBar}>
            <Link className={classes.Link} linkAddress="" style={{color:"white"}}>Home</Link>
            <Link className={classes.Link} linkAddress="" >Explore</Link>
            <Link className={classes.Link} linkAddress="" >Kids</Link>
            <Link className={classes.Link} linkAddress="" >Shorts</Link>
            <Link className={classes.Link} linkAddress="" >Mondblown</Link>
            <Link className={classes.Link} linkAddress="" >Premium</Link>
        </div>
    );
}

export default MenuBar; 