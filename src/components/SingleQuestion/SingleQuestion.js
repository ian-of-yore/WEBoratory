import React from 'react';
import Options from '../Options/Options';

const SingleQuestion = ({ ques, handleClickedQues }) => {
    const { question, options, correctAnswer, id } = ques;



    return (
        <div className='w-9/12 mx-auto mb-10'>
            <div>
                <div className='flex mb-2'>
                    <p className='mr-10'><span className='text-xl font-bold'>Question:</span> <span className='text-lg font-semibold'>{question}</span></p>
                    <p>Eye Icon</p>
                </div>
                {
                    <div className='grid grid-cols-2 gap-3'>
                        <p onClick={(event) => handleClickedQues(event, id)}>{options[0]}</p>
                        <p onClick={(event) => handleClickedQues(event, id)}>{options[1]}</p>
                        <p onClick={(event) => handleClickedQues(event, id)}>{options[2]}</p>
                        <p onClick={(event) => handleClickedQues(event, id)}>{options[3]}</p>
                    </div>
                }

            </div>
        </div>
    );
};

export default SingleQuestion;