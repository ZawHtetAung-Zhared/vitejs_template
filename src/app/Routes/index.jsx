import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "@/pages/Loading";
// import ErrorBoundary from "./ErrorBoundary.jsx";
import ScrollToHash from "./ScrollToHash.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

const MainRoutes = lazy(() => import("./Main/index.jsx"));

const Index = () => {
  return (
    // <ErrorBoundary>
    <BrowserRouter basename="/">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="*" element={<ScrollToTop />} />
        </Routes>
        <Routes>
          <Route path="*" element={<MainRoutes />} />
        </Routes>
        <Routes>
          <Route path="*" element={<ScrollToHash />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    // </ErrorBoundary>
  );
};

export default Index;
