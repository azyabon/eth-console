import { ethers } from "ethers";
import { provider } from "../wallet-connect/wallet-connect";

const gasPrice = provider.getGasPrice();
const gasLimit = ethers.utils.hexlify(100000); // 100 gwei
const signer = provider.getSigner();

export const transaction = async (from: string, to: string, value: string) => {
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
    console.log(tx);
  } catch (error) {
    console.log(error);
  }
};
