import React from 'react'
import MovieForm from '../Movies/movie-form';
import {connect} from 'react-redux';
import { selectMovie, setMovieForUpdate, movieUpdated } from '../actions/movie.actions';


const MOVIES_URL = `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_MOVIES_PREFIX}`;

class MovieDetailsContainer extends React.Component {

    constructor(props){
        super(props);
    }

    async onMovieSaved(){

        try {
            const updatedMovie = await fetch(`${MOVIES_URL}/${this.props.updatingMovie.id}`,
            {
                method:'PUT',
                headers:{
                    "Content-Type":'application/json',
                },
                body:JSON.stringify(this.props.updatingMovie)
            })
            .then(this.handleResponse);

            this.props.updateMovie(updatedMovie);
            this.props.history.push('/');

        } catch (error) {
            this.handleError(error);
        }
    }

    onMovieChanged(e){
        const propName =e.target.name;
        const updatingMovie = { ...this.props.updatingMovie}; 
        updatingMovie[propName] = e.target.value;
        
        this.props.setMovieForUpdate(updatingMovie);
    }

    async componentDidMount(){
        const movieId = this.props.match.params.id;

        try {
            const movie = await fetch(`${MOVIES_URL}/${movieId}`)
                    .then(this.handleResponse);
            
            this.props.setMovieForUpdate(movie);
        
        } catch (error) {
            // this.handleError(error);
        }
    }

    async handleResponse(res){

        if(res.ok){
            return res.json();
        }

        throw new Error(`network error: ${res.status} - ${res.statusText}`);
    }

    render(){
        let content = null
        if(this.props.updatingMovie){
            content=<React.Fragment>
                <div>
                     <img src={this.props.updatingMovie.poster} alt={this.props.updatingMovie.title} />
                </div>
                <div>
                    <MovieForm
                        title={this.props.updatingMovie.title}
                        year={this.props.updatingMovie.year}
                        changed={this.onMovieChanged.bind(this)}
                        movieSaved={this.onMovieSaved.bind(this)}
                    ></MovieForm>
                </div>
            </React.Fragment>
        }
        return <div>
            {content}
        </div>

    }

    
} 

const mapStateToProps = state => ({
    updatingMovie: state.movies.updatingMovie
})

const mapDispatchToProps = dispatch => ({
    setMovieForUpdate: (movie) => dispatch(setMovieForUpdate(movie)),
    updateMovie: (movie) => dispatch(movieUpdated(movie))
})
export default connect(mapStateToProps,mapDispatchToProps)(MovieDetailsContainer);