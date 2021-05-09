import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    watchlist
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.imdbID === movie.imdbID); //check if movie already added to watchlist

  const watchlistDisabled = storedMovie ? true : false
  
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.Title}</h3>
          <h4 className="release-date">{movie.Year ? movie.Year : "-"}</h4>
        </div>
      </div>

      {watchlist.length === 5 ? (
           <div className="controls">
           <button
             className="btn"
             disabled={true}
             onClick={() => addMovieToWatchlist(movie)}
           >
             Nominate
           </button>
         </div>
        ) : (
          <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
           Nominate
          </button>
        </div>
      )}

      {/* <div className="controls">
        <button
          className="btn"
          disabled={watchlistDisabled}
          onClick={() => addMovieToWatchlist(movie)}
        >
          Add to Watchlist
        </button>
      </div> */}
      
    </div>
  );
};
