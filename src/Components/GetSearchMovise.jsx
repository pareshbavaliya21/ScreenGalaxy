import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusAction } from "../store/fetchStatusSlice";
import { moviseAction } from "../store/moviseSlice";

const GetSearchMovise = () => {
  const fetchStatus = useSelector((store) => store.fatchstatus);
  const moviseName = useSelector((store) => store.MoviseName);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (!moviseName) return;

    dispatch(fetchStatusAction.markFetchingStart());

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8a484ff4b486f663c3fcc415d0eb6a81&query=${moviseName}`,
      { signal }
    )
      .then((res) => res.json())
      .then(({ results }) => {
        if (results && results.length > 0) {
          // Add the first result to the store if found
          dispatch(moviseAction.addInitialMovise(results[0]));
        } else {
          // Store error image and title when no results are found
          dispatch(
            moviseAction.addInitialMovise({
              title: "No Movie Found",
              poster_path: "/ErrorPage.png", // Path to error image in the public folder
            })
          );
        }
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingFinished());
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        dispatch(fetchStatusAction.markFetchingError());
      });

    return () => {
      controller.abort();
    };
  }, [moviseName, dispatch]);

  return <div></div>;
};

export default GetSearchMovise;
