import React, {Component} from 'react'
import MovieList, { MovieListWithLifecyclelog } from '../Movies/movie-list/movie-list';
import withLifecyclelog from '../hoc/withLifecycleLog';
import {connect} from 'react-redux';
import { moviesLoaded, selectMovie } from '../actions/movie.actions';

const MOVIES_URL = `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_MOVIES_PREFIX}`;

export class MovieListContainer extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
            selectedMovieInx:-1,
            movies:null,
            hasError:false,
        }
        this.movieForm = {};
    }

    async componentDidMount(){
        
        try {
            const movies = await fetch(`${MOVIES_URL}`)
                    .then(this.handleResponse);
            
            // this.setState({ movies, hasError:false });
            
            this.props.moviesLoaded(movies);
        
        } catch (error) {
            this.handleError(error);
        }

    }

    
    onMovieSelected(selectedInx){
        const movie = this.props.movies[selectedInx];
        this.props.history.push(`/movie/${movie.id}`);
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
    render(){
    
        const error = this.state.hasError ? <div className="error">An error has occurred</div> : null
        return <React.Fragment>
                {error}
                <div className="list">
                    <MovieListWithLifecyclelog
                        selectedInx={this.state.selectedMovieInx}
                        itemSelected={this.onMovieSelected.bind(this)}
                        movies={this.props.movies}  ></MovieListWithLifecyclelog>
                </div>
        </React.Fragment>
    }
} 


const mapStateToProps = state => ({
    movies:state.movies.movieList,
    selectedMovieInx:state.movies.selectedMovieInx
});

const mapDispatchToProps = dispatch => ({
    moviesLoaded: movies => dispatch(moviesLoaded(movies))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withLifecyclelog(MovieListContainer,'Movie-List-Container'));

