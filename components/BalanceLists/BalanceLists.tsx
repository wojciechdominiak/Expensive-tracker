import BalanceList from "@/components/BalanceLists/BalanceList/BalanceList";
import { BalanceContext } from "@/contexts/BalanceContext/BalanceContext";
import { useContext } from "react";
import classes from "./BalanceLists.module.scss";
import FormDialog from "../ui/FormDialog/FormDialog";

const BalanceLists = () => {
  const { balanceElements, dispatch } = useContext(BalanceContext);

  return (
    <div className={classes.balanceLists}>
      <div className={classes.list}>
        <BalanceList balanceElements={balanceElements} title={"PRZYCHODY"} />
        <FormDialog label={"Dodaj przychód"} />
      </div>
      <div className={classes.list}>
        <BalanceList balanceElements={balanceElements} title={"WYDATKI"} />
        <FormDialog label={"Dodaj wydatek"} />
      </div>
    </div>
  );
};

export default BalanceLists;
