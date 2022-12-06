import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../router";
import { routes } from "../../config/routes";

import "../../assets/styles/main.scss";
import { Wrapper } from "../ui";
import { Provider } from "react-redux";
import { store } from "../../store";

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/*<Header />*/}
        <Wrapper>
          <Router routes={routes} />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
};
