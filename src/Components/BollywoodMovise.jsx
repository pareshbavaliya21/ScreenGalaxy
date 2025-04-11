import { useNavigate } from "react-router-dom";
import style from "./MoviseContainer.module.css";

const BollywoodMovise = ({ movises }) => {
  const navigate = useNavigate();

  const handlePosterClick = (moviseId) => {
    navigate(`/movisepostercast/${moviseId}`);
  };

  return (
    <>
      <h2 className={style.heading}>Bollywood Movies</h2>
      {!movises || movises.length === 0 ? (
        <div className={style.loadercontainer}>
          <div className={style.loader}></div>
          <p>Loading movies...</p>
        </div>
      ) : (
        <div className={style.scrollcontainer}>
          {movises.map((movise) => (
            <div
              key={movise.id}
              className={style.postercontainer}
              onClick={() => handlePosterClick(movise.id)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300/${movise.poster_path}`}
                className={style.posterimage}
                alt={movise.title}
              />
              <div className={style.postertitle}>{movise.title}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default BollywoodMovise;
