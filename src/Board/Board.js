import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../profile.png';
import Break from '../Break/Break';
import './Board.css';
import BoardDetails from '../BoardDetails/BoardDetails';

const Board = () => {
    return (
        <div className="board-container p-3">
            <div className="gymnastic-profile d-flex align-items-center">
                <img src={profileImg} alt="" />
                <div className="address ps-4">
                    <h6>Zahid Hossain</h6>
                    <FontAwesomeIcon icon={faLocationDot} /> <span>Savar, Bangladesh</span>
                </div>
            </div>
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
            <div className="add-a-break">
                <Break></Break>
            </div>
            <div className="board-details">
                <BoardDetails></BoardDetails>
            </div>
            <div className="toast-button my-4">
                <h5 className='py-3'>Activity Completed</h5>
            </div>
        </div>
    );
};

export default Board;