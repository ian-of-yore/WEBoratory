import React from 'react';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const Questions = ({ questions }) => {
    return (
        <div className='my-10'>
            {
                questions.map(ques => <SingleQuestion key={ques.id} ques={ques}></SingleQuestion>)
            }
        </div>
    );
};

export default Questions;