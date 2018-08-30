import React from 'react'
import MovieForm from '../Movies/movie-form';
import MovieFormUncontrolled from '../Movies/movie-form/movie-form-uncontrolled';
import MovieFormControlled from '../Movies/movie-form/movie-form-controlled.';

const MOVIES_URL = `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_MOVIES_PREFIX}`;

class MovieFormConainer extends React.Component {

   async postNewMovie(formData){
        const res =await fetch(MOVIES_URL,{
            method:'POST',
            body:JSON.stringify(formData),
            headers:{
                'Content-Type':'application/json'
            }
        });
        if(res.ok){
            this.props.history.push('/');
        }


    }

    handleResponse(res){

        if(res.ok){
            return res.json();
        }

        throw new Error(`network error: ${res.status} - ${res.statusText}`);
    }

    render(){
       return <div>
           <h3>Add Movie</h3>
           {/* <MovieFormUncontrolled formSubmitted={this.postNewMovie.bind(this)}
           ></MovieFormUncontrolled> */}
           <MovieFormControlled formSubmitted={this.postNewMovie.bind(this)} ></MovieFormControlled>
           {/* <MovieForm></MovieForm> */}
           </div>
    }
}

export default MovieFormConainer;