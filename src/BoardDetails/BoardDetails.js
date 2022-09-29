import React from 'react';
import './BoardDetails.css';

const BoardDetails = () => {
    return (
        <div className="details">
            <h3>Exercise Details</h3>
            <div className="exercise-time d-flex my-4 p-3 align-items-center">
                <h6>Exercise Time : <span>0</span>s</h6>
            </div>
            <div className="break-time d-flex p-3 align-items-center">
                <h6>Break Time : <span>0</span>s</h6>
            </div>
        </div>
    );
};

export default BoardDetails;