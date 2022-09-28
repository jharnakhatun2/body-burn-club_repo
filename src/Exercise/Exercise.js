import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {id, image, name, about,age, timeequired} = props.exercise;
    return (
        <div className='exercise-card p-2'>
            <img src={image} alt="" />
            <div className="component-padding p-2">
            <h5 className= 'mt-2'>{name}</h5>
            <div className="about">
            <span>{about.length < 70 ? about : about.slice(0, 70) + '...'}</span></div><br/>
            <span><strong>Age :</strong> {age} yrs</span>
            <p><strong>Time-Required :</strong> {timeequired}s</p>
            </div>
            <h6 className="addToList py-3 text-center">Add to List</h6>
        </div>
    );
};

export default Exercise;