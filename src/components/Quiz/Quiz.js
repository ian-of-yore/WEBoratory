import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const Quiz = () => {
    const quizData = useLoaderData();
    const quizes = quizData.data;

    return (
        <div>
            <QuizQuestions quizes={quizes}></QuizQuestions>
        </div>
    );
};

export default Quiz;