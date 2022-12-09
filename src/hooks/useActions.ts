import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { consoleActions } from "../store/console";
import { userActions } from "../store/user";
import { sendTransaction } from "../store/user/actions";

const allActions = {
  ...consoleActions,
  ...userActions,
  sendTransaction,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
