import { useLayoutEffect, useRef } from "react";
import { MapPin, ShieldCheck, SlidersHorizontal } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page from "../components/Page";
import Phone from "../components/Phone/index";
import HourlyReport from "../components/HourlyReport";
import Rating from "../components/Rating";
import Financial from "../components/Financial";
import Registration from "../components/Registration";
import { useLanguage } from "../LanguageContext";

gsap.registerPlugin(ScrollTrigger);

function Features() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      section.querySelectorAll(
        ".smart-search-section, .hourly-report, .rating-section, .financial-section, .registration-section"
      ).forEach((phoneSection) => {
        const phone = phoneSection.querySelector(".smart-search-phone");
        if (!phone) return;
        const isSmartSearch = phoneSection.matches(".smart-search-section");
        gsap.fromTo(phone, { opacity: 0, y: 80 }, {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: phoneSection,
            start: "top 85%",
            end: isSmartSearch ? "top 45%" : "top 35%",
            scrub: isSmartSearch ? 0.3 : 0.8,
            invalidateOnRefresh: true,
          },
        });
      });

      const content = section.querySelectorAll(
        ".smart-search-content > :not(.smart-search-features), .smart-search-feature, " +
        ".registration-content > :not(.registration-steps), .registration-step, " +
        ".hourly-report-content > :not(.hourly-report-grid), .hourly-report-card, " +
        ".rating-content > :not(.rating-benefits), .rating-benefits > div, " +
        ".financial-content > :not(.financial-grid), .financial-card"
      );

      content.forEach((element) => {
        gsap.fromTo(element, { opacity: 0, y: 28 }, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 92%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });

    }, section);

    const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      cancelAnimationFrame(refreshFrame);
      media.revert();
    };
  }, []);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, [language]);

  return (
    <Page
      title={language === "TH" ? "ฟีเจอร์ของ PGUARD" : "PGUARD Features"}
      subtitle={language === "TH"
        ? "ครบทุกเครื่องมือสำหรับการเรียกและให้บริการ รปภ. อย่างมืออาชีพ"
        : "Everything you need to book and provide professional security services"}
    >
      <div ref={sectionRef}>
      <Registration />
      <div className="smart-search-section">
          <div className="smart-search-grid">


            {/* =================================================
                LEFT — SMART SEARCH CONTENT
            ================================================= */}

            <div className="smart-search-content">




              <h2>{t("ระบบค้นหาอัจฉริยะ")}<br />

                <span>{t("ค้นหา รปภ. ที่เหมาะกับคุณ")}</span>

              </h2>


              <p>{t("ระบบช่วยค้นหาเจ้าหน้าที่รักษาความปลอดภัย ที่ตรงกับความต้องการของคุณ โดยพิจารณาจาก พื้นที่ เวลา ประสบการณ์ และความพร้อมในการรับงาน")}</p>


              {/* =================================================
                  FEATURES
              ================================================= */}

              <div className="smart-search-features">


                {/* FEATURE 1 */}

                <div className="smart-search-feature">


                  <div className="smart-search-feature-icon">

                    <MapPin
                      size={20}
                    />

                  </div>


                  <div>

                    <h3>{t("ค้นหาเจ้าหน้าที่ได้รวดเร็ว")}</h3>


                    <p>{t("ระบบคัดกรองและแนะนำเจ้าหน้าที่ รปภ. ที่อยู่ใกล้พื้นที่ที่ต้องการ")}</p>

                  </div>


                </div>


                {/* FEATURE 2 */}

                <div className="smart-search-feature">


                  <div className="smart-search-feature-icon">

                    <SlidersHorizontal
                      size={20}
                    />

                  </div>


                  <div>

                    <h3>{t("เลือกตามความต้องการ")}</h3>


                    <p>{t("เลือกเจ้าหน้าที่ตามเรตติ้ง ประสบการณ์ และความพร้อมในการทำงานได้")}</p>

                  </div>


                </div>


                {/* FEATURE 3 */}

                <div className="smart-search-feature">


                  <div className="smart-search-feature-icon">

                    <ShieldCheck
                      size={20}
                    />

                  </div>


                  <div>

                    <h3>{t("แสดงข้อมูลเรียลไทม์")}</h3>


                    <p>{t("ตรวจสอบสถานะเจ้าหน้าที่ที่กำลังปฏิบัติงาน มีรายงานทุกชั่วโมง")}</p>

                  </div>


                </div>


              </div>


            </div>


            {/* =================================================
                RIGHT — PHONE

                จอที่ 2
            ================================================= */}

            <div
              className="smart-search-phone"
            >

              <Phone />

            </div>


          </div>
      </div>
      <HourlyReport />
      <Rating />
      <Financial />
      </div>
    </Page>
  );
}

export default Features;
