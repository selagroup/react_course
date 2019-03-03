import React, {Component} from 'react';
import './module3.css';
import MovieModel from './models/movie.model';
import Movie from './Movies/movie'
import MovieForm from './Movies/movie-form';

class Module3 extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            movie:new MovieModel(1, 'Toy Story', 1998)
        }
        this.movieForm = {};



        setTimeout(()=>{
            const newMovie = { ...this.state.movie };
            newMovie.year++;
            this.setState({ movie:newMovie })
        },2000);
    }
    onMovieChanged(e){
        const propName =e.target.name;
        this.movieForm[propName] = e.target.value; 
    }
    onMovieSaved(){
        this.setState( {
            movie: { ...this.movieForm } 
        });
    }

    componentDidMount(){
        console.log('component mounted');
    }

    render(){
        //   const movie = new MovieModel(1, 'Toy Story', 1998);

        const movie = this.state.movie;
        const style = {
            borderBottom:'solid 2px black', 
            paddingBottom:'5px'
        }
        return (
            <div className="app">
                <div className="section">
                    <h1 style={style}>Movie Catalog </h1>
                    <div className="form">
                        <MovieForm changed={this.onMovieChanged.bind(this)}  movieSaved={this.onMovieSaved.bind(this)} ></MovieForm>
                    </div>
                    <Movie title="Die hard" year={1992} ></Movie>
                    <Movie title={movie.title} year={movie.year} ></Movie> 
                </div>
                

            </div>
        )
    }
}

export default Module3;