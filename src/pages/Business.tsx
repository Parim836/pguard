import { useLanguage } from "../LanguageContext";

import { useEffect, useRef } from "react";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  MapPin,
  Search,
  UserCheck,
} from "lucide-react";

import Page from "../components/Page";
import BusinessPhone from "../components/PhoneBusiness/PhoneBs";

function Business() {
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

  const businessFeatures = [
    t("ค้นหา รปภ. ใกล้หน่วยงานแบบ Real-time"),
    t("ดูประวัติ ใบอนุญาต และ Rating ก่อนเลือก"),
    t("ติดตามการทำงานพร้อมรายงานรายชั่วโมง"),
    t("ชำระเงินผ่าน Payment Gateway"),
    t("คุ้มครองความเสียหายตามเงื่อนไข"),
  ];

  const steps = [
    {
      icon: ClipboardCheck,
      title: t("เลือกบริการ"),
      description:
        t("เลือกประเภทบริการรักษาความปลอดภัยที่เหมาะกับความต้องการของหน่วยงาน"),
    },
    {
      icon: MapPin,
      title: t("เลือกสถานที่ เวลา และอุปกรณ์"),
      description:
        t("ระบุสถานที่ วันเวลา และอุปกรณ์ที่จำเป็นสำหรับการปฏิบัติงาน"),
    },
    {
      icon: Search,
      title: t("ค้นหาเจ้าหน้าที่ใกล้สถานที่ทำงาน"),
      description:
        t("ค้นหาเจ้าหน้าที่รักษาความปลอดภัยที่อยู่ใกล้กับสถานที่ทำงาน"),
    },
    {
      icon: UserCheck,
      title: t("เลือกเจ้าหน้าที่"),
      description:
        t("ตรวจสอบประวัติ ใบอนุญาต Rating และข้อมูลที่เกี่ยวข้องก่อนตัดสินใจเลือก"),
    },
    {
      icon: CreditCard,
      title: t("จ่ายเงิน"),
      description:
        t("ชำระเงินผ่านระบบ Payment Gateway"),
    },
    {
      icon: CheckCircle2,
      title: t("จบงาน"),
      description:
        t("ติดตามงานจนเสร็จสิ้นและปิดงานผ่านระบบ PGUARD"),
    },
  ];

  return (
    <Page
      title={t("สำหรับธุรกิจ / หน่วยงาน")}
      subtitle={t("มั่นใจในคุณภาพ ประหยัดเวลา ลดความเสี่ยง")}
    >
      <div className="business-page-content">

        {/* =====================================================
            SECTION 1 — BUSINESS INTRO
        ===================================================== */}

        <div className="business-layout">

          <div className="business-visual">

            <div className="business-phone-view smart-search-phone">
              <BusinessPhone />
            </div>

          </div>

          <div className="business-intro">

            <h2>{t("จัดการความปลอดภัย")}<br />{t("ได้อย่างเป็นระบบ")}</h2>

            <p className="business-intro-lead">{t("รวมทุกขั้นตอนการจัดหา รปภ. ไว้ในที่เดียว ตั้งแต่ค้นหาเจ้าหน้าที่ ไปจนถึงติดตามงานและชำระเงิน")}</p>

            <div className="business-feature-list">

              {businessFeatures.map((feature, index) => (
                <div
                  className="business-feature"
                  key={feature}
                >
                  <span className="business-feature-number">
                    0{index + 1}
                  </span>

                  <CheckCircle2 size={18} />

                  <span>{feature}</span>
                </div>
              ))}

            </div>

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

            <p>{t("เรียกใช้บริการ รปภ. ผ่าน PGUARD ได้ง่าย ๆ ตั้งแต่ค้นหาเจ้าหน้าที่จนถึงติดตามและชำระเงิน")}</p>

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

export default Business;

