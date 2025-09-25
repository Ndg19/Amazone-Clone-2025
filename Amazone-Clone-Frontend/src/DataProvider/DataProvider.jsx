import { createContext, useReducer,useContext } from "react";

export const DataContext = createContext(null);


export const DataProvider = ({ children, reducer, initialState }) => {
  const value = useReducer(reducer, initialState);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export const useStateValue = () => useContext(DataContext);