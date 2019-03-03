import React from 'react';
import PropTypes from 'prop-types';

//**** FUNCTIONAL COMPONENT****/
// const Movie = (props) => {
//     return <div className='movie' >
//         <div>
//             Id: {Math.floor(Math.random()*100)}
//         </div>
//         <div>
//             Title: {props.title}
//         </div>
//         <div>Year: {props.year}</div>  
        
//     </div>
// }

// Movie.propTypes = {
//     title : PropTypes.string.isRequired,
//     year : PropTypes.number,
// }

//**** CLASS COMPONENT****/
class Movie extends React.Component{
    static propTypes = {
        title : PropTypes.string.isRequired,
        year : PropTypes.number,
    }

    render(){
        return <div className='movie' >
                    <div>
                        Id: {Math.floor(Math.random()*100)}
                    </div>
                    <div>
                        Title: {this.props.title}
                    </div>
                    <div>Year: {this.props.year}</div>  
                    
                </div>
    }
}

export default Movie;
