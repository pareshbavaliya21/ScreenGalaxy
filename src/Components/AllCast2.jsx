import { useSelector } from "react-redux";
import style from "./AllCast2.module.css";

const AllCast = () => {
  const posterData = useSelector((store) => store.poster);

  const castList = posterData?.credits?.cast || [];

  return (
    <div className={style.bodycontainer}>
      <div className={style.scrollcontainer}>
        {castList.map((cast) => (
          <div key={cast.id} className={style.postercontainer}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
              className={style.posterimage}
              alt={cast.name}
            />
            <div className={style.postertitle}>
              {cast.name}
              <br />
              {cast.character}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCast;
