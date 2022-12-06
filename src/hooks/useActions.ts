import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { consoleActions } from "../store/console";

const allActions = {
  ...consoleActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
