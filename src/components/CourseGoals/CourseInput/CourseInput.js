import React, { useState } from 'react';

import Button from '../../UI/button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid , setIsValid] = useState(true)
  const [buttonClicked, setButtonClicked] = useState(false);
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
        setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    
    if(enteredValue.trim().length===0){
        setButtonClicked(true);
        setIsValid(false)
        return;
    }
    setButtonClicked(false);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" blur={buttonClicked && enteredValue.trim().length === 0}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;