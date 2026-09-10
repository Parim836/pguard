import { useLanguage } from "../LanguageContext";
import Page from "../components/Page";

function Contact() {
  const { t } = useLanguage();

  return (
    <Page
      title={t("ติดต่อเรา")}
      subtitle={t("เราพร้อมดูแลคุณ")}
    >

      <div className="contact-grid">

        <div className="contact-info">

          <h2>{t("พูดคุยกับทีม PGUARD")}</h2>

          <p>{t("สอบถามรายละเอียดบริการ การใช้งาน หรือความร่วมมือทางธุรกิจ")}</p>

          <div className="contact-item">
            <b>{t("โทรศัพท์")}</b>
            <span>063-336-0777</span>
          </div>

          <div className="contact-item">
            <b>Email</b>
            <span>support@pguard.co.th</span>
          </div>

          <div className="contact-item">
            <b>LINE Official</b>
            <span>@pguard</span>
          </div>

        </div>


        <form
          onSubmit={(e) => e.preventDefault()}
        >

          <input
            placeholder={t("ชื่อ-นามสกุล")}
          />

          <input
            placeholder={t("อีเมล")}
            type="email"
          />

          <input
            placeholder={t("เบอร์โทรศัพท์")}
          />

          <textarea
            placeholder={t("รายละเอียดที่ต้องการสอบถาม")}
            rows={6}
          />

          <button
            className="btn primary"
            type="submit"
          >{t("ส่งข้อความ")}</button>

        </form>

      </div>

    </Page>
  );
}

export default Contact;