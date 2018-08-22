import React from 'react'
import MovieForm from '../Movies/movie-form';

const MOVIES_URL = `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_MOVIES_PREFIX}`;

class MovieDetailsContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            movie:null,
            updatingMovie:null,

        }
    }

    async onMovieSaved(){

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

            this.props.history.push('/');

        } catch (error) {
            this.handleError(error);
        }
    }

    onMovieChanged(e){
        const propName =e.target.name;
        const updatingMovie = { ...this.state.updatingMovie}; 
        updatingMovie[propName] = e.target.value;
        
        this.setState({updatingMovie});
    }

    async componentDidMount(){
        const movieId = this.props.match.params.id;

        try {
            const movie = await fetch(`${MOVIES_URL}/${movieId}`)
                    .then(this.handleResponse);
            
            const updatingMovie = movie;
            this.setState({ movie, updatingMovie }); 
        
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
        if(this.state.movie){
            content=<React.Fragment>
                <div>
                     <img src={this.state.movie.poster} alt={this.state.movie.title} />
                </div>
                <div>
                    <MovieForm
                        title={this.state.updatingMovie.title}
                        year={this.state.updatingMovie.year}
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

export default MovieDetailsContainer;