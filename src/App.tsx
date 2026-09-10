import { useLayoutEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

function App() {
  /* Reloads return to Home; client-side navigation keeps the selected route. */

  const [checkingReload, setCheckingReload] = useState(true);

  useLayoutEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0] as
      PerformanceNavigationTiming | undefined;

    const isReload = navigation?.type === "reload";

    if (isReload && window.location.pathname !== "/") {
      window.location.replace("/");

      return;
    }

    setCheckingReload(false);
  }, []);

  /* Avoid flashing the previous page while redirecting. */

  if (checkingReload) {
    return null;
  }

  return (
    <div className="app">
      <Navbar />

      <ScrollToTop />

      <AppRoutes />

      <Footer />
    </div>
  );
}

export default App;
