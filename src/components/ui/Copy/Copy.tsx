import classes from "./Copy.module.scss";
import { copy as copyToClipboard } from "../../../libs";
import { CopyIcon } from "../../icons";
import { useEffect, useState } from "react";

type Props = {
  text: string;
  copy: string;
};

export const Copy = ({ text, copy }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [show]);

  return (
    <div className={classes.copy}>
      {text}
      <CopyIcon
        onClick={() => {
          copyToClipboard(copy);
          setShow(true);
        }}
      />
      {show && <div className={classes.copy__notification}>Copied!</div>}
    </div>
  );
};
