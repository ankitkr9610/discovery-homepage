import React from 'react';
import DiscoveryLogo from '../../assets/images/logo.png';

const Logo = (props)=>{
    return <img className={props.className} src={DiscoveryLogo} alt="logo" />
}

export default Logo;