import React from 'react';
import './Button.css';

const Button: React.FC<{text:string, func: any}> = ({text, func}) =>{
    return(
        <button onClick={func} className= 'buttons'>{text}</button>
    );
}

export default Button;