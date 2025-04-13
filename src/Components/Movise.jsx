import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./Movise.module.css";

const Movise = () => {
  const movise = useSelector((store) => store.Movises);
  const navigate = useNavigate();

  const handlePosterClick = (selectedMovise) => {
    navigate(`/movisedetail/${selectedMovise.id}`);
  };

  const isError = movise.title === "No Movie Found"; // Check if the title indicates an error

  return (
    <div className={style.bodycontainer}>
      <div className={style.scrollcontainer}>
        {isError ? (
          <div className={style.errorcontainer}>
            <img
              src={`${import.meta.env.BASE_URL}Images/ErrorPage.png`}
              alt="Error"
              className={style.errorimage}
            />
            <div className={style.errortitle}>{movise.title}</div>
          </div>
        ) : (
          <div
            className={style.postercontainer}
            onClick={() => handlePosterClick(movise)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300/${movise.poster_path}`}
              alt={movise.title}
              className={style.posterimage}
            />
            <div className={style.postertitle}>{movise.title}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movise;
