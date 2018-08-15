import React, {Component} from 'react'
import './movie-list.css'
import MovieCard from '../movie/movie-card';
import withLifecyclelog from '../../hoc/withLifecycleLog';
import ThemeContext from '../../context/theme.context';

class MovieList extends Component {

    constructor(props){
        // console.log( '[Movie List] constructor');
        super(props);
    }

    // componentDidMount(){
    //     console.log( '[Movie List] component mounted');
    // }

    shouldComponentUpdate(nextProps, nextState){
        // console.log('[Movie List] should component update')
        //return true; //false;
        return nextProps.movies !== this.props.movies ||
            nextProps.selectedInx !== this.props.selectedInx;
    }

    // componentDidUpdate(){
    //     console.log('[Movie List] component did update')
    // }

    render(){
        // console.log( '[Movie List] rendering');
        
       const movies =  <ThemeContext.Consumer >
        {(theme) => {
                return  (this.props.movies || []).map( (movie,index) => 
                    <li key={movie.id} 
                        className={ index === this.props.selectedInx ? `${theme} selected` : `${theme}` } 
                        onClick={(e)=> this.props.itemSelected(index)} >
                        <MovieCard title={movie.title}
                            year={movie.year}
                            poster={movie.poster} />
                    </li> );
            }
        }
        

        </ThemeContext.Consumer>

        return <ul className="movie-list">
            {movies}
        </ul>
    }

}

export default MovieList;
export const MovieListWithLifecyclelog = withLifecyclelog(MovieList,'Movie List');