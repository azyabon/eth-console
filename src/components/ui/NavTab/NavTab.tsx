import classes from "./NavTab.module.scss";
import { Link } from "react-router-dom";

type Props = {
  text: string;
  link: string;
};

export const NavTab = ({ text, link }: Props) => {
  return (
    <Link to={link} className={classes.navtab}>
      {text}
    </Link>
  );
};
