import BalanceList from "@/components/BalanceLists/BalanceList/BalanceList";
import Button from "@/components/ui/Button/Button";
import { BalanceContext } from "@/contexts/BalanceContext/BalanceContext";
import balanceActions from "@/domain/reducers/actions/balanceActions";
import { useContext } from "react";
import classes from "./BalanceLists.module.scss";

const BalanceLists = () => {
  const { balanceElements, dispatch } = useContext(BalanceContext);

  return (
    <div className={classes.balanceLists}>
      <div className={classes.list}>
        <BalanceList balanceElements={balanceElements} title={"PRZYCHODY"} />
        <Button
          //TODO Dodac pojawienie się modalu
          onClick={() => {
            dispatch({
              type: balanceActions.add,
              element: {
                name: "test",
                id: "1",
                date: "03-01-2202",
                amount: 10.42,
              },
            });
          }}
          label={"Dodaj przychod"}
        />
      </div>
      <div className={classes.list}>
        <BalanceList balanceElements={balanceElements} title={"WYDATKI"} />
        <Button
          modifier="outline"
          //TODO Dodac pojawienie się modalu
          onClick={() => {
            console.log("Dodaje wydatek");
          }}
          label={"Dodaj wydatek"}
        />
      </div>
    </div>
  );
};

export default BalanceLists;
