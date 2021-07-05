import React from 'react';
import Link from '../Atoms/Link';
import CarouselCard from './CarouselCard';
import classes from './CarouselSlides.module.css';

const CarouselSlides = (props) =>{
    return(
        <Link href="" className={classes.Link}>
            <div className={classes.CarouselItem}>
                <CarouselCard heading={props.heading} description={props.description} tag1={props.tag1} tag2={props.tag2}/>
                <div className={classes.ImageWrapper1}>
                    <div className={classes.ImageWrapper2}>
                        <div className={classes.ImageContainer}>
                            <img className={classes.CarouselImage} src={props.source} alt={props.alt} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CarouselSlides;  