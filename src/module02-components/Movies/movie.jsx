import React from 'react';

const Movie = () => {
    return <div className='movie' >
        <h3>Movie Details </h3>
        <div>
            Id: {Math.floor(Math.random()*100)}
        </div>
        <div>
            Title: Toy Story
        </div>
        <div>Year: 1998</div>  
        
    </div>
}

export default Movie;
