import React from 'react'

class MovieForm extends React.Component {

    constructor(props){
        super(props);

        this.inputTitle = React.createRef();
    }

    componentDidMount(){
        this.inputTitle.current.focus();
    }

    componentDidUpdate(prevProps){
        
        if(prevProps.movieId !== this.props.movieId)
            this.inputTitle.current.focus();
    }

    render(){
        return <div >
            <div>
                <input name="title" 
                    ref={this.inputTitle}
                    placeholder="Enter Title"
                    onChange={this.props.changed}
                    value={this.props.title}
                    />
            </div>
            <div>
                <input name="year" 
                    placeholder="Enter year" 
                    onChange={this.props.changed}
                    value={this.props.year} />
            </div>
            <div>
                <button onClick={this.props.movieSaved} >Save</button>
            </div>
        </div> 
    }
    
} 

export default MovieForm;

