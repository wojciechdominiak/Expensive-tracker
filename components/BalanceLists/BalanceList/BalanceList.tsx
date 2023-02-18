import classes from "./BalanceList.module.scss";

interface IProps {
  title: "WYDATKI" | "PRZYCHODY";
}

const BalanceList = ({ title }: IProps) => {
  return (
    <div className={classes.balanceList}>
      <h3>{title}</h3>
    </div>
  );
};

export default BalanceList;
