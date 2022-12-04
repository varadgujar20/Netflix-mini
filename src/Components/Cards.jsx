import React from 'react';
 import idiots from '../Resources/idiots.png';

export default function Cards({movie_name,img,desc}) {
  return (
    <center>
    <div className='movie_card'>
        <img src={img} alt=""/>
        <h3>{movie_name}</h3>
        <p className='color'>{desc}</p>
        <button className='btn btn-warning'>Play it</button>
    </div>
    </center>
  )
}
