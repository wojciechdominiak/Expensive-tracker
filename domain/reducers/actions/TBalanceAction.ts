import TBalanceElement from "@/domain/TBalanceElement";
import balanceActions from "./balanceActions";

interface TBalanceAction {
  type: balanceActions;
  element: TBalanceElement;
}

export default TBalanceAction;
