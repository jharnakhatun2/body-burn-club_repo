import React from 'react';
import Board from '../Board/Board';
import Exercises from '../Exercises/Exercises';
import Header from '../Header/Header';
import './Activity.css';



const Activity = () => {
    return (
        <div>
            <div className="activity-container">
                    <div className="exercise-container p-5 mx-4">
                        <Header/>
                        <Exercises/>
                    </div>
                    <div className="board-container">
                        <Board/>
                    </div>
                </div>
            </div>
    );
};

export default Activity;