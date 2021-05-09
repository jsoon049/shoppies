import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
      localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
      localStorage.setItem('watched', JSON.stringify(state.watched))
  }, [state])

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
      dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        addMovieToWatchlist, //don't need to do addMovieToWatchlist: addMovieToWatchlist bc it is the same name
        removeMovieFromWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
