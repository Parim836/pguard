import { Gift, MessageSquareText, Star, TrendingUp } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import RatingPhone from "./PhoneRating";
import "./Rating.css";

export default function Rating() {
  const { t } = useLanguage();
  return (
    <section className="rating-section" aria-labelledby="rating-title">
      <div className="rating-content">
        <h2 id="rating-title">{t("ทุกคะแนนมีความหมาย")}<br /><span>{t("พัฒนาบริการให้ดียิ่งขึ้น")}</span></h2>
        <p className="rating-lead">{t("ระบบ Rating ช่วยกระตุ้นให้เจ้าหน้าที่ รปภ. ทำงานเต็มที่มากยิ่งขึ้นและวัดผลได้ตรง เมื่อมีการให้คะแนนรีวิวจากลูกค้า เจ้าหน้าที่จะมีแรงจูงใจในการรักษามาตรฐานการบริการ และพัฒนาคุณภาพการทำงานอย่างต่อเนื่อง")}</p>
        <div className="rating-benefits">
          <div><span className="rating-benefit-icon"><MessageSquareText size={21} aria-hidden="true" /></span><div><h3>{t("เสียงจากลูกค้า สู่บริการที่ดีขึ้น")}</h3><p>{t("รีวิวจากการใช้บริการช่วยสะท้อนคุณภาพการทำงานของเจ้าหน้าที่")}</p></div></div>
          <div><span className="rating-benefit-icon"><TrendingUp size={21} aria-hidden="true" /></span><div><h3>{t("รักษามาตรฐานอย่างต่อเนื่อง")}</h3><p>{t("นำคะแนนและความคิดเห็นมาพัฒนาการบริการในทุกงาน")}</p></div></div>
        </div>
        <div className="rating-reward">
          <span className="rating-reward-icon"><Gift size={27} aria-hidden="true" /></span>
          <div><span className="rating-reward-label">BONUS GIFT</span><h3>{t("รางวัลและโบนัสพิเศษ")}</h3><p>{t("สำหรับเจ้าหน้าที่ที่ได้รับ Rating ดีอย่างต่อเนื่อง")}</p></div>
          <Star className="rating-reward-star" size={62} aria-hidden="true" />
        </div>
      </div>
      <div className="rating-visual">
        <RatingPhone />
      </div>
    </section>
  );
}
