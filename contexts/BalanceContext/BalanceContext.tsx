import { createContext } from "react";

import TBalanceAction from "@/domain/reducers/actions/TBalanceAction";
import TBalanceElement from "@/domain/TBalanceElement";

export const BalanceContext = createContext<{
  balanceElements: TBalanceElement[];
  dispatch: React.Dispatch<TBalanceAction>;
}>({
  balanceElements: [],
  dispatch: () => null,
});
