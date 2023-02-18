import BalanceElementEntity from "@/domain/BalanceElementEntity";
import BalanceElement from "./BalanceElement/BalanceElement";
import classes from "./BalanceList.module.scss";

interface IProps {
  title: "WYDATKI" | "PRZYCHODY";
  balanceElements: BalanceElementEntity[];
}

const BalanceList = ({ title, balanceElements }: IProps) => {
  return (
    <div className={classes.balanceList}>
      <h3>{title}</h3>
      <ul>
        {balanceElements.map((element) => {
          return <li key={element.id}>{element.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default BalanceList;
