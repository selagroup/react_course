import React, {PureComponent} from 'react'
import './module6.css';
import MovieForm from './Movies/movie-form';
import MovieList, { MovieListWithLifecyclelog } from './Movies/movie-list/movie-list';

const MOVIES_URL = `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_MOVIES_PREFIX}`;

class Module6 extends PureComponent{
    
    constructor(props){
        console.log('[Module 6] constructor');
        super(props);
        this.state = {
            selectedMovieInx:-1,
            updatingMovie:null,
            movies:null,
            hasError:false
        }
        this.movieForm = {};
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[Module 6] got props')
        return null;
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Module 6] should component update');

    //     return nextState.movies !== this.state.movies; //; //false;
    // }

    componentDidUpdate(){
        console.log('[Module 6] component did update')
    }
    
    onMovieChanged(e){
        const propName =e.target.name;
        const updatingMovie = { ...this.state.updatingMovie}; 
        updatingMovie[propName] = e.target.value;
        
        this.setState({updatingMovie});
    }
    async onMovieSaved(){

        const movies = [...this.state.movies];

        try {
            const updatedMovie = await fetch(`${MOVIES_URL}/${this.state.updatingMovie.id}`,
            {
                method:'PUT',
                headers:{
                    "Content-Type":'application/json',
                },
                body:JSON.stringify(this.state.updatingMovie)
            })
            .then(this.handleResponse);

            movies[this.state.selectedMovieInx] = updatedMovie;
            this.setState( { movies });

        } catch (error) {
            this.handleError(error);
        }
    }
    onMovieSelected(selectedInx){
        const updatingMovie = { ...this.state.movies[selectedInx] };
        this.setState({ selectedMovieInx:selectedInx, updatingMovie});
        this.movieForm={};
    }

    async componentDidMount(){
        console.log('[Module 6] component mounted');
        
        try {
            const movies = await fetch(`${MOVIES_URL}`)
                    .then(this.handleResponse);
            
            this.setState({ movies, hasError:false }); 
        
        } catch (error) {
            this.handleError(error);
        }

    }

    handleResponse(res){

        if(res.ok){
            return res.json();
        }

        throw new Error(`network error: ${res.status} - ${res.statusText}`);
    }

    handleError(err){
        console.error(err);
        this.setState({ hasError: true })
    }  

    refresh(){
        const movies = this.state.movies; 
        this.setState( { movies });
    }

    render(){
        //   const movie = new MovieModel(1, 'Toy Story', 1998);
        // const movie = this.state.movie;

        console.log('[Module 6] component render');
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

        const error = this.state.hasError ? <div className="error">An error has occurred</div> : null

        return (
            <div className="app">
                <h1 style={style}>Movie Catalog </h1>
                <section>
                    {error}
                    <div className="list">
                        <button onClick={this.refresh.bind(this)} >Refresh</button>

                        <MovieListWithLifecyclelog
                             selectedInx={this.state.selectedMovieInx}
                             itemSelected={this.onMovieSelected.bind(this)}
                             movies={this.state.movies} ></MovieListWithLifecyclelog>
                    </div>
                    {form}
                </section>
                
                

            </div>
        )
    }
}

export default Module6;