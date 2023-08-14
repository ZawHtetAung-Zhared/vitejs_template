import { Translate } from "@/translations";
import "./index.scss";

const Index = () => {
  return (
    <section className="not-found-section">
      <h1>{Translate("pages.NotFound.title")}</h1>
    </section>
  );
};

export default Index;
