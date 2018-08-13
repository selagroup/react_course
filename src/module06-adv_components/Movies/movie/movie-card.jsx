import React from 'react'
import Card from '../../Shared/Card/card';
import Movie from './movie';
import './movie.css';

const MovieCard = (props) => <Card>
    <div className="movie">
        <Movie poster={props.poster} 
                title={props.title}
                year={props.year} ></Movie>
    </div>
</Card>

export default MovieCard