import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { moviseNameAction } from "../store/moviseNameSlice";
import GetSearchMovise from "./GetSearchMovise";
import style from "./Header.module.css";
import Movise from "./movise";

const Header = () => {
  const moviseName = useRef();
  const dispatch = useDispatch();
  const [showComponent, setShowComponent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [isTyping, setIsTyping] = useState(false); // State for tracking user input

  const handleMoviseName = () => {
    const name = moviseName.current.value.trim();

    if (name === "") {
      setErrorMessage("Please enter a movie name."); // Set error message
      setIsTyping(false); // Reset typing state
      return;
    }

    setErrorMessage(""); // Clear error message
    setShowComponent(false);
    dispatch(moviseNameAction.addInitialMovise(name));
    setTimeout(() => {
      setShowComponent(true);
    }, 0);
    moviseName.current.value = "";
    setIsTyping(false); // Reset typing state after submission
  };

  const handleInputChange = () => {
    const name = moviseName.current.value.trim();
    setIsTyping(name !== ""); // Set typing state based on input value
  };

  return (
    <>
      <div
        className={style.hero}
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}Images/Home.jpg)`,
          opacity: isTyping || errorMessage ? 0.7 : 1, // Adjust opacity dynamically
          transition: "opacity 0.3s ease", // Smooth transition for opacity
        }}
      >
        <div className={style.herocontent}>
          <h1 className={style.herotitle}>Welcome to ScreenGalaxy</h1>
          <p className={style.herosubtitle}>
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
              onChange={handleInputChange} // Track input changes
            />
            <button
              className={`btn btn-outline-info ${style.submit}`}
              type="submit"
              onClick={handleMoviseName}
            >
              Search
            </button>
          </div>
          {errorMessage && (
            <p className={style.error}>{errorMessage}</p> // Display error message
          )}
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
