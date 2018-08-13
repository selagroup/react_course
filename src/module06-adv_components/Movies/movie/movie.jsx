import React from 'react'
const Movie = (props) => {
    return <React.Fragment>
                <div className="poster">
                    <img src={props.poster} />
                </div>
                <div className="info">
                    <div>{props.title}</div>
                    <div>{props.year}</div>  
                </div>
            </React.Fragment>
           
}

export default Movie;
