import WorkflowSection from "../components/WorkflowSection";
import { useLanguage } from "../LanguageContext";

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
      description: t(
        "สร้างบัญชีเจ้าหน้าที่ รปภ. พร้อมกรอกข้อมูลส่วนตัวและข้อมูลที่จำเป็น",
      ),
    },
    {
      icon: FileCheck2,
      title: t("ยืนยันเอกสาร"),
      description: t(
        "อัปโหลดเอกสารที่จำเป็น เพื่อให้ PGUARD ตรวจสอบและยืนยันตัวตน",
      ),
    },
    {
      icon: Search,
      title: t("รอรับงาน"),
      description: t(
        "เลือกงานที่เหมาะกับพื้นที่ เวลา และความพร้อมของคุณ แล้วกดรับงานผ่านแอป",
      ),
    },
    {
      icon: Wallet,
      title: t("ปฏิบัติงาน"),
      description: t(
        "เช็กอินและรายงานการปฏิบัติงานผ่านระบบ เมื่อจบงานรับเงินตามเงื่อนไขที่กำหนด",
      ),
    },
  ];

  return (
    <Page
      title={t("สำหรับเจ้าหน้าที่ รปภ.")}
      subtitle={t("รับงานง่าย รายได้ดี มีโอกาสเติบโต")}
    >
      <div className="business-page-content">
        <div className="business-layout">
          <div className="business-visual">
            <div className="business-phone-view smart-search-phone">
              <GuardPhone />
            </div>
          </div>

          <div className="business-intro">
            <h2>{t("เติบโตไปพร้อมกับ PGUARD")}</h2>

            <p className="business-intro-lead">
              {t(
                "จัดการทุกขั้นตอนการทำงาน รปภ. ได้อย่างเป็นระบบ ตั้งแต่เลือกรับงาน การนำทางไปสถานที่ทำงาน เช็กอิน ไปจนถึงการรับรายได้",
              )}
            </p>

            <div className="business-feature-list">
              {guardFeatures.map((feature, index) => (
                <div className="business-feature" key={feature}>
                  <span className="business-feature-number">0{index + 1}</span>

                  <CheckCircle2 size={18} />

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/documents" className="document-button">
              <span>{t("ตัวอย่างเอกสารสำหรับการสมัคร")}</span>

              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <WorkflowSection
          title={t("ขั้นตอนการใช้งาน")}
          description={t(
            "เริ่มต้นใช้งาน PGUARD ได้ง่าย ๆ ตั้งแต่สมัครสมาชิกจนถึงรับงานและรับรายได้",
          )}
          steps={steps}
        />
      </div>
    </Page>
  );
}

export default Guard;
