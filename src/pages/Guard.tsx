import { useLanguage } from "../LanguageContext";
import { useEffect, useRef } from "react";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Search,
  Wallet,
} from "lucide-react";

import { Link } from "react-router-dom";

import Page from "../components/Page";
import GuardPhone from "../components/PhoneGuard/PhoneG";

function Guard() {
  const { t } = useLanguage();

  const workflowSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const workflowSection = workflowSectionRef.current;

    if (!workflowSection) return;

    const cards =
      workflowSection.querySelectorAll<HTMLElement>(".business-step");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const guardFeatures = [
    t("สมัครง่าย ยืนยันตัวตนผ่านแอป"),
    t("รับงานตามพื้นที่และความพร้อม"),
    t("รายงานและเช็กอินผ่านระบบ"),
    t("รับเงินตรงเวลาเมื่อจบงาน"),
    t("มี Rating และโอกาสรับโบนัส"),
  ];

  const steps = [
    {
      icon: ClipboardCheck,
      title: t("สมัครสมาชิก"),
      description:
        t("สร้างบัญชีเจ้าหน้าที่ รปภ. พร้อมกรอกข้อมูลส่วนตัวและข้อมูลที่จำเป็น"),
    },
    {
      icon: FileCheck2,
      title: t("ยืนยันเอกสาร"),
      description:
        t("อัปโหลดเอกสารที่จำเป็น เพื่อให้ PGUARD ตรวจสอบและยืนยันตัวตน"),
    },
    {
      icon: Search,
      title: t("รอรับงาน"),
      description:
        t("เลือกงานที่เหมาะกับพื้นที่ เวลา และความพร้อมของคุณ แล้วกดรับงานผ่านแอป"),
    },
    {
      icon: Wallet,
      title: t("ปฏิบัติงาน"),
      description:
        t("เช็กอินและรายงานการปฏิบัติงานผ่านระบบ เมื่อจบงานรับเงินตามเงื่อนไขที่กำหนด"),
    },
  ];

  return (
    <Page
      title={t("สำหรับเจ้าหน้าที่ รปภ.")}
      subtitle={t("รับงานง่าย รายได้ดี มีโอกาสเติบโต")}
    >
      <div className="business-page-content">

        {/* =====================================================
            SECTION 1 — GUARD INTRO
        ===================================================== */}

        <div className="business-layout">

          {/* LEFT — PHONE */}
          <div className="business-visual">

            <div className="business-phone-view smart-search-phone">
              <GuardPhone />
            </div>

          </div>


          {/* RIGHT — CONTENT */}
          <div className="business-intro">

            <h2>{t("เติบโตไปพร้อมกับ PGUARD")}</h2>

            <p className="business-intro-lead">{t("จัดการทุกขั้นตอนการทำงาน รปภ. ได้อย่างเป็นระบบ ตั้งแต่เลือกรับงาน การนำทางไปสถานที่ทำงาน เช็กอิน ไปจนถึงการรับรายได้")}</p>


            <div className="business-feature-list">

              {guardFeatures.map((feature, index) => (
                <div
                  className="business-feature"
                  key={feature}
                >

                  <span className="business-feature-number">
                    0{index + 1}
                  </span>

                  <CheckCircle2 size={18} />

                  <span>
                    {feature}
                  </span>

                </div>
              ))}

            </div>


            {/* DOCUMENT BUTTON */}

            <Link
              to="/documents"
              className="document-button"
            >

              <span>{t("ตัวอย่างเอกสารสำหรับการสมัคร")}</span>

              <ArrowRight size={17} />

            </Link>

          </div>

        </div>


        {/* =====================================================
            SECTION 2 — HOW IT WORKS
        ===================================================== */}

        <section
          ref={workflowSectionRef}
          className="business-how-it-works"
        >

          <div className="business-section-heading">

            <span className="eyebrow">
              HOW IT WORKS
            </span>

            <h2>{t("ขั้นตอนการใช้งาน")}</h2>

            <p>{t("เริ่มต้นใช้งาน PGUARD ได้ง่าย ๆ ตั้งแต่สมัครสมาชิกจนถึงรับงานและรับรายได้")}</p>

          </div>


          <div className="business-steps">

            {steps.map((step, index) => {

              const StepIcon = step.icon;

              return (
                <div
                  className="business-step"
                  key={index}
                >

                  {/* ICON */}

                  <div className="business-step-icon">

                    <StepIcon
                      size={25}
                      strokeWidth={2}
                    />

                  </div>


                  {/* CONTENT */}

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>


                  {/* ARROW */}

                  {index !== steps.length - 1 && (
                    <div className="business-step-arrow">

                      <ArrowRight
                        size={22}
                        strokeWidth={1.8}
                      />

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </section>

      </div>
    </Page>
  );
}

export default Guard;