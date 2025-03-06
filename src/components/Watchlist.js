import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ watchlist, movies, toggleWatchlist }) {
    return (
        <div>
            <h1 className="title">Your Watchlist</h1>
            <div className="watchlist">
                {
                    watchlist.map((id) => {
                        const movie = movies.find(movie => movie.id === id)
                        return <MovieCard movie={movie} isWatchlisted={true} toggleWatchlist={toggleWatchlist}></MovieCard>
                    })
                }
            </div>
        </div>
    );
}