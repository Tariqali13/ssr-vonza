import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "react-router-dom";
import window from "global";
import App from "./components/App";
import configureStore from "./store/configureStore";
// import { browserHistory as history, } from "react-router";
// import registerServiceWorker from './registerServiceWorker';
import ExecutionEnvironment from "exenv";
import { createMemoryHistory, createBrowserHistory } from "history";
export let history;
if (ExecutionEnvironment.canUseDOM) {
  history = createBrowserHistory();
} else {
  createMemoryHistory();
}

const store = configureStore(window.__REDUX_STATE__ || {});

const AppBundle = (
  <ReduxProvider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </ReduxProvider>
);

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(AppBundle, document.getElementById("root"));
  });
};

// registerServiceWorker();
