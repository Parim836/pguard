import {
  ClipboardCheck,
  Download,
  FileUp,
  BriefcaseBusiness,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";
import "./styles/Registration.css";

export default function Registration() {
  const { t } = useLanguage();
  const steps = [
    {
      icon: Download,
      label: "DOWNLOAD THE APP",
      title: t("ดาวน์โหลดแอป"),
      text: t("สมัครใช้งานผ่านแอปได้ง่าย ๆ"),
    },
    {
      icon: FileUp,
      label: "UPLOAD REQUIRED DOCUMENTS",
      title: t("อัปโหลดเอกสารที่จำเป็น"),
      text: t("อัปโหลดเอกสารที่จำเป็นให้ครบถ้วน"),
    },
    {
      icon: ClipboardCheck,
      label: "WAIT FOR APPROVAL",
      title: t("รอการอนุมัติ"),
      text: t("รอทีมงานตรวจสอบและอนุมัติข้อมูล"),
    },
    {
      icon: BriefcaseBusiness,
      label: "START ACCEPTING JOBS",
      title: t("เริ่มรับงาน"),
      text: t("เมื่ออนุมัติแล้ว สามารถเริ่มรับงานได้ทันที"),
    },
  ];
  return (
    <section
      className="registration-section"
      aria-labelledby="registration-title"
    >
      <div className="registration-content">
        <h2 id="registration-title">{t("สมัครงานง่าย")}</h2>
      </div>
      <ol className="registration-steps">
        {steps.map(({ icon: Icon, label, title, text }, index) => (
          <li className="registration-step" key={label}>
            <div className="registration-step-top">
              <span className="registration-step-icon">
                <Icon size={21} aria-hidden="true" />
              </span>
              <span className="registration-step-number">0{index + 1}</span>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
