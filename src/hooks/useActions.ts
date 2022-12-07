import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { consoleActions } from "../store/console";
import { userActions } from "../store/user";

const allActions = {
  ...consoleActions,
  ...userActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
