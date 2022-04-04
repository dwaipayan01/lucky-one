import React from 'react';
import "./Question.css";

const Question = () => {
    return (
        <div className='style'>
            <h2>How react works ?</h2>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>
            <h2>How useState works ?</h2>
            <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
        </div>
    );
};

export default Question;