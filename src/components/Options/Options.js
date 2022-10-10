import React from 'react';

const Options = ({ options }) => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-4'>
                <p>{options[0]}</p>
                <p>{options[1]}</p>
                <p>{options[2]}</p>
                <p>{options[3]}</p>
            </div>
        </div>
    );
};

export default Options;