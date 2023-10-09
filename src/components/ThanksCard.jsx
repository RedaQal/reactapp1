import React from 'react'
import ThanksIcon from './thanksicon'
import ThanksRating from './thanksRating'
import CardBody from './CardBody'

function ThanksCard({rating}) {
  return (
    <div className='card thanks-card'>
      <ThanksIcon />
      <ThanksRating rating = {rating}/>
      <CardBody title="Thank you!"/>
    </div>
  )
}

export default ThanksCard