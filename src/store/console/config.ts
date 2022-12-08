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
      "In order to do this, write the print '/connect'.",
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
    "/clear - clear console. \n" +
    "/send - in order to make a transfer transaction. \n",
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
export const SEND_AMOUNT = {
  id: 8,
  isSystem: true,
  text: "Enter the amount you want to send:",
};

export const SEND_WALLET = {
  id: 9,
  isSystem: true,
  text: "Enter the wallet to which you want to transfer:",
};

export const SEND_AMOUNT_ERROR = {
  id: 10,
  isSystem: true,
  text:
    "There are not enough funds in your account! \n" + "Operation canceled.",
};

export const SEND_WALLET_ERROR = {
  id: 11,
  isSystem: true,
  text: "You can't send yourself! \n" + "Operation canceled.",
};

export const NOT_AUTH = {
  id: 12,
  isSystem: true,
  text: "Сonnect wallet to use this command.",
};

export const META_NOT_INSTALLED = {
  id: 13,
  isSystem: true,
  text: "We can't detect your wallet, you need to install it.",
};

export const BALANCE = (balance: number) => `Your full balance ${balance}`;

export const WALLET = (address: string) => `Your full wallet ${address}`;
