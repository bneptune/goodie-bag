import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import store from "./store";
import Root from "./components/root";
import AllCandies from "./components/AllCandies";
import SingleCandy from "./components/SingleCandy";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Root} />
        <Route exact path="/candies" component={AllCandies} />
        <Route path="/candies/:candyId" component={SingleCandy} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("main")
);
