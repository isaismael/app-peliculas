import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getMoviesImg } from "../utils/getMoviesImg";

import '../pages/MovieDetails.css'

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);

  const [generos, setGeneros] = useState([]);

  const imageUrl = getMoviesImg(movie.poster_path, 500)

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data)
      setGeneros(data.genres[0])
    });
  }, [movieId]);

  return (
    <div className="detailsContainer">
      <img src={imageUrl} alt={movie.title} className= "col movieImage" />
      <div className="col movieDetails">
        <p className="title">
          <strong>Título: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Género: </strong>
          {generos.name}
        </p>
        <p>
          <strong>Descripción: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
};
