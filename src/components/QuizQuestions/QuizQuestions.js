import React from 'react';
import Questions from '../Questions/Questions';

const QuizQuestions = ({ quizes }) => {
    const { name, questions } = quizes;
    return (
        <div>
            <p className='text-center text-4xl my-10 font-semibold'>Quiz of {name}</p>
            <Questions questions={questions}></Questions>
        </div>
    );
};

export default QuizQuestions;