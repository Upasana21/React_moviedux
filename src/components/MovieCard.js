import React from "react";

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
    const handleError = (e) => {
        e.target.src = "images/default.jpg";
    };

    const getRatingClass = (rating) => {
        if (rating > 8) return "rating-good";
        else if (rating >= 5 && rating < 8) return "rating-ok";
        else return "rating-bad";
    };

    return (
        <div>
            <div key={movie.id} className="movie-card">
                <img
                    src={`images/${movie.image}`}
                    alt={movie.title}
                    onError={handleError}
                />
                <div className="movie-card-info">
                    <h3 className="movie-card-title">{movie.title}</h3>
                    <span className="movie-card-genre">{movie.genre}</span>
                    <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
                        {movie.rating}
                    </span>
                </div>

                <label className="switch">
                    <input type="checkbox"
                        checked={isWatchlisted}
                        onChange={() => toggleWatchlist(movie.id)} />
                    <span className="slider">
                        <span className="slider-label">{isWatchlisted ? 'In Watchlist' : 'Add to watchlist'}</span>
                    </span>
                </label>
            </div>
        </div>
    );
}
