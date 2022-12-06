import { lazy } from "react";

import { URLS } from "./urls";

export const routes = [
  {
    path: URLS.HOME_PAGE,
    element: lazy(
      async () => await import("../components/pages/Console/Console")
    ),
  },
];
