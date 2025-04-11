import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bollywoodMoviseAction } from "../store/bollywoodMoviseSlice";
import { CastAction } from "../store/CastSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";
import { hollywoodMoviseAction } from "../store/hollywoodMoviseSlice";
import { kannadaMovisesAction } from "../store/kannadaMovisesSlice";
import { malayalamMoviseAction } from "../store/malayalamMoviseSlice";
import { moviseAction } from "../store/moviseSlice";
import { tamilMovisesAction } from "../store/tamilMovisesSlice";
import { teluguMovisesAction } from "../store/teluguMovisesSlice";

const GetMovise = () => {
  const fetchStatus = useSelector((store) => store.fatchstatus);

  const moviseName = useSelector((store) => store.MoviseName);

  // tamil
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markFetchingStart());
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=8a484ff4b486f663c3fcc415d0eb6a81&with_original_language=ta",
      signal
    )
      .then((res) => res.json())
      .then(({ results }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(tamilMovisesAction.addInitialMovise(results));
        dispatch(fetchStatusAction.markFetchingFinished());
      });
    return () => {
      controller.abort();
    };
  }, []);

  //telugu
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markFetchingStart());
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=8a484ff4b486f663c3fcc415d0eb6a81&with_original_language=te",
      signal
    )
      .then((res) => res.json())
      .then(({ results }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(teluguMovisesAction.addInitialMovise(results));
        dispatch(fetchStatusAction.markFetchingFinished());
      });
    return () => {
      controller.abort();
    };
  }, []);

  //malayalam
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markFetchingStart());
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=8a484ff4b486f663c3fcc415d0eb6a81&with_original_language=ml",
      signal
    )
      .then((res) => res.json())
      .then(({ results }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(malayalamMoviseAction.addInitialMovise(results));
        dispatch(fetchStatusAction.markFetchingFinished());
      });
    return () => {
      controller.abort();
    };
  }, []);

  //kannada
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markFetchingStart());
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=8a484ff4b486f663c3fcc415d0eb6a81&with_original_language=kn",
      signal
    )
      .then((res) => res.json())
      .then(({ results }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(kannadaMovisesAction.addInitialMovise(results));
        dispatch(fetchStatusAction.markFetchingFinished());
      });
    return () => {
      controller.abort();
    };
  }, []);

  //  hollywood
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markFetchingStart());
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=8a484ff4b486f663c3fcc415d0eb6a81&with_genres=28&language=hi",
      signal
    )
      .then((res) => res.json())
      .then(({ results }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(hollywoodMoviseAction.addInitialMovise(results));
        dispatch(fetchStatusAction.markFetchingFinished());
      });
    return () => {
      controller.abort();
    };
  }, []);

  //bollywood
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markFetchingStart());
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=8a484ff4b486f663c3fcc415d0eb6a81&with_genres=28,35,18&with_original_language=hi ",
      signal
    )
      .then((res) => res.json())
      .then(({ results }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(bollywoodMoviseAction.addInitialMovise(results));
        dispatch(fetchStatusAction.markFetchingFinished());
      });
    return () => {
      controller.abort();
    };
  }, []);

  //cast
  const MOVIE_ID = "770906";
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markFetchingStart());
    fetch(
      `https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?api_key=8a484ff4b486f663c3fcc415d0eb6a81`,
      signal
    )
      .then((res) => res.json())
      .then(({ cast }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(CastAction.addInitialMovise(cast));
        dispatch(fetchStatusAction.markFetchingFinished());
      });
    return () => {
      controller.abort();
    };
  }, []);

  return <div></div>;
};
export default GetMovise;
