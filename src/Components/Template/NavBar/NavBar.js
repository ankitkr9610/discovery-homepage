import React from 'react';
import IconContainer from '../../Molecules/IconContainer';
import MenuBar from '../../Molecules/MenuBar';
import SearchBar from '../../Molecules/SearchBar';
import Button from '../../Atoms/Button';
import classes from './NavBar.module.css';

const NavBar = () => {
     return(
         <div className={classes.NavBarMain}>
             <div className={classes.NavBarWrapper}>
                 <div className={classes.IconAndMenu}>
                    <IconContainer />
                    <MenuBar />
                 </div>
                <div className={classes.SearchAndSignIn}>
                    <SearchBar />
                    <div>
                        <Button className={classes.Button}>Sign In</Button>
                    </div>
                </div>
             </div>
         </div>
     )
 }

 export default NavBar;