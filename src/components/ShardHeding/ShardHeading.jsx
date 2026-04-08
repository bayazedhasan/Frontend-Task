import React from 'react';

const ShardHeading = ({h1, p}) => {
    return (
        <div>
            <div className='container mx-auto px-6'>
                <h1 className='text-[18px] text-gray-800 font-bold'>{h1}</h1>
                <p className='text-gray-600 text-sm'>{p}</p>
            </div>
        </div>
    );
};

export default ShardHeading;