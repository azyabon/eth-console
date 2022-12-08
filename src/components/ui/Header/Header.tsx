import classes from "./Header.module.scss";
import { UserBlock } from "../../containers";
import { NavTab } from "../NavTab/NavTab";

const TABS = [
  {
    text: "CONSOLE",
    link: "/",
  },
  {
    text: "CONVERT",
    link: "/convert",
  },
  {
    text: "NFTs Burn",
    link: "/burn",
  },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        {TABS.map((tab, index) => (
          <NavTab key={index} text={tab.text} link={tab.link} />
        ))}
      </div>
      <div className={classes.header__user}>
        <UserBlock />
      </div>
    </header>
  );
};
