import React from 'react';
import CardDetails from '../Molecules/CardDetails';
import PlayCarousel from '../Molecules/PlayCarousel';
import classes from './CarouselCard.module.css';

const CarouselCard = (props) =>{
    return(
            <div className={classes.CardContainer}>
                <CardDetails heading={props.heading} description={props.description} tag1={props.tag1} tag2={props.tag2}/>
                <PlayCarousel />
            </div>
    );
}

export default CarouselCard;