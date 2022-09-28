import React from 'react';
import './BoardDetails.css';

const BoardDetails = () => {
    return (
        <div className="details">
        <h3>Exercise Details</h3>
        <div className="exercise-time d-flex">
            <h6>Exercise Time</h6>
            <input type="text" />
        </div>
        <div className="break-time d-flex p-4">
            <h6>Break Time</h6>
            <input type="text" />
        </div>
            
        </div>
    );
};

export default BoardDetails;