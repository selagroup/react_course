import React from 'react'
import './movie.css';

const Movie = (props) => {
    return <div className='movie' >
        <div className="poster">
            <img src={props.poster} />
        </div>
        <div className="info">
            <div>{props.title}</div>
            <div>{props.year}</div>  
        </div>
        
    </div>
}

export default Movie;
