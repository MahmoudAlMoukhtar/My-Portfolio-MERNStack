import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import configureStore from "./redux/store/configuerStore";
import {startSetProjectsAction} from "./redux/actions/projectsActions";
import {Provider} from "react-redux";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./index.css";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <div className="absolute inset-0 mx-[50%] flex items-center justify-cneter">
      <ClimbingBoxLoader />
    </div>
  </React.Fragment>
);
store.dispatch(startSetProjectsAction()).then(() => {
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
});
