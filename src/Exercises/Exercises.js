import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css';


const Exercises = () => {
    const [excercises, setExcercises] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExcercises(data));
    },[]);
    
    return (
        <div className="alignment">
            <h3>Select today’s exercise</h3>
            <div className="exercise-Card-container">
            {
                excercises.map(exercise => <Exercise
                    key={exercise.id}
                    exercise={exercise}
                />)
            }
        </div>
        </div>
    );
};

export default Exercises;