import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';



class Movie extends React.Component{
    render(){
       
        
        return(
            
            <React.Fragment>
                <div className="movie-area-left" >
                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${this.props.image}`} alt="" />
                </div>
                <div className="movie-area-mid">
                
                    <h1 className="movie-title">{this.props.title}</h1>
                    
                    <p className="movie-description">
                        <strong className="description-title">
                            Description
                        </strong>
                        <br />
                        <br />
                        {this.props.overview}
                    </p>
                </div>
                <div className="movie-area-right">
                
                    <p className="movie-area-right-items">
                        <FontAwesomeIcon icon={faCalendar} color="#02170c"  /> 
                        Release Date:{this.props.releaseDate}
                    </p>
                    
                    <p className="movie-area-right-items">
                        <FontAwesomeIcon icon={faStar} color="orange" /> 
                        Rating : {this.props.rating}/10
                    </p>
                    
                    <p className="movie-area-right-items">
                        <FontAwesomeIcon icon={faUsers} color="aqua" />
                        Votes : {this.props.voteCount}
                    </p>
                </div>
            </React.Fragment>
        )
    }
}


export default Movie; 