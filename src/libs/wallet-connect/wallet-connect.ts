import { ethers } from "ethers";
import { IUser } from "../../store/user";

export const provider = new ethers.providers.Web3Provider(
  window.ethereum,
  "any"
);

export const connect = async (setUser: (data: IUser) => void) => {
  if (window.ethereum) {
    await provider.send("eth_requestAccounts", []);
    const address = await provider.getSigner().getAddress();
    let balance: any = await provider.getBalance(address);
    balance = +ethers.utils.formatEther(balance);
    localStorage.setItem("wallet", address);

    setUser({
      id: Date.now(),
      address,
      balance: balance ? balance.toFixed(5) : 0,
      fullBalance: balance,
    });
  } else {
    console.log("MetaMask is not detected");
  }
};

export const disconnect = async (setUser: (data: IUser) => void) => {
  localStorage.removeItem("wallet");
  setUser({ id: null, address: "", balance: null, fullBalance: null });
};
