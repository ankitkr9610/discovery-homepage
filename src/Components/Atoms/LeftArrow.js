import React from 'react';
import leftArrow from "../../assets/images/leftArrow.svg";

const LeftArrow = (props) =>{
    return  <img className={props.className} src={leftArrow} alt="left arrow" />
}

export default LeftArrow;