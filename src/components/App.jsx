import React from "react";
import Axios from 'axios';
import Movie from './movie';  


class App extends React.Component{

    state = {
        movie: [],
        opacity: 0 
    }
    
    async componentDidMount(){

        const randomPage = Math.round(Math.random()*50)+1; 
        const randomListElement = Math.round(Math.random()*19);  
        const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${randomPage}`; 
        
        const response = await Axios.get(baseURL); 
        
        this.setState({movie: response.data.results[randomListElement]});
    }

    getNewMovie = () =>{
        this.componentDidMount(); 
        this.setState({opacity: 1});
    }
    

    render(){
 
        let style = {opacity : this.state.opacity}; 

        return(
            <React.Fragment>
                    <header className="header">
                        <h1 className="title">RANDOM MOVIE GENERATOR</h1>
                    </header>

                    <div className="main-container">
                        <div className="button-area">
                            <button className="btn" onClick={this.getNewMovie}>Get Random Movie</button>
                        </div>
                        <div className="movie-area" style={style}>
                            <Movie 
                                title = {this.state.movie.title}
                                overview = {this.state.movie.overview} 
                                releaseDate = {this.state.movie.release_date}
                                image = {this.state.movie.poster_path}
                                voteCount = {this.state.movie.vote_count}
                                rating = {this.state.movie.vote_average}
                                opacity = {this.state.opacity}
                            />
                        </div>
                    </div>
            </React.Fragment>
        )
     }
}

export default App; 