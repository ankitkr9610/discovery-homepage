import React from 'react';
import classes from './CardDetails.module.css';
const CardDetails = (props) =>{
    return(
        <>
            <h3 className={classes.Heading}>{props.heading}</h3>
            <h4 className={classes.Description}>
                {props.description}
            </h4>
            <div className={classes.TagsWrapper}>
                <div className={classes.TagsContainer}>
                    <span className={classes.Span} style={{background: "rgb(40, 46, 61)"}}>{props.tag1}</span>
                    <span className={classes.Span} style={{background: "rgb(40, 46, 61)"}}>{props.tag2}</span>
                </div>
            </div>
        </>
    );
}

export default CardDetails;