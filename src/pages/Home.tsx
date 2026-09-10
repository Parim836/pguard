import { useLanguage } from "../LanguageContext";
import {
  ArrowRight,
  Download,
  FileCheck2,
  ShieldCheck,
  Star,
  UserRound,
  Shield,
} from "lucide-react";

import {
  useLayoutEffect,
  useRef,
} from "react";

import {
  Link,
} from "react-router-dom";

import gsap from "gsap";

import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

import HeroVideos from "../components/HeroVideos";
import SolutionAccordion from "../components/SolutionAccordion";

import "../styles.css";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   HOME
========================================================= */

function Home() {
  const { t, language } = useLanguage();


  const pageRef =
    useRef<HTMLDivElement>(null);


  useLayoutEffect(() => {

    const page =
      pageRef.current;

    if (!page) return;


    const ctx =
      gsap.context(() => {


        /* =====================================================
           ELEMENTS
        ===================================================== */

        const hero =
          page.querySelector(
            ".hero"
          ) as HTMLElement | null;


        const heroContent =
          page.querySelectorAll(
            ".hero-content"
          );


        const guardBanner = page.querySelector(".home-guard-banner");
        const guardImage = page.querySelector(".home-guard-banner img");
        const guardMessage = page.querySelector(".home-guard-message");

        if (guardBanner && guardImage && guardMessage) {
          const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

          gsap.set(guardImage, {
            autoAlpha: 0,
            y: reducedMotion ? 0 : 24,
            clipPath: "inset(0% 0% 0% 0% round 0px 0px 0px 0px)",
            xPercent: 0,
            force3D: true,
          });
          gsap.set(guardMessage, { autoAlpha: 0, x: reducedMotion ? 0 : 60, force3D: true });

          const enterBanner = gsap.timeline({ paused: true })
            .to(guardImage, {
              autoAlpha: 1,
              y: 0,
              duration: reducedMotion ? 0 : 0.7,
              ease: "power2.out",
            })
            .to(guardImage, {
              clipPath: "inset(0% 40% 0% 0% round 0px 24px 24px 0px)",
              xPercent: 0,
              duration: reducedMotion ? 0 : 0.7,
              ease: "sine.inOut",
            }, reducedMotion ? ">" : ">+=0.5")
            .to(guardMessage, {
              autoAlpha: 1,
              x: 0,
              duration: reducedMotion ? 0 : 0.7,
              ease: "sine.inOut",
            }, "<");

          const leaveBanner = gsap.timeline({
            paused: true,
            defaults: {
              duration: reducedMotion ? 0 : 0.7,
              ease: "sine.inOut",
            },
          })
            .to(guardMessage, {
              autoAlpha: 0,
              x: reducedMotion ? 0 : 60,
            }, 0)
            .to(guardImage, {
              autoAlpha: 0,
              clipPath: "inset(0% 0% 0% 0% round 0px 0px 0px 0px)",
              xPercent: 0,
              y: reducedMotion ? 0 : 24,
            }, 0);

          ScrollTrigger.create({
            trigger: guardBanner,
            start: "top 75%",
            end: "center top",
            invalidateOnRefresh: true,
            onToggle: ({ isActive }) => {
              // Resume from the current appearance even during rapid scrolling.
              if (isActive) {
                leaveBanner.pause();
                enterBanner.invalidate().restart();
              } else {
                enterBanner.pause();
                leaveBanner.invalidate().restart();
              }
            },
          });

        }

        const appSection = page.querySelector(".app-section");
        const appHeading = page.querySelector(".app-section .app-section-header");

        if (appSection && appHeading) {
          gsap.fromTo(appHeading,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: appSection,
                start: "top 85%",
                end: "top 35%",
                scrub: 0.8,
                invalidateOnRefresh: true,
              },
            }
          );
        }

        const appCards =
          page.querySelector(
            ".app-section .app-cards"
          ) as HTMLElement | null;


        const featuresSection =
          page.querySelector(
            ".home-features-section"
          ) as HTMLElement | null;


        const featuresHeading =
          page.querySelector(
            ".home-features-heading"
          ) as HTMLElement | null;


        const featuresGrid =
          page.querySelector(
            ".home-solutions"
          ) as HTMLElement | null;


        if (
          !hero ||
          !heroContent.length ||
          !appCards ||
          !featuresSection ||
          !featuresHeading ||
          !featuresGrid
        ) {
          return;
        }


        /* =====================================================
           HERO INITIAL STATE
        ===================================================== */

        gsap.set(
          heroContent,
          {
            opacity: 0,
            y: 40,
          }
        );


        /* =====================================================
           APP CARDS INITIAL STATE
        ===================================================== */

        gsap.set(
          appCards,
          {
            opacity: 0,
            y: 50,
          }
        );


        /* =====================================================
           FEATURES INITIAL STATE

           Animate the heading and feature grid independently.
        ===================================================== */

        gsap.set(
          featuresHeading,
          {
            opacity: 0,
            y: 50,
          }
        );


        /* =====================================================
           FEATURE GRID

           Fade อย่างเดียว

           ไม่ใช้ x / y / scale / rotate
        ===================================================== */

        gsap.set(
          featuresGrid,
          {
            opacity: 0,
          }
        );


        /* =====================================================
           HERO INTRO
        ===================================================== */

        const showHomeContent = () => {

          const tl =
            gsap.timeline();


          tl.to(
            heroContent,
            {
              opacity: 1,

              y: 0,

              duration: 0.8,

              stagger: 0.1,

              ease: "power3.out",

              overwrite: true,
            }
          );


          tl.call(() => {

            ScrollTrigger.refresh();

          });

        };


        /* =====================================================
           INTRO COMPLETE EVENT
        ===================================================== */

        window.addEventListener(
          "pguard-intro-complete",
          showHomeContent
        );


        /* =====================================================
           INTRO ALREADY COMPLETE
        ===================================================== */

        if (
          document.body.dataset.pguardIntro ===
          "complete"
        ) {

          showHomeContent();

        }


        /* =====================================================
           HERO SCROLL FADE

           Phone 1 ไม่ได้ถูกแก้ตรงนี้
        ===================================================== */

        ScrollTrigger.create({

          trigger: hero,

          start: "top top",

          end: "bottom 35%",

          scrub: 0.8,

          invalidateOnRefresh: true,

          onUpdate: (self) => {

            if (
              document.body.dataset.pguardIntro !==
              "complete"
            ) {
              return;
            }


            const progress =
              self.progress;


            const smoothProgress =
              gsap.parseEase(
                "power2.inOut"
              )(progress);


            const opacity =
              1 - smoothProgress;


            const y =
              -45 * smoothProgress;


            gsap.set(
              heroContent,
              {
                opacity,
                y,
              }
            );

          },

        });


        /* =====================================================
           SECTION 2 — APP CARDS

           เปลี่ยนจาก toggleActions เป็น scrub

           ผลลัพธ์:

           เลื่อนลง
           ↓
           การ์ดค่อย ๆ ปรากฏ
           ↓
           การ์ดอยู่ตำแหน่งปกติ

           เลื่อนกลับขึ้น
           ↓
           การ์ดค่อย ๆ จางและเลื่อนกลับ
           ===================================================== */

        gsap.fromTo(

          appCards,

          {
            opacity: 0,
            y: 50,
          },

          {
            opacity: 1,

            y: 0,

            ease: "none",

            overwrite: "auto",

            scrollTrigger: {

              trigger:
                appCards,

              /* เริ่มปรากฏเมื่อการ์ดเข้าหน้าจอ */

              start:
                "top 85%",

              /* ปรากฏเต็มเมื่อขึ้นมาถึงจุดนี้ */

              end:
                "top 45%",

              /* สำคัญ:
                 ผูก Animation กับตำแหน่ง Scroll */

              scrub:
                0.8,

              invalidateOnRefresh:
                true,

            },

          }

        );


        /* =====================================================
           SECTION 3 — FEATURES

           ค่อย ๆ ปรากฏตาม Scroll

           เลื่อนลง:
           Heading + Cards ค่อย ๆ ปรากฏ

           เลื่อนขึ้น:
           Heading + Cards ค่อย ๆ ย้อนกลับ
        ===================================================== */

        const featuresTimeline =
          gsap.timeline({

            scrollTrigger: {

              trigger:
                featuresSection,

              start:
                "top 85%",

              end:
                "top 35%",

              scrub:
                0.8,

              invalidateOnRefresh:
                true,

            },

          });


        /* =====================================================
           FEATURES CONTENT
        ===================================================== */

        featuresTimeline.to(

          featuresHeading,

          {
            opacity: 1,

            y: 0,

            ease: "none",

          },

          0

        );


        /* =====================================================
           FEATURE GRID

           Fade อย่างเดียว

           ไม่มี movement
        ===================================================== */

        featuresTimeline.to(

          featuresGrid,

          {
            opacity: 1,

            ease: "none",

          },

          0

        );


        /* =====================================================
           REFRESH
        ===================================================== */

        ScrollTrigger.refresh();


        /* =====================================================
           CLEANUP
        ===================================================== */

        return () => {

          window.removeEventListener(
            "pguard-intro-complete",
            showHomeContent
          );

        };

      }, page);


    return () => {

      ctx.revert();

    };

  }, []);


  return (

    <div
      ref={pageRef}
      className="home-page"
    >


      {/* =====================================================
          SECTION 1 — HERO
      ===================================================== */}

      <section className="hero">

        <div className="container hero-grid">


          {/* =================================================
              LEFT — HERO CONTENT
          ================================================= */}

          <div className="hero-copy hero-content">

            <span className="eyebrow">

              PROFESSIONAL GUARD CALLING

            </span>


            <h1>{t("เรียกเจ้าหน้าที่รักษาความปลอดภัยมืออาชีพ")}<br />

              <span>{t("ง่าย ครบ จบในแอปเดียว")}</span>

            </h1>


            <p>{t("PGUARD แพลตฟอร์มเรียกเจ้าหน้าที่รักษา ความปลอดภัยมืออาชีพ ช่วยให้ธุรกิจเข้าถึง เจ้าหน้าที่รักษาความปลอดภัย ที่มีคุณภาพ พร้อมระบบคัดกรอง ตรวจสอบประวัติ และติดตามงานได้อย่างมั่นใจ")}</p>


            <div className="actions">


              <a
                className="btn primary"
                href="#download"
              >

                <Download
                  size={18}
                />{t("ดาวน์โหลดแอป")}</a>


              <Link
                className="btn outline"
                to="/how-it-works"
              >{t("ดูวิธีการใช้งาน")}<ArrowRight
                  size={18}
                />

              </Link>


            </div>


            <div className="trust-row">


              <span>

                <ShieldCheck />{t("ตรวจสอบประวัติแล้ว")}</span>


              <span>

                <FileCheck2 />{t("มีใบอนุญาตถูกต้อง")}</span>


              <span>

                <Star />{t("รีวิวจากลูกค้า")}</span>


            </div>


          </div>


          {/* =================================================
              RIGHT — PHONE 3D

              จอที่ 1
          ================================================= */}

          <div className="hero-visual hero-visual--videos hero-content">

            <HeroVideos />

          </div>


        </div>

      </section>


      {/* =====================================================
          SECURITY GUARD BANNER
      ===================================================== */}

      <div className="home-guard-banner">
        <img
          src="/images/security-guard-working-wide.png"
          alt={language === "TH"
            ? "เจ้าหน้าที่รักษาความปลอดภัยกำลังปฏิบัติงานบริเวณทางเข้าอาคาร"
            : "Security guard on duty at an office building entrance"}
          width={2172}
          height={724}
          loading="lazy"
          decoding="async"
        />
        <div className="home-guard-message">
          <div className="home-guard-message-copy">
            <span className="home-guard-message-label">
              {language === "TH" ? "ร่วมงานกับเรา" : "Join our team"}
            </span>
            <h2>{language === "TH"
              ? "ร่วมเป็นส่วนหนึ่งกับเรา"
              : "Be part of our team"}</h2>
            <p>{language === "TH"
              ? "ร่วมสร้างมาตรฐานการดูแลและความปลอดภัยที่ดีกว่าไปด้วยกัน"
              : "Together, we can build a better standard of care and safety."}</p>
          </div>
          <div className="home-guard-message-note">
            <span>{language === "TH" ? "เชื่อมั่น" : "Trust"}</span>
            <span>{language === "TH" ? "ปลอดภัย" : "Safety"}</span>
            <span>{language === "TH" ? "เติบโตไปด้วยกัน" : "Grow together"}</span>
          </div>
        </div>
      </div>

      {/* =====================================================
          SECTION 2 — PGUARD APP
      ===================================================== */}

      <section className="section app-section">

        <div className="container">


          <div className="app-section-header">

            <span className="eyebrow">

              PGUARD APP

            </span>


            <h2>{t("ทุกขั้นตอนง่ายขึ้น")}<br />

              <span>{t("ผ่านแอปเดียว")}</span>

            </h2>


            <p>{t("ตั้งแต่ค้นหาเจ้าหน้าที่ สมัครงาน รับงาน รายงานการปฏิบัติงาน ไปจนถึงการชำระเงิน ทุกอย่างออกแบบให้ใช้งานง่ายและโปร่งใส")}</p>


          </div>


          <div className="app-cards">


            {/* =================================================
                CUSTOMER APP
            ================================================= */}

            <div className="app-card customer-card">


              <div className="app-card-top">

                <div className="app-card-icon">

                  <UserRound
                    size={30}
                  />

                </div>


                <div>

                  <span className="app-card-label">

                    CUSTOMER

                  </span>

                </div>

              </div>


              <h3>{t("สำหรับผู้ว่าจ้าง")}</h3>


              <p>{t("ค้นหาและเรียกเจ้าหน้าที่รักษาความปลอดภัยมืออาชีพ ที่เหมาะกับความต้องการของธุรกิจ พร้อมติดตามสถานะงานได้แบบ Real-time")}</p>


              <Link
                className="btn primary"
                to="/business"
              >{t("เริ่มใช้งานสำหรับผู้ว่าจ้าง")}<ArrowRight
                  size={18}
                />

              </Link>


            </div>


            {/* =================================================
                GUARD APP
            ================================================= */}

            <div className="app-card guard-card">


              <div className="app-card-top">

                <div className="app-card-icon">

                  <Shield
                    size={30}
                  />

                </div>


                <div>

                  <span className="app-card-label">

                    GUARD

                  </span>

                </div>

              </div>


              <h3>{t("สำหรับเจ้าหน้าที่รักษาความปลอดภัย")}</h3>


              <p>{t("สมัครเป็นเจ้าหน้าที่รักษาความปลอดภัย ค้นหาและรับงานที่เหมาะกับคุณ พร้อมจัดการงานและรายได้ผ่านแอปเดียว")}</p>


              <Link
                className="btn primary"
                to="/guard"
              >{t("เริ่มต้นเป็น รปภ.")}<ArrowRight
                  size={18}
                />

              </Link>


            </div>


          </div>

        </div>

      </section>


      {/* SECTION 3 — FEATURES */}
      <section className="section home-features-section">
        <div className="container">
          <div className="app-section-header home-features-heading">
            <span className="eyebrow">PGUARD FEATURES</span>
            <h2>{language === "TH" ? "โซลูชันของ PGUARD" : "PGUARD Solutions"}</h2>
            <p>{language === "TH"
              ? "ครบทุกเครื่องมือสำหรับการเรียกและให้บริการ รปภ. อย่างมืออาชีพ"
              : "Everything you need to book and provide professional security services"}</p>
          </div>
          <SolutionAccordion />
        </div>
      </section>


    </div>

  );

}


export default Home;
