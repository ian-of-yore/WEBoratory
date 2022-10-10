import React from 'react';
import Options from '../Options/Options';

const SingleQuestion = ({ ques }) => {
    const { question, options, correctAnswer, id } = ques;
    return (
        <div className='w-9/12 mx-auto'>
            <div>
                <div className='flex my-10'>
                    <p className='mr-10'>Question: {question}</p>
                    <p>Eye Icon</p>
                </div>
                <Options options={options}></Options>
            </div>
        </div>
    );
};

export default SingleQuestion;