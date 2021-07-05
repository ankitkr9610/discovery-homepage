import React from 'react';

const Textbox = (props)=>{
    return(
        <div>
            <input className={props.className} type="text" placeholder={props.placeholder} maxLength={props.maxlength} value={props.value} /> 
        </div> 
    )
}

export default Textbox;