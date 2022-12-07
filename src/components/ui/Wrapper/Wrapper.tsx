import React, { useEffect } from "react";

import classes from "./Wrapper.module.scss";
import { connect } from "../../../libs";
import { useActions } from "../../../hooks/useActions";

interface Props {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  const { setUser } = useActions();

  useEffect(() => {
    connect(setUser);
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.app}>{children}</div>
    </div>
  );
};
