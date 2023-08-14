import ContextReducers from "@/contextReducers";
import Routes from "./Routes";
import "./index.scss";

const Index = () => {
  if (process.env.REACT_APP_ENV === "staging") {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
  }
  return (
    <ContextReducers>
      <Services />
      <Routes />
    </ContextReducers>
  );
};

export default Index;
