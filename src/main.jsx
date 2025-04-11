import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import moviseStore from "./store/index.js";
import GetMovise from "./Components/GetMovise.jsx";
import GetCastDetail from "./Components/GetCastDetail.jsx";
import GetSearchMovise from "./Components/GetSearchMovise.jsx";
import { BrowserRouter } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:
//   }
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={moviseStore}>
      <BrowserRouter>
        <GetMovise></GetMovise>
        {/* <GetCastDetail /> */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
