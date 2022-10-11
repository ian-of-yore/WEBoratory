import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SingleQuestion from '../SingleQuestion/SingleQuestion';



const Questions = ({ questions }) => {

    const handleClickedQues = (event, id) => {

        const clickedOption = event.target.innerText;
        const matched = questions.find(question => question.id === id);
        const correctAnswer = matched.correctAnswer.split(" ")

        const actualAnswerArr = correctAnswer.filter(item => item !== "");
        const actualAnswerStr = actualAnswerArr.join(" ");

        if (clickedOption === actualAnswerStr) {
            toast.success("Correct Answer", {
                duration: 500
            },
            )
        }
        else {
            toast.error("Wrong Answer",
                { duration: 500 },
            )
        }
    }

    const handleShowAnswer = (id) => {
        const clickedQeustion = questions.find(question => question.id === id);
        const answer = clickedQeustion.correctAnswer;
        // toast(answer, {
        //     duration: 1000,
        // })
        toast.custom((t) => (
            <div className="text-black text-center bg-white border-2 text-2xl py-2 px-10 rounded-xl mt-20">
                {answer}
            </div>
        ), { duration: 1000 })
    }

    return (
        <div className='my-10'>
            <div>
                <Toaster

                    toastOptions={{
                        success: {
                            style: {
                                background: 'green',
                                color: 'white',
                            },
                        },
                        error: {
                            style: {
                                background: 'red',
                                color: 'white',
                            },
                        },
                    }}
                />
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