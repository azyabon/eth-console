import classes from "./ConsoleList.module.scss";
import { ConsoleString } from "../../ui";
import { ConsoleType } from "../ConsoleType/ConsoleType";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

export const ConsoleList = () => {
  const { consoleList } = useTypedSelector((state) => state.console);

  return (
    <div className={classes.console__list}>
      {consoleList.map((string) => (
        <ConsoleString
          key={string.id}
          text={string.text}
          isSystem={string.isSystem}
        />
      ))}
      <ConsoleType />
    </div>
  );
};
