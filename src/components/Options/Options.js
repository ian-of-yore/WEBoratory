import React from 'react';

const Options = ({ options, id, handleAnswer, handleClickedQues }) => {

    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-2 gap-3'>
                <p onClick={() => handleClickedQues(id)}>{options[0]}</p>
                <p onClick={() => handleClickedQues(id)}>{options[1]}</p>
                <p onClick={() => handleClickedQues(id)}>{options[2]}</p>
                <p onClick={() => handleClickedQues(id)}>{options[3]}</p>
            </div>
        </div>
    );
};

export default Options;