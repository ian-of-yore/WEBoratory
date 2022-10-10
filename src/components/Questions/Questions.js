import React from 'react';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const Questions = ({ questions }) => {
    return (
        <div>
            {
                questions.map(ques => <SingleQuestion key={ques.id} ques={ques}></SingleQuestion>)
            }
        </div>
    );
};

export default Questions;