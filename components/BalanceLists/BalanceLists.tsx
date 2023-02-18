import BalanceList from "@/components/BalanceLists/BalanceList/BalanceList";
import Button from "@/components/ui/Button/Button";
import classes from "./BalanceLists.module.scss";

const BalanceLists = () => {
  return (
    <div className={classes.balanceLists}>
      <div className={classes.list}>
        <BalanceList title={"PRZYCHODY"} />
        <Button
          onClick={() => {
            console.log("Dodaje przychod");
          }}
          label={"Dodaj przychod"}
        />
      </div>
      <div className={classes.list}>
        <BalanceList title={"WYDATKI"} />
        <Button
          modifier="outline"
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
