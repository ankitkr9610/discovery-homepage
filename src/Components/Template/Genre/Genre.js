import React,{useState} from 'react';
import LeftArrow from '../../Atoms/LeftArrow';
import RightArrow from '../../Atoms/RightArrow';
import Rails from '../../Molecules/Rails';
import classes from './Genre.module.css';

import data from './GenreData';

const Genre = () =>{

const [isRightClicked, setIsRightClicked] = useState(false);
const invertArrow = () =>{
    setIsRightClicked( prev => !prev);
};
    return(
        <div className={classes.GenreWrapper}>
            <div className={classes.Genre}>
            <div className = {classes.LeftArrow} onClick={invertArrow}>
                {isRightClicked && <LeftArrow className = {classes.LeftArrow}/>}
            </div>    
            <div className={classes.Rails}>
                {data.map(item => {
                    return <Rails 
                    key={item.id}
                    src={item.src} 
                    alt={item.name} 
                    railsName={item.name}/>
                })}
                
            </div>
            <div className = {classes.RightArrow} onClick={invertArrow}>
                {!isRightClicked && <RightArrow className = {classes.RightArrow} />}
            </div>  
            </div>
        </div>
    );
}

export default Genre;