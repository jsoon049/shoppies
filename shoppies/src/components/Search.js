import React, { useState } from "react";
import {ResultCard} from "./ResultCard";

export const Search = () => {
  const [query, setQuery] = useState(""); //used to update searchQuery
  const [results, setResults] = useState([]); //used to store & update searchResults

  const changeQuery = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(`http://www.omdbapi.com/?apikey=b5fe0991&s=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (!data.Error) {
            //console.log(data.Search[0])
            setResults(data.Search);
            console.log(results)
        }
        else setResults([]);
      });
  };
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={changeQuery}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                // <li key={movie.imdbID}> {movie.Title} {movie.Year}</li>
                <li key={movie.imdbID}> 
                    <ResultCard movie={movie}/>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
