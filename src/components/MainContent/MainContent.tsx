import React from 'react';
import Button from '../Button/Button';
import './MainContent.css';

const MainContent = () =>{
    const [num, setNum] = React.useState<number>(0);

    function addNum(){
        setNum(num +1);
    }

    function removeNum(){
        setNum(num - 1);
    }

    return(
        <div className='content'>
            <Button text='-' func={removeNum}/>
            <p className='countText'>{num}</p>
            <Button text='+' func={addNum}/>
        </div>
    );
}

export default MainContent;
