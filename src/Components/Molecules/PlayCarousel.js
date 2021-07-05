import React from 'react';
import PlayButton from '../Atoms/PlayButton';
import classes from './PlayCarousel.module.css';

const PlayCarousel = () =>{
    return <div className={classes.Play}>
        <PlayButton className={classes.PlayImage}/>
        <h6 className={classes.PlayText}>Play</h6>
    </div>
}

export default PlayCarousel;