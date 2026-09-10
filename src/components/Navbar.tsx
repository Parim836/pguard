import { useLanguage } from "../LanguageContext";
import {
  useLayoutEffect,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  Menu,
  X,
} from "lucide-react";

import gsap from "gsap";

import LanguageSwitcher from "./LanguageSwitcher";


function Navbar() {
  const { t } = useLanguage();


  const [
    open,
    setOpen,
  ] = useState(false);


  const location =
    useLocation();

  useLayoutEffect(() => {

    const introOverlay =
      document.querySelector(
        ".brand-intro-overlay"
      ) as HTMLElement | null;


    const intro =
      document.querySelector(
        ".brand-intro"
      ) as HTMLElement | null;


    const logoSpace =
      document.querySelector(
        ".nav-logo-space"
      ) as HTMLElement | null;


    const navbar =
      document.querySelector(
        ".navbar"
      ) as HTMLElement | null;


    if (
      !introOverlay ||
      !intro ||
      !logoSpace ||
      !navbar
    ) {
      return;
    }


    /*
     * =========================================================
     * MARK INTRO AS RUNNING
     * =========================================================
     */

    document.body.dataset.pguardIntro =
      "running";


    /*
     * =========================================================
     * GET NAVBAR POSITION
     * =========================================================
     */

    const getNavbarPosition = () => {

      const rect =
        logoSpace.getBoundingClientRect();


      return {
        x:
          rect.left +
          rect.width / 2 -
          window.innerWidth / 2,

        y:
          rect.top +
          rect.height / 2 -
          window.innerHeight / 2,
      };

    };


    /*
     * =========================================================
     * INITIAL STATE
     * =========================================================
     */

    gsap.set(
      introOverlay,
      {
        opacity: 1,

        backgroundColor:
          "#ffffff",
      }
    );


    gsap.set(
      intro,
      {
        xPercent: -50,
        yPercent: -50,

        x: 0,
        y: 0,

        scale: 1.65,

        opacity: 1,

        transformOrigin:
          "center center",
      }
    );


    /*
     * Logo icon
     */

    gsap.set(
      ".intro-logo",
      {
        opacity: 0,

        scale: 0.7,
      }
    );


    /*
     * PGUARD letters
     */

    gsap.set(
      ".logo-letter",
      {
        opacity: 0,

        y: 35,
      }
    );


    /*
     * Tagline
     */

    gsap.set(
      ".intro-tagline",
      {
        opacity: 0,

        y: 10,
      }
    );


    /*
     * Navbar
     */

    gsap.set(
      navbar,
      {
        opacity: 0,
      }
    );


    /*
     * =========================================================
     * TIMELINE
     * =========================================================
     */

    const tl =
      gsap.timeline();


    /*
     * ---------------------------------------------------------
     * 1. Logo
     * ---------------------------------------------------------
     */

    tl.to(
      ".intro-logo",
      {
        opacity: 1,

        scale: 1,

        duration: 0.8,

        ease: "power3.out",
      }
    );


    /*
     * ---------------------------------------------------------
     * 2. PGUARD ทีละตัว
     * ---------------------------------------------------------
     */

    tl.to(
      ".logo-letter",
      {
        opacity: 1,

        y: 0,

        duration: 0.42,

        stagger: 0.1,

        ease: "power3.out",
      },
      "-=0.2"
    );


    /*
     * ---------------------------------------------------------
     * 3. Tagline
     * ---------------------------------------------------------
     */

    tl.to(
      ".intro-tagline",
      {
        opacity: 1,

        y: 0,

        duration: 0.45,

        ease: "power3.out",
      },
      "-=0.25"
    );


    /*
     * ---------------------------------------------------------
     * 4. ค้างกลางจอ
     * ---------------------------------------------------------
     */

    tl.to(
      {},
      {
        duration: 0.5,
      }
    );


    /*
     * ---------------------------------------------------------
     * 5. ย้าย Logo เข้า Navbar
     * ---------------------------------------------------------
     */

    const position =
      getNavbarPosition();


    tl.to(
      intro,
      {
        x:
          position.x,

        y:
          position.y,

        scale: 1,

        duration: 1.4,

        ease: "power4.inOut",
      }
    );


    /*
     * ---------------------------------------------------------
     * 6. Navbar แสดง
     *
     * สำคัญ:
     *
     * ตอน Navbar เริ่มแสดง
     * ให้ Home แสดงข้อความพร้อมกันทันที
     * ---------------------------------------------------------
     */

    tl.to(
      navbar,
      {
        opacity: 1,

        duration: 0.7,

        ease: "power2.out",

        onStart: () => {

          window.dispatchEvent(
            new Event(
              "pguard-intro-complete"
            )
          );

        },
      },
      "<+0.7"
    );


    /*
     * ---------------------------------------------------------
     * 7. พื้นหลังสีขาวค่อย ๆ หาย
     *
     * ไม่ได้ fade ทั้ง Overlay
     *
     * เพราะ Logo ต้องยังคงอยู่ตรง Navbar
     *
     * เราจึง fade เฉพาะ background
     * จากสีขาว → โปร่งใส
     * ---------------------------------------------------------
     */

    tl.to(
      introOverlay,
      {
        backgroundColor:
          "rgba(255,255,255,0)",

        duration: 0.6,

        ease: "power2.out",
      },
      "<+0.15"
    );


    /*
     * ---------------------------------------------------------
     * 8. INTRO COMPLETE
     *
     * จุดนี้หมายถึง Intro ทั้งหมดจบจริง ๆ
     * ---------------------------------------------------------
     */

    tl.call(() => {

      document.body.dataset.pguardIntro =
        "complete";

    });


    /*
     * =========================================================
     * RESIZE
     *
     * หลัง Animation จบเท่านั้น
     * =========================================================
     */

    const handleResize = () => {

      if (
        document.body.dataset.pguardIntro !==
        "complete"
      ) {
        return;
      }


      const newPosition =
        getNavbarPosition();


      gsap.set(
        intro,
        {
          x:
            newPosition.x,

          y:
            newPosition.y,

          scale: 1,
        }
      );

    };


    window.addEventListener(
      "resize",
      handleResize
    );


    /*
     * =========================================================
     * RESIZE OBSERVER
     *
     * รองรับ Browser Zoom
     * =========================================================
     */

    const resizeObserver =
      new ResizeObserver(() => {

        if (
          document.body.dataset.pguardIntro !==
          "complete"
        ) {
          return;
        }


        const newPosition =
          getNavbarPosition();


        gsap.set(
          intro,
          {
            x:
              newPosition.x,

            y:
              newPosition.y,

            scale: 1,
          }
        );

      });


    resizeObserver.observe(
      logoSpace
    );


    resizeObserver.observe(
      navbar
    );


    /*
     * =========================================================
     * CLEANUP
     * =========================================================
     */

    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );


      resizeObserver.disconnect();


      tl.kill();

    };

  }, []);


  /*
   * =========================================================
   * LINKS
   * =========================================================
   */

  const links = [
    [t("หน้าหลัก"), "/"],
    [t("ฟีเจอร์"), "/features"],
    [t("สำหรับธุรกิจ"), "/business"],
    [t("สำหรับเจ้าหน้าที่"), "/guard"],
    [t("ติดต่อเรา"), "/contact"],
  ];


  return (
    <>

      {/* =====================================================
          WHITE INTRO OVERLAY
      ===================================================== */}

      <div className="brand-intro-overlay">

        {/* ===================================================
            INTRO LOGO
        =================================================== */}

        <div className="brand-intro">

          <div className="intro-logo">

            <img
              src="/logo.png"
              alt="PGUARD Logo"
            />

          </div>


          <div className="intro-brand-text">

            <div className="intro-word">

              {"PGUARD".split("").map(
                (
                  letter,
                  index
                ) => (

                  <span
                    key={index}
                    className="logo-letter"
                  >
                    {letter}
                  </span>

                )
              )}

            </div>


            <small className="intro-tagline">
              Security Guard Platform
            </small>

          </div>

        </div>

      </div>


      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <div className="container nav-inner">


          {/* =================================================
              LOGO SPACE
          ================================================= */}

          <Link
            to="/"
            className="nav-logo-space"
            onClick={() =>
              setOpen(false)
            }
            aria-label="PGUARD Home"
          />


          {/* =================================================
              MOBILE MENU
          ================================================= */}

          <button
            className="menu-btn"
            onClick={() =>
              setOpen(!open)
            }
            aria-label="menu"
          >

            {open ? (
              <X />
            ) : (
              <Menu />
            )}

          </button>


          {/* =================================================
              NAV LINKS
          ================================================= */}

          <nav
            className={
              open
                ? "nav-links open"
                : "nav-links"
            }
          >

            {links.map(
              ([
                label,
                path,
              ]) => (

                <Link
                  key={path}
                  to={path}
                  className={
                    location.pathname ===
                    path
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setOpen(false)
                  }
                >
                  {label}
                </Link>

              )
            )}


            <LanguageSwitcher />


          </nav>

        </div>

      </header>

    </>
  );
}


export default Navbar;
