import classes from "./ConsoleString.module.scss";
import consoleArrow from "../../../assets/img/next.png";
import systemAlert from "../../../assets/img/alert.png";

type Props = {
  text: string;
  isSystem: boolean;
};

export const ConsoleString = ({ text, isSystem }: Props) => {
  return (
    <div className={classes.console__string}>
      <img
        src={isSystem ? systemAlert : consoleArrow}
        alt="arrow"
        className={classes.console__arrow}
      />
      <div className={classes.console__text}>{text}</div>
    </div>
  );
};
