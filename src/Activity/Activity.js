import React from 'react';
import Board from '../Board/Board';
import Exercises from '../Exercises/Exercises';
import Header from '../Header/Header';



const Activity = () => {
    return (
        <div>
            <div className="container">
                <div className="activity-container">
                    <div className="exercise-container py-5">
                        <Header/>
                        <Exercises/>
                    </div>
                    <div className="board-container">
                        <Board/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;