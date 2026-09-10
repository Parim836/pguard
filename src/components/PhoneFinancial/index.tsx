import { ChevronLeft, Share2 } from "lucide-react";
import PhoneFrame from "../Phone/PhoneFrame";
import { useLanguage } from "../../LanguageContext";
import "./styles/style.css";

export default function FinancialPhone() {
  const { t } = useLanguage();
  return (
    <div className="smart-search-phone">
      <PhoneFrame>
        <div className="financial-app-screen">
          <div className="financial-app-header">
            <ChevronLeft size={18} aria-hidden="true" />
            <div>
              <strong>{t("ชำระเงิน")}</strong>
              <small>{t("ยืนยันการชำระเงิน")}</small>
            </div>
          </div>
          <div className="financial-app-body">
            <div className="financial-adjustment-note">
              {t(
                "เมื่อจบงานจะปรับตามเวลาจริง และคืนเงินส่วนต่างหากใช้น้อยกว่า",
              )}
            </div>
            <div className="financial-qr-card">
              <h3>{t("สแกนเพื่อโอนผ่าน PromptPay")}</h3>
              <div className="financial-qr-preview">
                <div className="financial-qr-crop">
                  <img
                    src="/financial-payment-reference.jpg"
                    alt="PromptPay QR"
                  />
                </div>
              </div>
              <div className="financial-share-preview">
                <Share2 size={14} aria-hidden="true" />
                {t("บันทึก / แชร์ QR")}
              </div>
              <dl className="financial-payment-details">
                <div>
                  <dt>{t("ยอดที่ต้องโอน")}</dt>
                  <dd>฿1.07</dd>
                </div>
                <div>
                  <dt>{t("บัญชีรับเงิน")}</dt>
                  <dd>086-320-8235</dd>
                </div>
              </dl>
              <p>
                {t(
                  "โอนผ่านแอปธนาคารตามยอดด้านบน แล้วกด “ฉันโอนแล้ว” เพื่อแนบสลิป",
                )}
              </p>
            </div>
            <div className="financial-upload-preview">
              {t("ฉันโอนแล้ว / อัปโหลดสลิป")}
            </div>
            <div className="financial-cancel-preview">{t("ยกเลิกการจอง")}</div>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}
