import React, { useState, useEffect } from 'react'
import './module5.css';
import MovieForm from './Movies/movie-form';
import { MovieList } from './Movies/movie-list/movie-list';

const MOVIES_URL = `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_MOVIES_PREFIX}`;

export default function Module5Hooks(){

    const [selectedMovieInx, setSelectedMovieInx] = useState(-1);
    const [updatingMovie, setUpdatingMovie] = useState(null);
    const [movies, setMovies] = useState(null);
    const [hasError, setHasError] = useState(false);


    useEffect(() => {
        fetch(`${MOVIES_URL}`)
            .then(handleResponse)
            .then((res)=> setMovies(res))
            .catch((err) => handleError(err));
            
        return ()=>{};    
        },
        []
    );

    const onMovieChanged = (e) => { 
        setUpdatingMovie({
            ...updatingMovie,
            [e.target.name]: e.target.value
        });
    }

    const  onMovieSaved = async () => {
        const old_movies = [...movies];
        try {
            const updatedMovie = await fetch(`${MOVIES_URL}/${updatingMovie.id}`,
            {
                method:'PUT',
                headers:{
                    "Content-Type":'application/json',
                },
                body:JSON.stringify(updatingMovie)
            })
            .then(handleResponse);

            old_movies[selectedMovieInx] = updatedMovie;
            setMovies( old_movies );

        } catch (error) {
            handleError(error);
        }
    }
    
    const onMovieSelected = (selectedInx) => {
        setSelectedMovieInx(selectedInx);
        setUpdatingMovie({ ...movies[selectedInx] });
    }

    
    const handleResponse = (res) => {
        if(res.ok){
            return res.json();
        }
        throw new Error(`network error: ${res.status} - ${res.statusText}`);
    }

    function handleError(err){
        console.error(err);
        setHasError(true);
    }

    return (
        <div className="app">
            <h1 style={{borderBottom:'solid 2px black', paddingBottom:'5px'}}>Movie Catalog </h1>
            <section>
                {hasError ? (<div className="error">An error has occurred</div>) : null}
                <div className="list">
                    <MovieList
                        selectedInx={selectedMovieInx}
                        itemSelected={onMovieSelected}
                        movies={movies} >
                    </MovieList>
                </div>
                {(selectedMovieInx >=0) ? ( 
                    <div className="form">
                        <MovieForm 
                            title={updatingMovie.title}
                            year={updatingMovie.year}
                            changed={onMovieChanged}  
                            movieSaved={onMovieSaved} >
                        </MovieForm>
                    </div>
                    ) : (<span>No seleted movie</span>)}
            </section>
        </div>
    )
}
