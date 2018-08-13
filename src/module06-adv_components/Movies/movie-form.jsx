import React from 'react'

export  const MovieForm = (props) => {    
        return <div >
            <div>
                <input name="title" 
                    placeholder="Enter Title"
                    onChange={props.changed}
                    value={props.title}
                    />
            </div>
            <div>
                <input name="year" 
                    placeholder="Enter year" 
                    onChange={props.changed}
                    value={props.year} />
            </div>
            <div>
                <button onClick={props.movieSaved} >Save</button>
            </div>
        </div> 
}

export default MovieForm;

