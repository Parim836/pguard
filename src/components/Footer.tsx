import { useLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useLanguage();

  return (
    <>
      <section className="download-cta">
        <div className="container cta-inner">
          <div className="cta-content">
            <h2>
              {t("ดาวน์โหลดแอป PGUARD")}
              <br />
              <span>{t("เริ่มต้นความปลอดภัยที่ง่ายกว่าเดิม")}</span>
            </h2>
          </div>

          <div className="store-row">
            <a href="#" className="store-btn">
              <i className="bi bi-apple"></i>

              <span className="store-text">
                <small>Download on the</small>

                <strong>App Store</strong>
              </span>
            </a>

            <a href="#" className="store-btn">
              <i className="bi bi-google-play"></i>

              <span className="store-text">
                <small>GET IT ON</small>

                <strong>Google Play</strong>
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand-column">
            <Link to="/" className="brand footer-brand">
              <img src="/logo.png" alt="PGUARD Logo" className="brand-logo" />

              <span>
                <b>PGUARD</b>

                <small>Security Guard Platform</small>
              </span>
            </Link>

            <p>
              {t(
                "แพลตฟอร์มเรียกเจ้าหน้าที่รักษาความปลอดภัยมืออาชีพ ช่วยให้ธุรกิจเข้าถึงเจ้าหน้าที่รักษาความปลอดภัย ที่มีคุณภาพได้ง่าย รวดเร็ว และปลอดภัย",
              )}
            </p>
          </div>

          <div className="footer-column">
            <b>{t("บริการ")}</b>

            <Link to="/documents">{t("ตัวอย่างเอกสาร")}</Link>

            <Link to="/business">{t("สำหรับธุรกิจ")}</Link>

            <Link to="/guard">{t("สำหรับเจ้าหน้าที่")}</Link>
          </div>

          <div className="footer-column">
            <b>{t("เกี่ยวกับเรา")}</b>

            <Link to="/contact">{t("ติดต่อเรา")}</Link>

            <Link to="/features">{t("ระบบของเรา")}</Link>
          </div>

          <div className="footer-column footer-download">
            <b>{t("ติดตามเรา")}</b>
            <div className="store-row">
              <p>{t("แอปคนไทย โดยคนไทย เพื่อคนไทย")}</p>

              <div className="footer-social">
                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#" aria-label="Line">
                  <i className="bi bi-line"></i>
                </a>

                <a href="#" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">© 2026 PGUARD. All rights reserved.</div>
      </footer>
    </>
  );
}

export default Footer;
