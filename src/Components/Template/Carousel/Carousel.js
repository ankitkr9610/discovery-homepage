import React, { useState, useEffect } from 'react';
import LeftArrow from '../../Atoms/LeftArrow';
import RightArrow from '../../Atoms/RightArrow';
import CarouselSlides from '../../Organism/CarouselSlides';
import classes from './Carousel.module.css';
import data from './CarouselData';

import StyleIndicator from '../../Atoms/StyleIndicator';

const Carousel = () =>{

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const next = (currentSlide + 1) % data.length;
        const id = setTimeout(() => setCurrentSlide(next), 2000);
        return () => clearTimeout(id);
    }, [currentSlide]);

    const prevSlide = () =>{
        setCurrentSlide( prev => {
            return prev === 0 ? data.length - 1 : prev - 1;
        } 
        );
    } 

    const nextSlide = () =>{
        setCurrentSlide( prev => {
            return prev === data.length - 1 ? 0 : prev + 1;
        } 
        );
    } 
    
    return(
        <div className={classes.MasterContainer}>
            <div>
            <div className={classes.CarouselContainer}>
                <div className={classes.LeftArrowContainer} onClick={prevSlide}>
                    <LeftArrow className={classes.LeftArrow} />
                </div>

                {data.map((slide, index)=>{
                    return(
                        <section>
                            {index===currentSlide && 
                                <CarouselSlides 
                                key={index}
                                heading={slide.heading} 
                                description={slide.description}
                                tag1={slide.tag1}
                                tag2={slide.tag2}
                                source={slide.image.source}
                                alt={slide.image.alt}
                                />
                            }
                        </section>
                    );
                }
                )
                }

                <div className={classes.StyleIndicator}>
                    <div className={classes.StyleContainer}>
                        {data.map((slide, index)=>{
                            return <StyleIndicator 
                                    key={index} 
                                    index={index}
                                    className={index===currentSlide ? classes.StyleActive : classes.Style} 
                                    />
                        })
                    }
                    </div>
                </div>

                <div className={classes.RightArrowContainer} onClick={nextSlide}>
                    <RightArrow className={classes.RightArrow} />
                </div>

            </div>
            </div>
        </div>   
    );
}

export default Carousel;