import React from 'react'

const movie = (props) => {
  return (
    <>
    <div className='movie'>
        <img className='image' src={props.img} alt='Movie Poser'></img>
        <div className='title'>{props.title}</div>
        <div className='year'>{props.year}</div>
    </div>
    </>
  )
}

export default movie
