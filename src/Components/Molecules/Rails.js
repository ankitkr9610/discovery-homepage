import React from 'react';
import classes from './Rails.module.css';

const Rails = (props) => {
    return(
        <div className={classes.Rails}>
            <div>
                <div className={classes.ImageWrapper}>
                    <img src={props.src} alt={props.alt} className={classes.RailsImage}/>
                </div>
                <div className={classes.RailsHeading}>
                    <span className={classes.RailsName}>{props.railsName}</span>
                </div>
            </div>
        </div>
    );
}

export default Rails;