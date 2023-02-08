import React from 'react';
import './Links.css';

const Link: React.FC<{text:string}> = ({text}) =>{
    return(
        <a href="/" className='links'>{text}</a>
    );
}

export default Link;