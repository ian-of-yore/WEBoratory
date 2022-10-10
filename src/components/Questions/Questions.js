import React from 'react';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const Questions = ({ questions }) => {

    console.log(questions)

    const handleClickedQues = (event, id) => {
        const clickedOption = event.target.innerText
        const matched = questions.find(question => question.id === id)
        const correctAnswer = matched.correctAnswer;
        console.log(clickedOption, correctAnswer)
    }

    return (
        <div className='my-10'>
            {
                questions.map(ques => <SingleQuestion
                    key={ques.id}
                    ques={ques}
                    handleClickedQues={handleClickedQues}
                ></SingleQuestion>)
            }
        </div>
    );
};

export default Questions;