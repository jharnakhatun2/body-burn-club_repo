import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../profile.png';
import './Board.css';
import { useEffect, useState } from 'react';


const Board = (props) => {
    const {exerciseTime} =props;
    const [times, setTimes] = useState([]);
    
    let totalTime = 0;
    for(const time of exerciseTime){
        totalTime = totalTime + time.timeequired;
    }

    const addBreakTime =(times)=>{
        const newTimes = times;
        setTimes(newTimes);
        localStorage.setItem('breakTimes',JSON.stringify(times));
    }
    
    useEffect(()=>{
        const getTimes = JSON.parse(localStorage.getItem('breakTimes'));
        if(getTimes){
            setTimes(getTimes);
        } 
    },[times]);
    
             
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
            <div className="add-a-break  ">
            <div className="break d-flex my-4 py-2">
                    <p><span  onClick={()=>addBreakTime(10)}>10</span>m</p>
                    <p><span  onClick={()=>addBreakTime(20)}>20</span>m</p>
                    <p><span  onClick={()=>addBreakTime(30)}>30</span>m</p>
                    <p><span  onClick={()=>addBreakTime(40)}>40</span>m</p>
                </div>
            </div>

            {/* Exercise Time and Break Section */}
            <div className="board-details">
                <div className="details">
                    <h3>Exercise Details</h3>
                    <div className="exercise-time d-flex my-4 p-3 align-items-center">
                        <h6>Exercise Time : <span>{totalTime}</span> m</h6>
                    </div>
                    <div className="break-time d-flex p-3 align-items-center">
                        <h6>Break Time : <span id='breakTime'>{times}</span> m</h6>
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