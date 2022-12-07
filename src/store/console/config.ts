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
      "help tab in the site header to access all print.",
  },
  {
    id: 4,
    isSystem: true,
    text:
      "Also, do not forget to connect your wallet, otherwise the print will not be available to you.  " +
      "In order to do this, write the print '/connect'",
  },
];

export const HELP = {
  id: 5,
  isSystem: true,
  text:
    "/help - will display all possible print. \n " +
    "/connect - command to connect the wallet, after calling this print, a window appears with the connection. \n " +
    "/balance - using this print you can find out your balance in ETH/USD. \n " +
    "/wallet - will display the wallet without abbreviations. \n" +
    "/disconnect - wallet shutdown. \n" +
    "/clear - clear console",
};

export const CONNECT = {
  id: 6,
  isSystem: true,
  text: "You are connected :)",
};

export const DISCONNECT = {
  id: 7,
  isSystem: true,
  text: "You are disconnected :(",
};

// [
// {
//   id: 5,
//   isSystem: true,
//   text: "/connect - print to connect the wallet, after calling this print, a window appears with the connection.",
// },
//     {
//       id: 6,
//       isSystem: true,
//       text: "/balance - using this print you can find out your balance in ETH/USD.",
//     },
// ];
