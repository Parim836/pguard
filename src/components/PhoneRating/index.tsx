import { ChevronLeft, Star, UserRound } from "lucide-react";
import PhoneFrame from "../Phone/PhoneFrame";
import { useLanguage } from "../../LanguageContext";
import "./style.css";

export default function RatingPhone() {
  const { t } = useLanguage();
  const scores = [t("ตรงเวลา"), t("มืออาชีพ"), t("สื่อสาร"), t("การแต่งกาย")];
  const reviews = [
    { date: "2026-07-23", displayDate: "23/07/2026", text: t("พูดจาสุภาพเรียบร้อยดี ถ้ามีโอกาสจะใช้ต่อ") },
    { date: "2026-07-22", displayDate: "22/07/2026", text: t("มาตรงเวลา ดูแลพื้นที่ดี รายงานงานครบถ้วน") },
  ];
  return (
    <div className="smart-search-phone rating-phone-preview">
      <PhoneFrame>
        <div className="rating-app-screen">
          <div className="rating-app-header"><ChevronLeft size={18} aria-hidden="true" /><strong>{t("รีวิวที่ได้รับ")}</strong></div>
          <div className="rating-app-body">
            <span className="rating-app-label">{t("คะแนนของฉัน")}</span>
            <div className="rating-app-summary">
              <strong>5.0</strong>
              <div className="rating-stars" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={17} fill="currentColor" />)}</div>
              <small>{t("จาก 4 รีวิว")}</small>
            </div>
            <div className="rating-score-list">
              {scores.map((label) => (
                <div className="rating-score-row" key={label}><span>{label}</span><span className="rating-score-track"><span /></span><b>5.0</b></div>
              ))}
            </div>
            {reviews.map((review) => (
              <div className="rating-customer-review" key={review.date}>
                <div className="rating-review-meta"><span className="rating-review-avatar"><UserRound size={15} aria-hidden="true" /></span><time dateTime={review.date}>{review.displayDate}</time><span className="rating-review-score" role="img" aria-label="5/5">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={11} fill="currentColor" aria-hidden="true" />)}</span></div>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}
