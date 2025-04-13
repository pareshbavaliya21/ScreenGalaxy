import { useSelector } from "react-redux";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import MoviseContainer from "./Components/MoviseContainer.jsx";
import { Route, Routes } from "react-router-dom";
import MovisePosterCast from "./Components/MovisePosterCast.jsx";
import GetCastDetail from "./Components/GetCastDetail.jsx";
import PosterCast from "./Components/PosterCast.jsx";
import MovisePoster from "./Components/MovisePoster.jsx";

function App() {
  const tamil = useSelector((store) => store.tamilMovises);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MoviseContainer />
              <Footer />
            </>
          }
        />
        <Route path="/movisepostercast/:id" element={<MovisePosterCast />} />
        <Route path="/castdetail/:id" element={<GetCastDetail />} />
        <Route path="/movisedetail/:id" element={<PosterCast />} />
      </Routes>
    </>
  );
}

export default App;
