import classes from "./UserBlock.module.scss";
import { connect, shorter, disconnect } from "../../../libs";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { Copy } from "../../ui/Copy/Copy";

export const UserBlock = () => {
  const { userData } = useTypedSelector((state) => state.user);
  const { setUser } = useActions();

  return (
    <div className={classes.user__block}>
      {userData.address && (
        <>
          <div className={classes.user__balance}>
            Balance: {userData.balance} ETH
          </div>
          <div>
            Wallet:{" "}
            <Copy text={shorter(userData.address)} copy={userData.address} />
          </div>
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
