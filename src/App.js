import React from "react";
import axios from "axios";

import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  // getMovies = async () => {
  //   const movie = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json")
  //   console.log(movie);
  //   console.log(movie.data.data.movies);
  // }
  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies, isLoading: false}) // {movies:movies} {moives} 는 완전히 같은 기능임
  }
  componentDidMount() {
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return <div>{isLoading ? "Loading" : movies.map(movie=>(
       <Movie
      key={movie.id}
      id={movie.id} 
      year={movie.year} 
      title={movie.title} 
      summary={movie.summary} 
      poster={movie.medium_cover_image}/>
    ))}</div>
  }
}

export default App;

