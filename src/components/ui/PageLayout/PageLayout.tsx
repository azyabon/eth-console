import classes from "./PageLayout.module.scss";
import React from "react";
import { UserBlock } from "../../containers";

type Props = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <div className={classes.page__layout}>
      <UserBlock />
      {children}
    </div>
  );
};
