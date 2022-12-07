import { COMMANDS } from "../../config/commands";
import { CONNECT, DISCONNECT, HELP } from "../../store/console/config";
import { connect, disconnect } from "../wallet-connect/wallet-connect";
import { ConsoleItem } from "../../store/console";

export const print = (command: ConsoleItem, actions: any) => {
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
      console.log("balance");
      break;
    case COMMANDS.wallet:
      console.log("wallet");
      break;
    case COMMANDS.clear:
      actions.clearConsole();
      break;
  }
};
