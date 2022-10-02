import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Board from '../Board/Board';
import Header from '../Header/Header';
import './Activity.css';
import { addToDb, getStoredCart } from '../utilities/fakedb';
import Blog from '../Blog/Blog';



const Activity = () => {
    const [excercises, setExcercises] = useState([]);
    const [exerciseTime, setExerciseTime] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setExcercises(data);

            });
    }, []);

    useEffect(() => {
        const storedExercise = getStoredCart();
        const savedExercise = [];
        for (const id in storedExercise) {
            const addedExercise = excercises.find(exercise => exercise.id === id);
            if (addedExercise) {
                const quantity = storedExercise[id];
                // console.log(addedExercise);
                addedExercise.quantity = quantity;
                savedExercise.push(addedExercise);
            }
        }
        setExerciseTime(savedExercise);
    }, [excercises])

    const handleAddToList = (exercise) => {
        const newExerciseTime = [...exerciseTime, exercise];
        setExerciseTime(newExerciseTime);
        addToDb(exercise.id)
    }

    return (
        <div>
            <div className="activity-container">
                <div className="exercise-container p-5 mx-4">
                    <Header />
                    <div className="alignment">
                        <h4 className="mb-4 text-white">Select today’s exercise</h4>
                        <div className="exercise-Card-container">
                            {
                                excercises.map(exercise => <Exercise
                                    key={exercise.id}
                                    exercise={exercise}
                                    handleAddToList={handleAddToList}
                                />)
                            }

                        </div>
                    </div>

                    {/* Blog Section */}
                    <div className="blog-container">
                        <h4 className="mt-5 mb-4 text-white text-start ">Important FAQ</h4>
                        <div className="blog-card-container">
                            <Blog />
                        </div>
                    </div>
                </div>

                {/* Exercise Time Board Sidebar */}
                <div className="board-container">
                    <Board exerciseTime={exerciseTime} />
                </div>
            </div>
        </div>
    );
};

export default Activity;