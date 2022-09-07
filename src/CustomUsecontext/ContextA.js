import React from 'react';
import ContextB from './ContextB';

function ContextA({ wow }) {

    console.log(wow);
    return (
        <div className='ContextA'>
            <ContextB />
        </div>
    )
}

export default ContextA