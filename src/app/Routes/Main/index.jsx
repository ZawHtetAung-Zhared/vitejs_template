import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NotFound = lazy(() => import("@/pages/NotFound"));
const Sample = lazy(() => import("@/pages/Sample"));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<NotFound />} />
      <Route path="sample" element={<Sample />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const Index = () => {
  return (
    render && (
      <>
        <MainRoutes />
      </>
    )
  );
};

export default Index;
