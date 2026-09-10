import { Check, ChevronLeft, Clock3, Image, MapPin, X } from "lucide-react";
import PhoneFrame from "../Phone/PhoneFrame";
import { useLanguage } from "../../LanguageContext";
import "./styles/style.css";

export default function ReportPhone() {
  const { t } = useLanguage();
  return (
    <div className="smart-search-phone report-phone-preview">
      <PhoneFrame>
        <div className="report-app-screen">
          <div className="report-underlay" aria-hidden="true">
            <header>
              <ChevronLeft size={18} />
              <strong>{t("งานดำเนินอยู่")}</strong>
              <span>● LIVE</span>
            </header>
            <p>{t("ถึงจุดนัดหมาย")} · Arrived</p>
            <h3>{t("สถานะการทำงาน")}</h3>
            <div className="report-underlay-step">1</div>
            <div className="report-underlay-bottom">3　{t("ตรวจรอบ 2")}</div>
          </div>
          <div className="report-photo-overlay">
            <div className="report-photo-close" aria-hidden="true">
              <X size={22} />
            </div>
            <figure className="report-photo-card">
              <div className="report-photo-crop">
                <img
                  src="/report-office-entrance.png"
                  alt={t("ภาพถ่ายประกอบการเช็กอิน")}
                />
              </div>
              <figcaption>
                <strong>{t("เริ่มงาน · เช็กอินจุดนัด")}</strong>
                <span>
                  <Clock3 size={13} aria-hidden="true" />
                  6/09 22:25
                </span>
                <span>
                  <MapPin size={13} aria-hidden="true" />
                  13.52869, 100.66466 · {t("แม่นยำ 6 ม.")}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </PhoneFrame>
      <div className="report-floating-summary">
        <div className="report-summary-timer">
          <div className="report-timer-ring">
            <strong>02:58</strong>
            <small>{t("เหลือ")}</small>
          </div>
          <div className="report-timer-info">
            <span>22:25 – 01:25 {t("น.")}</span>
            <strong>{t("ผ่านไป 0 ชม. 1 นาที")}</strong>
            <div className="report-elapsed-track" aria-hidden="true">
              <span />
            </div>
          </div>
        </div>
        <h4>{t("รายงานรายชั่วโมง")} · 1/3</h4>
        <ol className="report-summary-steps">
          <li className="is-complete">
            <span className="report-summary-dot">
              <Check size={11} aria-hidden="true" />
            </span>
            <time>22:25</time>
            <strong>{t("เริ่มงาน")}</strong>
            <span className="report-view-photo">
              <Image size={10} aria-hidden="true" />
              {t("ดูรูป")}
            </span>
          </li>
          <li className="is-next">
            <span className="report-summary-dot">2</span>
            <strong>{t("ตรวจรอบ 1")}</strong>
          </li>
          <li>
            <span className="report-summary-dot">3</span>
            <strong>{t("ตรวจรอบ 2")}</strong>
          </li>
        </ol>
      </div>
    </div>
  );
}
