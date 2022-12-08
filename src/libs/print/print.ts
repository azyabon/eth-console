import { COMMANDS } from "../../config/commands";
import {
  BALANCE,
  CONNECT,
  DISCONNECT,
  HELP,
  NOT_AUTH,
  SEND_AMOUNT,
  WALLET,
} from "../../store/console/config";
import { connect, disconnect } from "../wallet-connect/wallet-connect";
import { ConsoleItem } from "../../store/console";
import { IUser } from "../../store/user";
import { transaction } from "../transaction/transaction";

export const print = (command: ConsoleItem, actions: any, userData: IUser) => {
  actions.addString(command);
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
      actions.addString(SEND_AMOUNT);
      // transaction();
      break;
  }
};
