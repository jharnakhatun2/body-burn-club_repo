import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../profile.png';
import './Board.css';
import Break from '../Break/Break';


const Board = (props) => {
    const {exerciseTime} =props;
    const [breakTimes, setBreakTimes] = useState([]);
    
    
    const selectedBreakTimes = [
                    {id:1, time: 15},
                    {id:2, time: 25},
                    {id:3, time: 35},
                    {id:4, time: 45}
    ]
    
    
    let totalTime = 0;
    for(const time of exerciseTime){
        totalTime = totalTime + time.timeequired;
    }

    const handleBreakTime = (brTime) => {
        const newBreakTime = [...breakTimes, brTime];
        setBreakTimes(newBreakTime);
    }
    
    return (
        <div className="board-container p-3">
            
             {/* gymnastic Profile Info */}
            <div className="gymnastic-profile d-flex align-items-center">
                <img src={profileImg} alt="" />
                <div className="address ps-4">
                    <h6>Zahid Hossain</h6>
                    <FontAwesomeIcon icon={faLocationDot} /> <span>Savar, Bangladesh</span>
                </div>
            </div>

            {/* Physical Properties Info */}
            <div className="body-properties d-flex my-4 py-2">
                <div className="weight px-4">
                    <p><strong className=" fs-3">75</strong>Kg</p>
                    <p>Weight</p>
                </div>
                <div className="height px-4">
                    <p><strong className=" fs-3">6.5</strong></p>
                    <p>Height</p>
                </div>
                <div className="age px-4">
                    <p><strong className=" fs-3">25</strong>yrs</p>
                    <p>Age</p>
                </div>
            </div>

            {/* Selected Break Time */}
            <div className="add-a-break d-flex ">
            {
                selectedBreakTimes.map(breakTime => <Break 
                        key={breakTime.id}
                        breakTime={breakTime}
                ></Break>)
            }  
            </div>

            {/* Exercise Time and Break Section */}
            <div className="board-details">
                <div className="details">
                    <h3>Exercise Details</h3>
                    <div className="exercise-time d-flex my-4 p-3 align-items-center">
                        <h6>Exercise Time : <span>{totalTime}</span>s</h6>
                    </div>
                    <div className="break-time d-flex p-3 align-items-center">
                        <h6>Break Time : <span>0</span>s</h6>
                    </div>
                </div>
            </div>

            {/* Toast Button section */}
            <div className="toast-button my-4">
                <h5 className='py-3'>Activity Completed</h5>
            </div>
        </div>
    );
};

export default Board;