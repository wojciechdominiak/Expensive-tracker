import BalanceList from "@/components/BalanceLists/BalanceList/BalanceList";
import Button from "@/components/ui/Button/Button";
import BalanceElementEntity from "@/domain/BalanceElementEntity";
import classes from "./BalanceLists.module.scss";

const DUMMY_EXPENSES: BalanceElementEntity[] = [
  {
    name: "First",
    date: "2022-12-03",
    id: "1",
    amount: 10.99,
  },
  {
    name: "Second",
    date: "2022-12-03",
    id: "2",
    amount: 22.99,
  },
];

const DUMMY_INCOME: BalanceElementEntity[] = [
  {
    name: "First",
    date: "2022-12-03",
    id: "1",
    amount: 13.99,
  },
  {
    name: "Second",
    date: "2022-12-03",
    id: "2",
    amount: 22.99,
  },
];

const BalanceLists = () => {
  return (
    <div className={classes.balanceLists}>
      <div className={classes.list}>
        <BalanceList balanceElements={DUMMY_INCOME} title={"PRZYCHODY"} />
        <Button
          onClick={() => {
            console.log("Dodaje przychod");
          }}
          label={"Dodaj przychod"}
        />
      </div>
      <div className={classes.list}>
        <BalanceList balanceElements={DUMMY_EXPENSES} title={"WYDATKI"} />
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
