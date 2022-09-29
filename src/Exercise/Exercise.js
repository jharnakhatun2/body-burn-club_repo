import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import './Exercise.css';

const Exercise = (props) => {
    const {exercise, handleAddToList} =props;
    const { id, image, name, about, age, timeequired } = props.exercise;
    return (
        <div className='exercise-card p-2'>
            <img src={image} alt="" />
            <div className="component-padding p-2">
                <h5 className='mt-2'>{name}</h5>
                <div className="about">
                    <span>{about.length < 70 ? about : about.slice(0, 70) + '...'}</span></div><br />
                <span><strong>Age :</strong> {age} yrs</span>
                <p><strong>Time-Required :</strong> {timeequired}s</p>
            </div>
            <h6 onClick={() => handleAddToList(exercise)} className="addToList py-3 text-center">Add to List <FontAwesomeIcon icon={faLocationArrow} /></h6>
        </div>
    );
};

export default Exercise;