import { createContext, useContext } from "react";
import sample from "./sample";

const Context = createContext();
export const useGlobalStates = () => useContext(Context);

const Index = ({ children }) => {
  const globalStates = {
    sample: sample(),
  };

  return (
    <Context.Provider value={{ ...globalStates }}>{children}</Context.Provider>
  );
};

export default Index;
