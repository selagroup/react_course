export const MOVIES_LOADED = '[MOVIES] Movies loaded';
export const SET_MOVIE_UPDATE = '[MOVIES] Set movie for update';
export const MOVIE_UPDATED = '[MOVIES] Movie updated';
export const MOVIES_LOAD =  '[MOVIES] Movies load';
export const MOVIES_LOAD_ERROR = '[MOVIES] Movies load error'

const MOVIES_URL = `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_MOVIES_PREFIX}`;

export function moviesLoad(){
    return {type: MOVIES_LOAD}
}
export function moviesLoadError(){
    return {type: MOVIES_LOAD_ERROR}
}
export function moviesLoaded(moviesList){
    return  { type:MOVIES_LOADED, payload:{movies:moviesList} };
}

export function setMovieForUpdate(movie){
    return { type:SET_MOVIE_UPDATE, payload:{movie} };
}

export function movieUpdated(movie){
    return { type:MOVIE_UPDATED, payload:{movie} };
}


export function fetchMovies(){


    return async (dispatch) =>{

        dispatch(moviesLoad());

        try {
            const movies = await fetch(`${MOVIES_URL}`)
                .then(handleResponse);

            dispatch(moviesLoaded(movies));
            return movies;

        } catch (error) {
            handleError(error);
            dispatch(moviesLoadError());
            return;
        }
    }

}

function handleResponse(res){

    if(res.ok){
        return res.json();
    }

    throw new Error(`network error: ${res.status} - ${res.statusText}`);
}

function handleError(err){
    console.error(err);
    
}  




