import TBalanceElement from "@/domain/TBalanceElement";
import addBalanceAction from "./actions/addBalanceAction";
import balanceActions from "./actions/balanceActions";
import removeBalanceAction from "./actions/removeBalanceAction";
import TBalanceAction from "./actions/TBalanceAction";

export const balanceReducer = (
  state: TBalanceElement[],
  action: TBalanceAction
): TBalanceElement[] => {
  switch (action.type) {
    case balanceActions.add:
      return addBalanceAction(state, action);
    case balanceActions.remove:
      return removeBalanceAction(state, action);
    default:
      return state;
  }
};
