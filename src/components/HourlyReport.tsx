import { Camera, Clock3, MapPin, Video } from "lucide-react";
import ReportPhone from "./PhoneReport";
import { useLanguage } from "../LanguageContext";
import "./HourlyReport.css";

function HourlyReport() {
  const { t } = useLanguage();
  const items = [
    { icon: MapPin, label: "CHECK-IN REALTIME", title: t("เช็กอินแบบเรียลไทม์"), text: t("บันทึกเวลาเข้า-ออกงาน พร้อมพิกัดและหลักฐานแบบเรียลไทม์") },
    { icon: Clock3, label: "HOURLY REPORTING", title: t("รายงานทุกชั่วโมง"), text: t("รายงานสถานการณ์ทุกชั่วโมง ติดตามงานได้ต่อเนื่อง ไม่มีตกหล่น") },
    { icon: Camera, label: "PHOTO SUPPORT", title: t("แนบภาพรายงานหน้างาน"), text: t("รองรับการแนบรูปภาพรายงาน เพื่อเพิ่มความชัดเจนของการรายงานหน้างาน") },
    { icon: Video, label: "CHAT & VIDEO CALLING", title: t("แชทและวิดีโอคอล"), text: t("มีระบบแชทภายในและ Video Call สื่อสารระหว่างทีมและผู้ควบคุมงานได้ทันที") },
  ];

  return (
    <section className="hourly-report" aria-labelledby="hourly-report-title">
      <div className="hourly-report-visual">
        <ReportPhone />
      </div>

      <div className="hourly-report-content">
        <h2 id="hourly-report-title">{t("ติดตามทุกความเคลื่อนไหว")}<br /><span>{t("มั่นใจได้ทุกชั่วโมง")}</span></h2>
        <p className="hourly-report-lead">{t("เช็กอิน รายงาน และสื่อสารในที่เดียว พร้อมข้อมูลจากหน้างานที่ช่วยให้คุณติดตามการทำงานได้อย่างมั่นใจ")}</p>
        <div className="hourly-report-grid">
          {items.map(({ icon: Icon, label, title, text }) => (
            <article className="hourly-report-card" key={label}>
              <span className="hourly-report-icon"><Icon size={21} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HourlyReport;
