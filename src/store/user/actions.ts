import { createAsyncThunk } from "@reduxjs/toolkit";
import { provider } from "../../libs";
import { ethers } from "ethers";
import { ITransaction } from "./types";
// import { userActions } from "./reducer";
// import { consoleActions } from "../console";
// import { TRANSACTION_FAILED, TRANSACTION_SUCCESS } from "../console/config";

const gasPrice = provider.getGasPrice();
const gasLimit = ethers.utils.hexlify(100000); // 100 gwei
const signer = provider.getSigner();

export const sendTransaction = createAsyncThunk(
  "user/sendTransaction",
  async ({ from, to, value }: ITransaction) => {
    try {
      // Send Ether
      const tx = await signer.sendTransaction({
        from,
        to,
        value: ethers.utils.parseEther(value),
        gasPrice,
        gasLimit,
        nonce: provider.getTransactionCount(from, "latest"),
        chainId: 5,
      });

      // Wait for transaction to be mined
      await tx.wait();
      // if (tx) {
      //   consoleActions.addString(TRANSACTION_SUCCESS);
      //   userActions.updateUser({
      //     balance: 0,
      //   });
      // }
    } catch {
      // consoleActions.addString(TRANSACTION_FAILED);
    }
  }
);
