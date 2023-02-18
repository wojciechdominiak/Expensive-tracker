import TBalanceElement from "@/domain/TBalanceElement";
import TBalanceAction from "./TBalanceAction";

const removeBalanceAction = (
  state: TBalanceElement[],
  action: TBalanceAction
) => {
  return state.filter((element) => element.id !== action.element.id);
};

export default removeBalanceAction;
