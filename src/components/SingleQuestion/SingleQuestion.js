import React from 'react';
import Options from '../Options/Options';

const SingleQuestion = ({ ques }) => {
    const { question, options, correctAnswer, id } = ques;

    const handleAnswer = (event, id) => {
        const clickedAnswer = event.target.innerText;
        console.log(clickedAnswer, id);
    }

    const handleClickedQues = (id) => {
        console.log(id)
    }

    console.log(ques)


    return (
        <div className='w-9/12 mx-auto mb-10'>
            <div>
                <div className='flex mb-2'>
                    <p className='mr-10'><span className='text-xl font-bold'>Question:</span> <span className='text-lg font-semibold'>{question}</span></p>
                    <p>Eye Icon</p>
                </div>
                <Options
                    options={options}
                    handleAnswer={handleAnswer}
                    id={id}
                    handleClickedQues={handleClickedQues}
                ></Options>
            </div>
        </div>
    );
};

export default SingleQuestion;