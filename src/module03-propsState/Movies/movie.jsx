import React from 'react';

const Movie = (props) => {
    return <div className='movie' >
        <h3>Movie Details </h3>
        <div>
            Id: {Math.floor(Math.random()*100)}
        </div>
        <div>
            Title: {props.title}
        </div>
        <div>Year: {props.year}</div>  
        
    </div>
}

export default Movie;
