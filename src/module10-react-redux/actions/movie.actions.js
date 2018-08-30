export const MOVIES_LOADED = '[MOVIES] Movies loaded';
export const SET_MOVIE_UPDATE = '[MOVIES] Set movie for update';
export const MOVIE_UPDATED = '[MOVIES] Movie updated';

export function moviesLoaded(moviesList){
    return  { type:MOVIES_LOADED, payload:{movies:moviesList} };
}

export function setMovieForUpdate(movie){
    return { type:SET_MOVIE_UPDATE, payload:{movie} };
}

export function movieUpdated(movie){
    return { type:MOVIE_UPDATED, payload:{movie} };
}



