import useFeatureAnimations from "../hooks/useFeatureAnimations";
import { useRef } from "react";
import { MapPin, ShieldCheck, SlidersHorizontal } from "lucide-react";
import Page from "../components/Page";
import Phone from "../components/Phone/index";
import HourlyReport from "../components/HourlyReport";
import Rating from "../components/Rating";
import Financial from "../components/Financial";
import Registration from "../components/Registration";
import { useLanguage } from "../LanguageContext";

function Features() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useFeatureAnimations(sectionRef, language);

  return (
    <Page
      title={language === "TH" ? "ฟีเจอร์ของ PGUARD" : "PGUARD Features"}
      subtitle={
        language === "TH"
          ? "ครบทุกเครื่องมือสำหรับการเรียกและให้บริการ รปภ. อย่างมืออาชีพ"
          : "Everything you need to book and provide professional security services"
      }
    >
      <div ref={sectionRef}>
        <Registration />
        <div className="smart-search-section">
          <div className="smart-search-grid">
            <div className="smart-search-content">
              <h2>
                {t("ระบบค้นหาอัจฉริยะ")}
                <br />

                <span>{t("ค้นหา รปภ. ที่เหมาะกับคุณ")}</span>
              </h2>

              <p>
                {t(
                  "ระบบช่วยค้นหาเจ้าหน้าที่รักษาความปลอดภัย ที่ตรงกับความต้องการของคุณ โดยพิจารณาจาก พื้นที่ เวลา ประสบการณ์ และความพร้อมในการรับงาน",
                )}
              </p>

              <div className="smart-search-features">
                <div className="smart-search-feature">
                  <div className="smart-search-feature-icon">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h3>{t("ค้นหาเจ้าหน้าที่ได้รวดเร็ว")}</h3>

                    <p>
                      {t(
                        "ระบบคัดกรองและแนะนำเจ้าหน้าที่ รปภ. ที่อยู่ใกล้พื้นที่ที่ต้องการ",
                      )}
                    </p>
                  </div>
                </div>

                <div className="smart-search-feature">
                  <div className="smart-search-feature-icon">
                    <SlidersHorizontal size={20} />
                  </div>

                  <div>
                    <h3>{t("เลือกตามความต้องการ")}</h3>

                    <p>
                      {t(
                        "เลือกเจ้าหน้าที่ตามเรตติ้ง ประสบการณ์ และความพร้อมในการทำงานได้",
                      )}
                    </p>
                  </div>
                </div>

                <div className="smart-search-feature">
                  <div className="smart-search-feature-icon">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <h3>{t("แสดงข้อมูลเรียลไทม์")}</h3>

                    <p>
                      {t(
                        "ตรวจสอบสถานะเจ้าหน้าที่ที่กำลังปฏิบัติงาน มีรายงานทุกชั่วโมง",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="smart-search-phone">
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
