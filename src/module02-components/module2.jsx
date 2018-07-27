import React, {Component} from 'react';
import './module2.css';
import Movie from './Movies/movie'

class Module2 extends Component{
    render(){
      const style = {
          borderBottom:'solid 2px black', 
          paddingBottom:'5px'
      }
      return (
          <div className="section">
            <h1 style={style}> hello module2 { Math.floor(Math.random()*100)} </h1>
            <Movie></Movie> 
          </div>
      )
    }
}

export default Module2;