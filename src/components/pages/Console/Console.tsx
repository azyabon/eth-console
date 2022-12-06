import React, { useEffect } from "react";
import { ethers } from "ethers";
import { NETWORK } from "../../../config/networks";
import { PageLayout } from "../../ui";
import { ConsoleList } from "../../containers";

const provider = new ethers.providers.JsonRpcProvider(NETWORK.goerli.url);
const address = "0xa0a773db7F4234AE0c2a53A3FdF382049E01c63B";

const Console = () => {
  const main = async () => {
    const balance = await provider.getBalance(address);
    console.log(
      `\nETH Balance of ${address} ---> ${ethers.utils.formatEther(
        balance
      )} ETH\n`
    );
  };

  useEffect(() => {
    main();
  }, []);

  return (
    <PageLayout>
      <ConsoleList />
    </PageLayout>
  );
};

export default Console;
