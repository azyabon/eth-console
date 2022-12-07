import classes from "./UserBlock.module.scss";
import { connect, shorter, disconnect } from "../../../libs";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

export const UserBlock = () => {
  //TODO: сделать дропдаун и засунуть в хедер по нормальному
  const { userData } = useTypedSelector((state) => state.user);
  const { setUser } = useActions();

  return (
    <div className={classes.user__block}>
      {userData.address && (
        <>
          <div className={classes.user__balance}>
            Balance: {userData.balance} ETH
          </div>
          <div>Wallet: {shorter(userData.address)}</div>
          <div
            className={classes.user__profile}
            onClick={() => {
              disconnect(setUser);
            }}
          >
            Disconnect
          </div>
        </>
      )}
      {!userData.address && (
        <div
          className={classes.user__profile}
          onClick={() => {
            connect(setUser);
          }}
        >
          You aren't connected
        </div>
      )}
    </div>
  );
};
