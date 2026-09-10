import {
  useLayoutEffect,
  useState,
} from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";


function App() {

  /*
   * =========================================================
   * REFRESH = OPEN WEBSITE AGAIN
   *
   * ถ้า Refresh อยู่หน้าอื่น เช่น
   *
   * /features
   * /business
   * /guard
   *
   * ให้กลับไปหน้า Home ก่อน
   *
   * แต่ถ้ากด Link ปกติผ่าน React Router
   * จะไม่เข้าตรงนี้
   * =========================================================
   */

  const [
    checkingReload,
    setCheckingReload,
  ] = useState(true);


  useLayoutEffect(() => {

    const navigation =
      performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming | undefined;


    const isReload =
      navigation?.type === "reload";


    /*
     * ---------------------------------------------------------
     * ถ้าเป็น Refresh และไม่ได้อยู่หน้า Home
     * ให้กลับหน้า Home
     *
     * replace() จะไม่สร้าง history เพิ่ม
     * ---------------------------------------------------------
     */

    if (
      isReload &&
      window.location.pathname !== "/"
    ) {

      window.location.replace("/");

      return;
    }


    /*
     * ---------------------------------------------------------
     * ถ้าไม่ได้ต้อง Redirect
     * ให้ Render App ตามปกติ
     * ---------------------------------------------------------
     */

    setCheckingReload(false);

  }, []);


  /*
   * ---------------------------------------------------------
   * ระหว่างกำลัง Redirect
   *
   * ไม่ render หน้าเดิมออกมาก่อน
   * ป้องกัน /features กระพริบก่อนกลับ /
   * ---------------------------------------------------------
   */

  if (checkingReload) {
    return null;
  }


  return (
    <div className="app">

      <Navbar />

      {/* =====================================================
          SCROLL TO TOP
      ===================================================== */}

      <ScrollToTop />


      <AppRoutes />


      <Footer />

    </div>
  );
}


export default App;