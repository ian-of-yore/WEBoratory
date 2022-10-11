import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


const SingleQuestion = ({ ques, handleClickedQues, handleShowAnswer }) => {
    const { question, options, id } = ques;
    const questionRegEX = question.replace(/(<([^>]+)>)/ig, '');

    return (
        <div className='w-9/12 mx-auto mb-10'>
            <div className='border-4 p-4 rounded-lg'>
                <div className='flex mb-2 items-center justify-between'>
                    <p className='mr-4'><span className='text-xl font-bold'>Question:</span> <span className='text-lg font-semibold'>{questionRegEX}</span></p>
                    <p onClick={() => handleShowAnswer(id)} className='fa-light fa-icons'><FontAwesomeIcon className='h-6 w-6' icon={faEye}></FontAwesomeIcon></p>
                </div>
                {
                    <div className='grid sm:grid-cols-2 gap-3'>
                        <p className='shadow-lg p-2 hover:bg-orange-500 active:bg-orange-800 hover:text-white rounded-lg' onClick={(event) => handleClickedQues(event, id)}>{options[0]}</p>
                        <p className='shadow-lg p-2 hover:bg-orange-500 active:bg-orange-800 hover:text-white rounded-lg' onClick={(event) => handleClickedQues(event, id)}>{options[1]}</p>
                        <p className='shadow-lg p-2 hover:bg-orange-500 active:bg-orange-800 hover:text-white rounded-lg' onClick={(event) => handleClickedQues(event, id)}>{options[2]}</p>
                        <p className='shadow-lg p-2 hover:bg-orange-500 active:bg-orange-800 hover:text-white rounded-lg' onClick={(event) => handleClickedQues(event, id)}>{options[3]}</p>
                    </div>
                }

            </div>
        </div>
    );
};

export default SingleQuestion;