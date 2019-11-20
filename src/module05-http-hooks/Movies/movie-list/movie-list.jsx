import React from 'react'
import Movie from '../movie/movie'
import './movie-list.css'

export const MovieList = (props) => {
    const movies = (props.movies || []).map( (movie,index) => 
    <li key={movie.id}
        className={ index === props.selectedInx ? 'selected' : '' } 
        onClick={(e)=> props.itemSelected(index)} >
        <Movie title={movie.title}
             year={movie.year}
             poster={movie.poster} />
    </li> );

    return <ul className="movie-list">
        {movies}
    </ul>

}