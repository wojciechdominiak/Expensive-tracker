import BalanceElementEntity from "@/domain/TBalanceElement";

interface IProps {
  balanceElement: BalanceElementEntity;
}

const BalanceElement = ({ balanceElement }: IProps) => {
  return <div>{balanceElement.name}</div>;
};

export default BalanceElement;
