import { BadgeCheck, Clock3, RotateCcw, ScanLine } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import FinancialPhone from "./PhoneFinancial";
import "./styles/Financial.css";

export default function Financial() {
  const { t } = useLanguage();
  const items = [
    {
      icon: BadgeCheck,
      label: "PAY UPON COMPLETION",
      title: t("ชำระเมื่อจบงาน"),
      text: t("ชำระเงินเมื่อจบงานเท่านั้น มั่นใจในผลงานก่อนจ่ายจริง"),
    },
    {
      icon: RotateCcw,
      label: "REFUND GUARANTEE",
      title: t("ขอคืนเงินได้ตามเงื่อนไข"),
      text: t("หากงานไม่สำเร็จ สามารถขอคืนเงินได้ตามเงื่อนไข"),
    },
    {
      icon: Clock3,
      label: "ON-TIME PAYMENTS",
      title: t("จ่ายตรงเวลา"),
      text: t("โอนเงินให้ผู้ให้บริการตรงเวลา ลดปัญหาค้างจ่าย"),
    },
    {
      icon: ScanLine,
      label: "TRANSPARENT & TRACKABLE",
      title: t("โปร่งใส ตรวจสอบได้"),
      text: t("ตรวจสอบสถานะการชำระเงินได้ทุกขั้นตอน โปร่งใส เชื่อถือได้"),
    },
  ];
  return (
    <section className="financial-section" aria-labelledby="financial-title">
      <div className="financial-visual">
        <FinancialPhone />
      </div>
      <div className="financial-content">
        <h2 id="financial-title">
          {t("ชำระเงินอย่างมั่นใจ")}
          <br />
          <span>{t("ติดตามได้ทุกขั้นตอน")}</span>
        </h2>
        <p className="financial-lead">
          {t(
            "ระบบ Payment Gateway ช่วยจัดการการชำระเงิน พร้อมติดตามสถานะและดูแลทั้งผู้ว่าจ้างและผู้ให้บริการ",
          )}
        </p>
        <div className="financial-grid">
          {items.map(({ icon: Icon, label, title, text }) => (
            <article className="financial-card" key={label}>
              <span className="financial-icon">
                <Icon size={21} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
