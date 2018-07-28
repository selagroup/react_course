import React, {Component} from 'react'
import './module4.css';
import MovieForm from './Movies/movie-form';
import { MOVIES } from './data/movies.mock';
import { MovieList } from './Movies/movie-list/movie-list';

class Module4 extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            selectedMovieInx:-1,
            updatingMovie:null,
            movies:[...MOVIES]
        }
        this.movieForm = {};

        // setTimeout(()=>{
        //     const newMovie = { ...this.state.movie };
        //     newMovie.year++;
        //     this.setState({ movie:newMovie })
        // },2000);
    }
    onMovieChanged(e){
        const propName =e.target.name;
        const updatingMovie = { ...this.state.updatingMovie}; 
        updatingMovie[propName] = e.target.value;
        
        this.setState({updatingMovie});
    }
    onMovieSaved(){

        const movies = [...this.state.movies];
        movies[this.state.selectedMovieInx] = this.state.updatingMovie;

        this.setState( { movies });
    }
    onMovieSelected(selectedInx){
        const updatingMovie = { ...this.state.movies[selectedInx] };
        this.setState({ selectedMovieInx:selectedInx, updatingMovie});
        this.movieForm={};
    }

    componentDidMount(){
        console.log('component mounted');
    }

    render(){
        //   const movie = new MovieModel(1, 'Toy Story', 1998);
        // const movie = this.state.movie;
        const style = {
            borderBottom:'solid 2px black', 
            paddingBottom:'5px'
        }

        let form;
        if(this.state.selectedMovieInx >=0){
            const updatingMovie = this.state.updatingMovie; 
            form=<div className="form">
                <MovieForm 
                    title={updatingMovie.title}
                    year={updatingMovie.year}
                    changed={this.onMovieChanged.bind(this)}  
                    movieSaved={this.onMovieSaved.bind(this)} ></MovieForm>
            </div>
        }   
        else{
            form=null;
        }

        return (
            <div className="app">
                <h1 style={style}>Movie Catalog </h1>
                <section>
                    <div className="list">
                        <MovieList
                             selectedInx={this.state.selectedMovieInx}
                             itemSelected={this.onMovieSelected.bind(this)}
                             movies={this.state.movies} ></MovieList>
                    </div>
                    {form}
                </section>
                
                

            </div>
        )
    }
}

export default Module4;