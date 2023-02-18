import BalanceElementEntity from "@/domain/TBalanceElement";
import BalanceElement from "./BalanceElement/BalanceElement";
import classes from "./BalanceList.module.scss";

interface IProps {
  title: "WYDATKI" | "PRZYCHODY";
  balanceElements: BalanceElementEntity[];
}

const BalanceList = ({ title, balanceElements }: IProps) => {
  let sum = 0;

  for (const element of balanceElements) {
    sum += element.amount;
  }

  return (
    <div className={classes.balanceList}>
      <h3>{title}</h3>
      <ul>
        {balanceElements.map((balanceElement) => {
          return (
            <li key={balanceElement.id}>
              <BalanceElement balanceElement={balanceElement} />
            </li>
          );
        })}
      </ul>
      <h4>{sum}</h4>
    </div>
  );
};

export default BalanceList;
