import React from 'react';
import { useState } from 'react';
import SingleQuestion from '../SingleQuestion/SingleQuestion';


const Questions = ({ questions }) => {


    const handleClickedQues = (event, id) => {
        const clickedOption = event.target.innerText
        const matched = questions.find(question => question.id === id)
        const correctAnswer = matched.correctAnswer;
        if (clickedOption === correctAnswer) {
            alert("hoise")
        }
        else {
            alert("Hoy nai")
        }
    }

    const handleShowAnswer = (id) => {
        const clickedQeustion = questions.find(question => question.id === id);
        const answer = clickedQeustion.correctAnswer;
        alert(answer)
    }

    return (
        <div className='my-10'>
            {
                questions.map(ques => <SingleQuestion
                    key={ques.id}
                    ques={ques}
                    handleClickedQues={handleClickedQues}
                    handleShowAnswer={handleShowAnswer}
                ></SingleQuestion>)
            }
        </div>
    );
};

export default Questions;