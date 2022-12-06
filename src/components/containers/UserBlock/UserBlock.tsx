import classes from "./UserBlock.module.scss";
import { shorter } from "../../../libs";

export const UserBlock = () => {
  return (
    <div className={classes.user__block}>
      <div className={classes.user__balance}>Balance: 3 ETH</div>
      <div>Wallet: {shorter("0xa0a773db7f4234ae0c2a53a3fdf382049e01c63b")}</div>
    </div>
  );
};
