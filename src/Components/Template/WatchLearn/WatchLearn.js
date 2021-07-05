import React from 'react';
import classes from './WatchLearn.module.css';
import data from './WatchLearnData';

const WatchLearn = () =>{
    return (
        <div className={classes.WatchLearn}>
            <div className={classes.Header}>
                <div>
                     <h5 className={classes.Heading}>Watch and Learn</h5>
                </div>
                <div>
                    <h6 className={classes.View}>View All</h6>
                </div>
            </div>
            
            <div className={classes.ImageWrapper}>
                <div className={classes.ImageWrapper2}>
                {data.map(item => {
                    return <div className={classes.ImageContainer}>
                                <img
                                className={classes.Image}
                                key={item.id}
                                src={item.src}
                                alt={item.name}
                                />
                            </div>
                })}
                </div>
            </div>
            
        </div>
    )
}

export default WatchLearn;