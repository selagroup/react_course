import React from 'react'


const MovieForm = (props) => {
    return <div>
        <div>
            <input name="title" placeholder="Enter Title" onChange={props.changed} />
        </div>
        <div>
            <input name="year" placeholder="Enter year" onChange={props.changed} />
        </div>
        <div>
            <button onClick={props.movieSaved} >Save</button>
        </div>
    </div>
}

export default MovieForm;


