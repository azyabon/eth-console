import classes from "./PageLayout.module.scss";
import React from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const PageLayout = ({ children, title }: Props) => {
  return (
    <div className={classes.page__layout}>
      <div className={classes.page__title}>{title}</div>
      {children}
    </div>
  );
};
