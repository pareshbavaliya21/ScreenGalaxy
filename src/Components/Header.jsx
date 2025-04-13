import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { moviseNameAction } from "../store/moviseNameSlice";
import GetSearchMovise from "./GetSearchMovise";
import style from "./Header.module.css";
import Movise from "./movise";
// import HomeImage from "../assets/Home.jpg";

const Header = () => {
  const moviseName = useRef();
  const dispatch = useDispatch();
  const [showComponent, setShowComponent] = useState(false);

  const handleMoviseName = (event) => {
    const name = moviseName.current.value;
    setShowComponent(false);
    dispatch(moviseNameAction.addInitialMovise(name));
    setTimeout(() => {
      setShowComponent(true);
    }, 0);
    moviseName.current.value = "";
  };
  // const heroStyle = {
  //   backgroundImage: `url(${HomeImage})`,
  // };
  return (
    <>
      <div className={style.hero}>
        <div className={style.herocontent}>
          <h1 className={style.herotitle}>Welcome to ScreenGalaxy</h1>
          <p className={style.herosubtitle}>
            {/* Millions of movies, TV shows and people to discover. Explore now. */}
            Your ultimate destination for discovering movies, exploring cast
            details, and diving into the world of cinema magic...!
          </p>
          <div className={style.inandbtn}>
            <input
              className={`form-control me-2 ${style.search}`}
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={moviseName}
            />
            <button
              className={`btn btn-outline-info ${style.submit}`}
              type="submit"
              onClick={handleMoviseName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {showComponent && (
        <>
          <GetSearchMovise />
          <Movise />
        </>
      )}
    </>
  );
};
export default Header;
