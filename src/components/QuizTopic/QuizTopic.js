import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopics = ({ quizTopic }) => {
    const { id, name, logo, total } = quizTopic;
    return (
        <div className='shadow-lg'>
            <div>
                <img className='h-72 w-full shadow-lg' src={logo} alt="" />
            </div>
            <div className='flex justify-between mt-3 mb-2 items-center'>
                <p className='font-semibold text-3xl'>{name}</p>
                <p><small className='font-semibold text-xl'>Quiz: {total}</small></p>
                <Link to={`quizTopic/${id}`}><p className='bg-orange-500 text-white font-semibold p-2 rounded-lg hover:bg-orange-800'>Start Quiz</p></Link>
            </div>
        </div>
    );
};

export default QuizTopics;