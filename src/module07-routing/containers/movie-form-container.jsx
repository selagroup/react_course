import React from 'react'
import MovieForm from '../Movies/movie-form';

class MovieFormConainer extends React.Component {

    render(){
       return <div>
           <h3>Add Movie</h3>
           <MovieForm></MovieForm>
           </div>
    }
}

export default MovieFormConainer;