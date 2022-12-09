export const OPENING = [
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
  isSystem: true,
  text: "You are connected :)",
};

export const DISCONNECT = {
  isSystem: true,
  text: "You are disconnected :(",
};
export const SEND_AMOUNT = {
  isSystem: true,
  text: "Enter the amount you want to send:",
};

export const SEND_WALLET = {
  isSystem: true,
  text: "Enter the wallet to which you want to transfer:",
};

export const SEND_AMOUNT_ERROR = {
  isSystem: true,
  text:
    "/*/*/*/*/*/*/*/*/*/*/*/*/ \n" +
    "Enter the amount correctly! \n" +
    "Operation canceled. \n" +
    "/*/*/*/*/*/*/*/*/*/*/*/*/",
};

export const SEND_WALLET_ERROR = {
  isSystem: true,
  text:
    "/*/*/*/*/*/*/*/*/*/*/ \n" +
    "Wrong address! \n" +
    "Operation canceled. \n" +
    "/*/*/*/*/*/*/*/*/*/*/",
};

export const NOT_AUTH = {
  isSystem: true,
  text: "Сonnect wallet to use this command.",
};

export const META_NOT_INSTALLED = {
  isSystem: true,
  text: "We can't detect your wallet, you need to install it.",
};

export const TRANSACTION_FAILED = {
  isSystem: true,
  text: "Something went wrong, the transaction was aborted :(",
};

export const TRANSACTION_SUCCESS = {
  isSystem: true,
  text: "Something went wrong, the transaction was aborted :(",
};

export const BALANCE = (balance: number) => `Your full balance ${balance}`;

export const WALLET = (address: string) => `Your full wallet ${address}`;
