import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosterAction } from "../store/getPosterSlice";

const GetPoster = ({ id }) => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((store) => store.fatchstatus);
  useEffect(() => {
    // if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    // dispatch(fetchStatusAction.markFetchingStart());
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8a484ff4b486f663c3fcc415d0eb6a81&append_to_response=credits`,
      { signal }
    )
      .then((res) => res.json())
      .then((results) => {
        // dispatch(fetchStatusAction.markFetchDone());
        dispatch(getPosterAction.addInitialMovise(results));
        // dispatch(fetchStatusAction.markFetchingFinished());
      });
    return () => {
      controller.abort();
    };
  }, []);
  return <div></div>;
};
export default GetPoster;
