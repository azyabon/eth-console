// interface INetwork {
//   chainId: number | null;
//   url: string | undefined;
//   scan: string;
// }

const infuraProjectId: string | undefined =
  process.env.REACT_APP_INFURA_PROJECT_ID;
const networkName: string | undefined = process.env.REACT_APP_RPC_NETWORK_NAME;
// const networkChainId: string | undefined =
//   process.env.REACT_APP_RPC_NETWORK_CHAIN_ID;

export const WALLETS = {
  metamask: "metamask",
  // walletconnect: 'walletconnect',
  // coinbase: 'coinbase',
};

export const NETWORK = {
  goerli: {
    url: `https://goerli.infura.io/v3/${infuraProjectId}`,
    scan: `https://${networkName}.etherscan.io/tx`,
  },
};

export const SIGN_MESSAGES = {
  connection: `Please sign this message to connect to ${process.env.REACT_APP_NAME}.`,
};
