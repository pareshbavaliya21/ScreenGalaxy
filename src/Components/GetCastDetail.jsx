import { useEffect, useState } from "react";
import styles from "./GetCastDetail.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const GetCastDetail = () => {
  const { id } = useParams();
  const [personDetails, setPersonDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // Fetch person details
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=8a484ff4b486f663c3fcc415d0eb6a81`,
      { signal }
    )
      .then((res) => res.json())
      .then((results) => {
        setPersonDetails(results);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Error fetching person details:", err);
        }
      });

    // Fetch movie credits
    fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=8a484ff4b486f663c3fcc415d0eb6a81`,
      { signal }
    )
      .then((res) => res.json())
      .then((results) => {
        setMovieCredits(results.cast || []);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Error fetching movie credits:", err);
        }
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  if (!personDetails) {
    return <div className={styles.loader}>Loading...</div>;
  }

  const {
    name,
    biography,
    birthday,
    place_of_birth,
    also_known_as,
    profile_path,
    gender,
    known_for_department,
    imdb_id,
    popularity,
  } = personDetails;

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <ArrowLeft size={24} />
      </button>

      <div className={styles.profile}>
        {profile_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
            alt={name}
            className={styles.profileImage}
          />
        )}
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.birthInfo}>
          <strong>Born:</strong> {birthday || "N/A"} <br />
          <strong>Place:</strong> {place_of_birth || "N/A"} <br />
          <strong>Gender:</strong> {gender === 1 ? "Female" : "Male"} <br />
          <strong>Popularity:</strong> {popularity.toFixed(2)}
        </p>
      </div>

      <div className={styles.details}>
        <h3 className={styles.sectionTitle}>Biography</h3>
        <p className={styles.biography}>
          {biography || "Biography not available."}
        </p>

        <h3 className={styles.sectionTitle}>Also Known As</h3>
        <ul className={styles.akaList}>
          {also_known_as.map((alias, index) => (
            <li key={index} className={styles.akaItem}>
              {alias}
            </li>
          ))}
        </ul>

        <h3 className={styles.sectionTitle}>Additional Info</h3>
        <p>
          <strong>Known For:</strong> {known_for_department} <br />
          <strong>IMDb:</strong>{" "}
          <a
            href={`https://www.imdb.com/name/${imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imdbLink}
          >
            View on IMDb
          </a>
        </p>
      </div>

      <div className={styles.movieCredits}>
        <h3 className={styles.sectionTitle}>Movies</h3>
        <div className={styles.movieScroll}>
          {movieCredits.length > 0 ? (
            movieCredits.map((movie) => (
              <div key={movie.id} className={styles.movieItem}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                      : "https://via.placeholder.com/200x300?text=No+Image"
                  }
                  alt={movie.title}
                  className={styles.moviePoster}
                />
                <div className={styles.movieDetails}>
                  <h4>{movie.title}</h4>
                  <p>
                    <strong>Release Date:</strong> {movie.release_date || "N/A"}
                  </p>
                  <p>
                    <strong>Character:</strong> {movie.character || "N/A"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No movies available for this cast member.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetCastDetail;
