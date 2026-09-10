import { useLanguage } from "../../LanguageContext";
import { useEffect, useRef } from "react";

import {
  ChevronRight,
  Wifi,
  ArrowLeftRight,
  Bell,
  CalendarDays,
  MessageSquare,
  Shield,
  UserRound,
  WalletCards,
} from "lucide-react";

import "./styles/style-phone-business.css";

function BusinessPhone() {
  const { t } = useLanguage();

  const businessPhoneShellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const phoneShell = businessPhoneShellRef.current;

    if (!phoneShell) return;

    if (!("IntersectionObserver" in window)) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => phoneShell.classList.add("is-visible"));
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        requestAnimationFrame(() => {
          requestAnimationFrame(() => phoneShell.classList.add("is-visible"));
        });
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(phoneShell);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={businessPhoneShellRef}
      className="phone3d-wrapper business-phone-shell"
    >
      <div className="phone3d">
        <div className="phone3d-back">
          <div className="phone-camera">
            <div className="camera-lens lens-1" />

            <div className="camera-lens lens-2" />

            <div className="camera-lens lens-3" />

            <div className="camera-flash" />
          </div>

          <div className="apple-logo"></div>
        </div>

        <div className="phone3d-body">
          <div className="side-button action-button" />

          <div className="side-button volume-up" />

          <div className="side-button volume-down" />

          <div className="side-button power-button" />

          <div className="phone-screen">
            <div className="status-bar">
              <div className="status-date">9:41</div>

              <div className="status-icons">
                <div className="signal-icon">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <Wifi size={15} strokeWidth={2.5} />

                <div className="battery-icon">
                  <div className="battery-level" />

                  <div className="battery-tip" />
                </div>
              </div>
            </div>

            <div className="dynamic-island">
              <div className="dynamic-camera" />
            </div>

            <div className="app-screen business-app-screen">
              <div className="business-service-screen">
                <header className="business-service-header">
                  <div>
                    <strong>pguard</strong>
                    <span>{t("ลูกค้า")}</span>
                  </div>
                  <nav aria-label={t("เมนูผู้ใช้งาน")}>
                    <ArrowLeftRight />
                    <Bell />
                    <MessageSquare />
                    <span className="business-service-avatar">W</span>
                  </nav>
                </header>

                <main className="business-service-main">
                  <h2>{t("บริการ")}</h2>
                  <div className="business-service-list">
                    {[
                      [
                        t("รปภ.มืออาชีพ"),
                        "",
                        t("฿1 / ชม."),
                        t("ขั้นต่ำ 1 ชม."),
                      ],
                      [
                        t("รปภ.ฝึกหัด"),
                        t("ทดสอบ & ฝึก"),
                        t("฿1 / ชม."),
                        t("ขั้นต่ำ 12 ชม."),
                      ],
                      [
                        t("บอดี้การ์ด"),
                        t("เหมาะกับงานหมู่บ้าน"),
                        t("฿60 / ชม."),
                        t("ขั้นต่ำ 12 ชม."),
                      ],
                    ].map(([title, detail, price, minimum]) => (
                      <article className="business-service-card" key={title}>
                        <span className="business-service-icon">
                          <Shield />
                        </span>
                        <div>
                          <strong>{title}</strong>
                          {detail && <span>{detail}</span>}
                          <b>{price}</b>
                          <small>{minimum}</small>
                        </div>
                        <ChevronRight />
                      </article>
                    ))}
                  </div>
                </main>

                <nav
                  className="business-service-bottom-nav"
                  aria-label={t("เมนูหลัก")}
                >
                  <span className="active">
                    <Shield />
                    <small>{t("หน้าหลัก")}</small>
                  </span>
                  <span>
                    <CalendarDays />
                    <small>{t("การจอง")}</small>
                  </span>
                  <span className="business-service-action">
                    <Shield />
                  </span>
                  <span>
                    <WalletCards />
                    <small>{t("กระเป๋า")}</small>
                  </span>
                  <span>
                    <UserRound />
                    <small>{t("โปรไฟล์")}</small>
                  </span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessPhone;
