import React, { useMemo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const Router = ({ routes }: { routes: any[] }): JSX.Element => {
  const pages = useMemo(() => {
    return routes.map(({ path, element: Component, ...props }) => (
      <Route
        key={path}
        path={path}
        {...props}
        element={
          <Suspense>
            <Component />
          </Suspense>
        }
      />
    ));
  }, [routes]);

  return <Routes>{pages}</Routes>;
};
