import { ChevronLeft, Plus } from "lucide-react";
import PhoneFrame from "../Phone/PhoneFrame";
import { useLanguage } from "../../LanguageContext";
import "./style.css";

export default function RegistrationPhone() {
  const { t } = useLanguage();
  const documents = [t("บัตรประชาชน"), t("ใบอนุญาต รปภ."), t("ใบรับรองการฝึก"), t("ใบตรวจประวัติ"), t("ใบขับขี่")];
  return (
    <div className="smart-search-phone">
      <PhoneFrame>
        <div className="registration-app-screen">
          <ChevronLeft size={19} aria-hidden="true" />
          <div className="registration-app-progress" aria-hidden="true"><span /><span /><span /><span /></div>
          <small className="registration-app-step">{t("ขั้นที่ 2 จาก 4")}</small>
          <h3>{t("อัปโหลดเอกสาร")}</h3>
          <p>{t("ถ่ายรูปหรือเลือกจากแกลเลอรี · ลายน้ำเพื่อความปลอดภัย")}</p>
          <div className="registration-document-list">
            {documents.map((document) => (
              <div className="registration-document-row" key={document}>
                <span className="registration-upload-icon"><Plus size={18} aria-hidden="true" /></span>
                <div><strong>{document}</strong><small>{t("ยังไม่อัปโหลด")}</small></div>
                <span className="registration-upload-label">{t("อัปโหลด")}</span>
              </div>
            ))}
          </div>
          <div className="registration-next-preview">{t("ถัดไป")} (0/5)</div>
        </div>
      </PhoneFrame>
    </div>
  );
}
