import React, { useState } from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState(8);
    const [text, setText] = useState('This is a default rating of 8');
    return (
        <div className='card'>
            <div className="num-display">{rating}</div>
            <div className="text-display">
                {text}
            </div>
        </div>
    )
}

export default FeedbackItem