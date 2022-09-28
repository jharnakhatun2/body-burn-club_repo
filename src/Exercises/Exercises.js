import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';


const Exercises = () => {
    const [excercises, setExcercises] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExcercises(data));
    },[]);
    
    return (
        <div>
            <h3>Select today’s exercise</h3>
            {
                excercises.map(exercise => <Exercise
                    key={exercise.id}
                    exercise={exercise}
                />)
            }
        </div>
    );
};

export default Exercises;