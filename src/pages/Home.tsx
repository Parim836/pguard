import useHomeAnimations from "../hooks/useHomeAnimations";
import { useLanguage } from "../LanguageContext";
import {
  ArrowRight,
  Download,
  FileCheck2,
  ShieldCheck,
  Star,
  UserRound,
  Shield,
} from "lucide-react";

import { useRef } from "react";

import { Link } from "react-router-dom";

import HeroVideos from "../components/HeroVideos";
import SolutionAccordion from "../components/SolutionAccordion";

import "../styles.css";

function Home() {
  const { t, language } = useLanguage();

  const pageRef = useRef<HTMLDivElement>(null);

  useHomeAnimations(pageRef);

  return (
    <div ref={pageRef} className="home-page">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy hero-content">
            <span className="eyebrow">PROFESSIONAL GUARD CALLING</span>

            <h1>
              {t("เรียกเจ้าหน้าที่รักษาความปลอดภัยมืออาชีพ")}
              <br />

              <span>{t("ง่าย ครบ จบในแอปเดียว")}</span>
            </h1>

            <p>
              {t(
                "PGUARD แพลตฟอร์มเรียกเจ้าหน้าที่รักษา ความปลอดภัยมืออาชีพ ช่วยให้ธุรกิจเข้าถึง เจ้าหน้าที่รักษาความปลอดภัย ที่มีคุณภาพ พร้อมระบบคัดกรอง ตรวจสอบประวัติ และติดตามงานได้อย่างมั่นใจ",
              )}
            </p>

            <div className="actions">
              <a className="btn primary" href="#download">
                <Download size={18} />
                {t("ดาวน์โหลดแอป")}
              </a>
            </div>

            <div className="trust-row">
              <span>
                <ShieldCheck />
                {t("ตรวจสอบประวัติแล้ว")}
              </span>

              <span>
                <FileCheck2 />
                {t("มีใบอนุญาตถูกต้อง")}
              </span>

              <span>
                <Star />
                {t("รีวิวจากลูกค้า")}
              </span>
            </div>
          </div>

          <div className="hero-visual hero-visual--videos hero-content">
            <HeroVideos />
          </div>
        </div>
      </section>

      <div className="home-guard-banner">
        <img
          src="/images/security-guard-working-wide.png"
          alt={
            language === "TH"
              ? "เจ้าหน้าที่รักษาความปลอดภัยกำลังปฏิบัติงานบริเวณทางเข้าอาคาร"
              : "Security guard on duty at an office building entrance"
          }
          width={2172}
          height={724}
          loading="lazy"
          decoding="async"
        />
        <div className="home-guard-message">
          <div className="home-guard-message-copy">
            <span className="home-guard-message-label">
              {language === "TH" ? "ร่วมงานกับเรา" : "Join our team"}
            </span>
            <h2>
              {language === "TH"
                ? "ร่วมเป็นส่วนหนึ่งกับเรา"
                : "Be part of our team"}
            </h2>
            <p>
              {language === "TH"
                ? "ร่วมสร้างมาตรฐานการดูแลและความปลอดภัยที่ดีกว่าไปด้วยกัน"
                : "Together, we can build a better standard of care and safety."}
            </p>
          </div>
          <div className="home-guard-message-note">
            <span>{language === "TH" ? "เชื่อมั่น" : "Trust"}</span>
            <span>{language === "TH" ? "ปลอดภัย" : "Safety"}</span>
            <span>
              {language === "TH" ? "เติบโตไปด้วยกัน" : "Grow together"}
            </span>
          </div>
        </div>
      </div>

      <section className="section app-section">
        <div className="container">
          <div className="app-section-header">
            <span className="eyebrow">PGUARD APP</span>

            <h2>
              {t("ทุกขั้นตอนง่ายขึ้น")}
              <br />

              <span>{t("ผ่านแอปเดียว")}</span>
            </h2>

            <p>
              {t(
                "ตั้งแต่ค้นหาเจ้าหน้าที่ สมัครงาน รับงาน รายงานการปฏิบัติงาน ไปจนถึงการชำระเงิน ทุกอย่างออกแบบให้ใช้งานง่ายและโปร่งใส",
              )}
            </p>
          </div>

          <div className="app-cards">
            <div className="app-card customer-card">
              <div className="app-card-top">
                <div className="app-card-icon">
                  <UserRound size={30} />
                </div>

                <div>
                  <span className="app-card-label">CUSTOMER</span>
                </div>
              </div>

              <h3>{t("สำหรับผู้ว่าจ้าง")}</h3>

              <p>
                {t(
                  "ค้นหาและเรียกเจ้าหน้าที่รักษาความปลอดภัยมืออาชีพ ที่เหมาะกับความต้องการของธุรกิจ พร้อมติดตามสถานะงานได้แบบ Real-time",
                )}
              </p>

              <Link className="btn primary" to="/business">
                {t("เริ่มใช้งานสำหรับผู้ว่าจ้าง")}
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="app-card guard-card">
              <div className="app-card-top">
                <div className="app-card-icon">
                  <Shield size={30} />
                </div>

                <div>
                  <span className="app-card-label">GUARD</span>
                </div>
              </div>

              <h3>{t("สำหรับเจ้าหน้าที่รักษาความปลอดภัย")}</h3>

              <p>
                {t(
                  "สมัครเป็นเจ้าหน้าที่รักษาความปลอดภัย ค้นหาและรับงานที่เหมาะกับคุณ พร้อมจัดการงานและรายได้ผ่านแอปเดียว",
                )}
              </p>

              <Link className="btn primary" to="/guard">
                {t("เริ่มต้นเป็น รปภ.")}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-features-section">
        <div className="container">
          <div className="app-section-header home-features-heading">
            <span className="eyebrow">PGUARD FEATURES</span>
            <h2>
              {language === "TH" ? "โซลูชันของ PGUARD" : "PGUARD Solutions"}
            </h2>
            <p>
              {language === "TH"
                ? "ครบทุกเครื่องมือสำหรับการเรียกและให้บริการ รปภ. อย่างมืออาชีพ"
                : "Everything you need to book and provide professional security services"}
            </p>
          </div>
          <SolutionAccordion />
        </div>
      </section>
    </div>
  );
}

export default Home;
