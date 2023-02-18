import TBalanceElement from "@/domain/TBalanceElement";
import TBalanceAction from "./TBalanceAction";

const addBalanceAction = (state: TBalanceElement[], action: TBalanceAction) => {
  return [
    ...state,
    {
      name: action.element.name,
      id: action.element.id,
      amount: action.element.amount,
      date: action.element.date,
    },
  ];
};

export default addBalanceAction;
