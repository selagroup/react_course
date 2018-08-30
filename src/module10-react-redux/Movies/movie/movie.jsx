import React from 'react'
import {Link} from 'react-router-dom'
const Movie = (props) => {
    return <React.Fragment>
                <div className="poster">
                    <img src={props.poster} />
                </div>
                <div className="info">
                    <div>
                       <Link to={`/movie/${props.movieId}`} > {props.title}</Link>
                    </div>
                    <div>{props.year}</div>  
                </div>
            </React.Fragment>
           
}

export default Movie;
