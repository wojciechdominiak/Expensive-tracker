import { useEffect, useReducer } from "react";

import { balanceReducer } from "@/domain/reducers/balanceReducer";
import { BalanceContext } from "./BalanceContext";

interface IProps {
  children: JSX.Element;
}

const BalanceContextProvider = ({ children }: IProps) => {
  const initalizer = () => {
    let localData: string | null;

    if (typeof window !== "undefined") {
      localData = localStorage.getItem("books");
      return localData ? JSON.parse(localData) : [];
    } else {
      return [];
    }
  };

  const [elements, dispatch] = useReducer(balanceReducer, [], initalizer);

  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(elements));
  }, [elements]);

  return (
    <BalanceContext.Provider value={{ balanceElements: elements, dispatch }}>
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceContextProvider;
