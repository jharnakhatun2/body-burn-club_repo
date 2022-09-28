import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {id, image, name, about,age, timeequired} = props.exercise;
    return (
        <div className='exercise-card'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <span>{about}</span><br/>
            <span>Age : {age}</span>
            <p>Time-Required : {timeequired}</p>
        </div>
    );
};

export default Exercise;