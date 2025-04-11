import { useSelector } from "react-redux";
import style from "./MovisePoster.module.css";
import { useState, useEffect } from "react";

const MovisePoster = () => {
  const Poster = useSelector((store) => store.poster);
  const [trailerUrl, setTrailerUrl] = useState(null);

  const genreNames =
    Poster && Poster.genres
      ? Poster.genres.map((genre) => genre.name).join(", ")
      : "";

  const crewName =
    Poster && Poster.credits && Poster.credits.crew[0]
      ? Poster.credits.crew[0].name
      : "";

  // Use the backdrop path from the API response
  const backdropImageUrl =
    Poster && Poster.backdrop_path
      ? `https://image.tmdb.org/t/p/original/${Poster.backdrop_path}`
      : null;

  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  // Fetch trailer URL
  useEffect(() => {
    const fetchTrailer = async () => {
      if (Poster && Poster.id) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${Poster.id}/videos?api_key=8a484ff4b486f663c3fcc415d0eb6a81&language=en-US`
          );
          const data = await response.json();
          const trailer = data.results.find(
            (video) => video.type === "Trailer" && video.site === "YouTube"
          );
          if (trailer) {
            setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);
          }
        } catch (error) {
          console.error("Error fetching trailer:", error);
        }
      }
    };

    fetchTrailer();
  }, [Poster]);

  return (
    <div
      className={style.moviecontainer}
      style={{
        backgroundImage: backdropImageUrl ? `url(${backdropImageUrl})` : "none",
      }}
    >
      <div className={style.poster}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${Poster.poster_path}`}
          alt={Poster.title}
        />
      </div>
      <div className={style.details}>
        <div className={style.title}>{Poster.title}</div>
        <div className={style.info}>
          <span>Release Date:</span> {Poster.release_date} |{" "}
          <span>Genres:</span> {genreNames} | <span>Duration:</span>{" "}
          {Poster.runtime ? formatRuntime(Poster.runtime) : "N/A"}
        </div>
        <div className={style.rating}>
          <div className={style.score}>{Poster.popularity}%</div>
          <span>User Score</span>
        </div>
        <div className={style.overview}>
          <p>
            <em>{Poster.tagline}</em>
          </p>
          <p>{Poster.overview}</p>
        </div>
        <div className={style.crew}>
          <div className={style.crewtitle}>
            {crewName ? crewName : "Unknown Director"}
          </div>
          Director, Writer
        </div>
        {trailerUrl && (
          <div className={style.trailer}>
            <button
              className={style.trailerButton}
              onClick={() => window.open(trailerUrl, "_blank")}
            >
              Watch Trailer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovisePoster;
