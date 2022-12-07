import classes from "./Header.module.scss";
import { UserBlock } from "../../containers";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__item}>CONSOLE</div>
        <div className={classes.header__item}>CONVERT</div>
        <div className={classes.header__item}>NFTs</div>
      </div>
      <UserBlock />
    </header>
  );
};
