import React from 'react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
// import { ToastContainer, toast } from 'react-toastify';
import SingleQuestion from '../SingleQuestion/SingleQuestion';



const Questions = ({ questions }) => {

    const handleClickedQues = (event, id) => {

        const clickedOption = event.target.innerText;
        const matched = questions.find(question => question.id === id);
        const correctAnswer = matched.correctAnswer.split(" ")

        const actualAnswerArr = correctAnswer.filter(item => item !== "");
        const actualAnswerStr = actualAnswerArr.join(" ");

        if (clickedOption === actualAnswerStr) {
            toast("Correct Answer")
        }
        else {
            toast("Wrong Answer")
        }
    }

    const handleShowAnswer = (id) => {
        const clickedQeustion = questions.find(question => question.id === id);
        const answer = clickedQeustion.correctAnswer;
        toast(answer)
    }

    return (
        <div className='my-10'>
            <div>
                <Toaster />
            </div>
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