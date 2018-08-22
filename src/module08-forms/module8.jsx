import React, {PureComponent} from 'react'
import './module8.css';
import ThemeContext from './context/theme.context';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'
import { MovieListContainer } from './containers/movie-list-container';
import MovieFormConainer from './containers/movie-form-container';
import MovieDetailsContainer from './containers/movie-details-container';



class Module8 extends PureComponent{
    
    constructor(props){
        console.log('[Module 8] constructor');
        super(props);
        this.state = {
            theme:'light'
        }
        this.movieForm = {};
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[Module 8] got props')
        return null;
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Module 8] should component update');

    //     return nextState.movies !== this.state.movies; //; //false;
    // }

    componentDidUpdate(){
        console.log('[Module 8] component did update')
    }
    


    componentDidMount(){
        console.log('[Module 8] component mounted');
    }

    handleResponse(res){

        if(res.ok){
            return res.json();
        }

        throw new Error(`network error: ${res.status} - ${res.statusText}`);
    }



    refresh(){
        const movies = this.state.movies; 
        this.setState( { movies });
    }

    toggleTheme(){

        this.setState(()=>{
            return  { theme: this.state.theme === 'light' ? 'dark' : 'light' }
        });
    }

    render(){
        //   const movie = new MovieModel(1, 'Toy Story', 1998);
        // const movie = this.state.movie;
        const style = {
            borderBottom:'solid 2px black', 
            paddingBottom:'5px'
        }

        console.log('[Module 8] component render');
    
        return (
            <BrowserRouter>
                <ThemeContext.Provider value={this.state.theme} >
                    <div className="app">
                        <h1 style={style}>Movie Catalog </h1>
                        <div>
                            <nav>
                                <ul>
                                    <li><NavLink to="/" exact >Home</NavLink> </li>
                                    <li><NavLink to="/movie/new" exact >New Movie</NavLink> </li>
                                </ul>
                            </nav>
                        </div>
                        <section>
                            <div>
                                <button onClick={this.refresh.bind(this)} >Refresh</button>
                                <button onClick={this.toggleTheme.bind(this)}>Toggle Theme</button>
                            </div>
                            <Switch>
                                <Route path="/" exact component={MovieListContainer} ></Route>
                                <Route path="/movie/new" exact component={MovieFormConainer} ></Route>
                                <Route path="/movie/:id" component={MovieDetailsContainer}>></Route> 
                                <Route render={()=> <h2>Not Found...</h2>}></Route>
                            </Switch>
                        </section>
                    </div>
                </ThemeContext.Provider>
            </BrowserRouter>

        )
    }
}

export default Module8;