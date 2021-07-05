import React from 'react';


const Link = (props)=>{
    return(
            <a href={props.linkAddress} className={props.className} style={props.style}>{props.children}</a>
    )
}

export default Link;