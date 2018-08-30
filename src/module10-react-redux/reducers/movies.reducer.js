import { MOVIES_LOADED, SET_MOVIE_UPDATE, MOVIE_UPDATED } from "../actions/movie.actions";


const initialState =  {
    movieList:[],
    updatingMovie:null
}

export function movies(state= initialState, action){

    switch (action.type){
        case MOVIES_LOADED:
            return { ...state, ...{ movieList:action.payload.movies} };
        case SET_MOVIE_UPDATE:
            return { ...state, ...{updatingMovie:action.payload.movie} }
        case MOVIE_UPDATED:
            const updatingMovie = action.payload.movie;
            const movieInx = state.movieList.findIndex((movie) =>  movie.id === updatingMovie.id);
            if(movieInx >=0){
                const movieArr = [...state.movieList];
                movieArr[movieInx] = updatingMovie;
                return { ...state, ...{movieList:movieArr, updatingMovie:null} }
            } 
        default:
            return state;
    }
}   