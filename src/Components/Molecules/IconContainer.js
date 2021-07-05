import React from 'react';
import Hamburger from '../Atoms/Hamburger';
import Logo from '../Atoms/Logo';
import classes from './IconContainer.module.css';

const IconContainer = () =>{
    return(
        <div className={classes.IconContainer}>
            <div className={classes.Hamburger}>
                <Hamburger className={classes.HamburgerIcon}/>
            </div>
            <Logo className={classes.Logo}/>
        </div>
    )
}

export default IconContainer