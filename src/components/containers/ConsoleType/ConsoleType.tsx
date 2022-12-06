import React, { useRef, useState } from "react";
import classes from "./ConsoleType.module.scss";
import consoleArrow from "../../../assets/img/next.png";
import { useActions } from "../../../hooks/useActions";

export const ConsoleType = () => {
  const textRef = useRef<HTMLInputElement | null>(null);
  const [text, setText] = useState("");
  // const [currentHeight, setCurrentHeight] = useState(0);
  const { addString } = useActions();

  // const resize = () => {
  //   if (currentHeight === +textRef.current?.scrollHeight!!) {
  //     return;
  //   }
  //
  //   // @ts-ignore
  //   textRef.current.style.height = `${
  //     +textRef.current?.style.height.slice(0, -2)!! +
  //     +textRef.current?.scrollHeight!!
  //   }px`;
  //   setCurrentHeight(textRef.current?.scrollHeight!!);
  // };

  const addItem = (event: any) => {
    if (event.key === "Enter") {
      const data = {
        id: Date.now(),
        isSystem: false,
        text: textRef.current?.value!!,
      };
      addString(data);
      setText("");
    }
  };

  return (
    <div className={classes.console__type}>
      <div className={classes.console__hint}>
        <img
          src={consoleArrow}
          alt="arrow"
          className={classes.console__arrow}
        />
        <span>commands:</span>
      </div>
      {/*<textarea*/}
      {/*  onChange={(event) => {*/}
      {/*    resize();*/}
      {/*    setText(event.target.value);*/}
      {/*  }}*/}
      {/*  ref={textRef}*/}
      {/*  value={text}*/}
      {/*  className={classes.console__input}*/}
      {/*  onKeyDown={addItem}*/}
      {/*/>*/}
      <input
        onChange={(event) => {
          // resize();
          setText(event.target.value);
        }}
        ref={textRef}
        value={text}
        className={classes.console__input}
        onKeyDown={addItem}
        type="text"
      />
    </div>
  );
};
