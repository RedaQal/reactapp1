import React from 'react'

function ThanksRating({rating}) {
  return (
    <div className='thanksRating'>
      <p>You selected {rating} out 5</p>
    </div>
  )
}

export default ThanksRating