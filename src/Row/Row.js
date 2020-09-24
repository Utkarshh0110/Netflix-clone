import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on specific conditions
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* containers- poster */}
      <div className="row__posters">
        {/* poster */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            // If it is a large row then take row_posterLarge as class.
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
