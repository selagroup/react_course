import React from 'react'
import Card from '../../Shared/Card/card';
import Movie from './movie';
import './movie.css';
import ThemeContext from '../../context/theme.context';

const MovieCard = (props) => <ThemeContext.Consumer>
    {(theme) => <Card>
        <div className={`${theme} movie`}>
            <Movie poster={props.poster} 
                    title={props.title}
                    year={props.year} ></Movie>
        </div>
    </Card>

    
    }
</ThemeContext.Consumer>

export default MovieCard