import { ConsoleItem } from "./types";

export const OPENING: ConsoleItem[] = [
  {
    id: 1,
    isSystem: true,
    text: "Welcome to eth-console!",
  },
  {
    id: 2,
    isSystem: true,
    text: "Using the console, you can perform most operations related to your MetaMask crypto wallet.",
  },
  {
    id: 3,
    isSystem: true,
    text:
      "To get acquainted with the capabilities of the console, enter '/help' or click on the " +
      "help tab in the site header to access all commands.",
  },
  {
    id: 4,
    isSystem: true,
    text:
      "Also, do not forget to connect your wallet, otherwise the commands will not be available to you.  " +
      "In order to do this, write the command '/connect'",
  },
];

export const HELP = [
  {
    id: 5,
    isSystem: true,
    text: "/connect - command to connect the wallet, after calling this command, a window appears with the connection.",
  },
  {
    id: 6,
    isSystem: true,
    text: "/balance - using this command you can find out your balance in ETH/USD.",
  },
];
