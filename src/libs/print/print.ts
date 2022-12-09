import { COMMANDS } from "../../config/commands";
import {
  BALANCE,
  CONNECT,
  DISCONNECT,
  HELP,
  SEND_AMOUNT,
  SEND_AMOUNT_ERROR,
  SEND_WALLET,
  SEND_WALLET_ERROR,
  WALLET,
} from "../../store/console/config";
import { connect, disconnect } from "../wallet-connect/wallet-connect";
import { ConsoleItem, Transaction } from "../../store/console";
import { IUser } from "../../store/user";

export const print = (
  command: ConsoleItem,
  actions: any,
  userData: IUser,
  transaction: Transaction
) => {
  actions.addString(command);
  if (transaction.status) {
    transactionProcess(command.text);
  } else {
    switch (command.text) {
      case COMMANDS.help:
        actions.addString(HELP);
        break;
      case COMMANDS.connect:
        connect(actions.setUser);
        actions.addString(CONNECT);
        break;
      case COMMANDS.disconnect:
        disconnect(actions.setUser);
        actions.addString(DISCONNECT);
        break;
      case COMMANDS.balance:
        actions.addString({
          id: Date.now(),
          isSystem: true,
          text: BALANCE(userData.fullBalance!),
        });
        break;
      case COMMANDS.wallet:
        actions.addString({
          id: Date.now(),
          isSystem: true,
          text: WALLET(userData.address),
        });
        break;
      case COMMANDS.clear:
        actions.clearConsole();
        break;
      case COMMANDS.send:
        actions.toggleTransactionProcess("waitAmount");
        actions.addString(SEND_AMOUNT);
        transactionProcess();
        break;
    }
  }

  function transactionProcess(command?: string) {
    if (transaction.status === "waitAmount") {
      if (typeof +command! === "number" && +command!) {
        actions.setTransactionValue(command);
        actions.toggleTransactionProcess("waitWallet");
        actions.addString(SEND_WALLET);
      } else {
        actions.addString(SEND_AMOUNT_ERROR);
        actions.toggleTransactionProcess(null);
        return;
      }
    } else if (transaction.status === "waitWallet") {
      const regExp = /^0x[0-9a-fA-F]{40}$/i;
      if (regExp.test(command!)) {
        actions.sendTransaction({
          from: userData.address,
          to: command,
          value: transaction.value,
        });
        actions.toggleTransactionProcess(null);
        actions.setTransactionValue("0");
      } else {
        actions.addString(SEND_WALLET_ERROR);
        actions.toggleTransactionProcess(null);
        return;
      }
    }
  }
};
