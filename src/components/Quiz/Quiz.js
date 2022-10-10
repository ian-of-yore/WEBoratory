import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizData = useLoaderData();
    console.log(quizData)
    return (
        <div>
            <p>This is the Quiz Component</p>
        </div>
    );
};

export default Quiz;