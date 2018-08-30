import React, {Component} from 'react'
import MovieList, { MovieListWithLifecyclelog } from '../Movies/movie-list/movie-list';
import withLifecyclelog from '../hoc/withLifecycleLog';
import {connect} from 'react-redux';
import { moviesLoaded, selectMovie, fetchMovies } from '../actions/movie.actions';

export class MovieListContainer extends Component {
    
    
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.props.fetchMovies(); 
        // try {
        //     const movies = await fetch(`${MOVIES_URL}`)
        //             .then(this.handleResponse);
            
        //     // this.setState({ movies, hasError:false });
            
        //     this.props.moviesLoaded(movies);
        
        // } catch (error) {
        //     this.handleError(error);
        // }

    }

    
    onMovieSelected(selectedInx){
        const movie = this.props.movies[selectedInx];
        this.props.history.push(`/movie/${movie.id}`);
    }
     
    render(){
    
        const error = this.props.hasError ? <div className="error">An error has occurred</div> : null
        const loading = this.props.loading;
        return <React.Fragment>
                {error}
                { loading ?
                    <div className="loading"> Loading Movies...</div>
                    :<div className="list">
                        <MovieListWithLifecyclelog
                            itemSelected={this.onMovieSelected.bind(this)}
                            movies={this.props.movies}  ></MovieListWithLifecyclelog>
                    </div>
                }
        </React.Fragment>
    }
} 

const mapStateToProps = state => ({
    movies:state.movies.movieList,
    hasError: state.movies.hasError,
    loading: state.movies.loading
});

const mapDispatchToProps = dispatch => ({
    fetchMovies:  () => dispatch(fetchMovies())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withLifecyclelog(MovieListContainer,'Movie-List-Container'));

