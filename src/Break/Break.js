import React from 'react';
import './Break.css';

const Break = (props) => {
    const {id,time} = props.breakTime;
    const handleBreakTime = (id) => {
        console.log('Item selected', id);
    }
    
    // const handleBreakTime = (brTime) => {
    //     const newBreakTime = [...breakTimes, brTime];
    //     setBreakTimes(newBreakTime);
    // }
    
    return (
        <div className="break my-4 py-2">
            <p><span onClick={handleBreakTime(id)}>{time}</span>s</p>
            
        </div>
    );
};

export default Break;