import { useLanguage } from "../../LanguageContext";
import { useEffect, useRef } from "react";

import {
    ArrowLeftRight,
    Bell,
    CalendarDays,
    ClipboardCheck,
    FileCheck2,
    MapPin,
    MessageSquare,
    Shield,
    UserRound,
    WalletCards,
    Wifi,
} from "lucide-react";

import "./style-phoneG.css";


/* =========================================================
   GUARD PHONE 3D
========================================================= */

function GuardPhone() {
  const { t } = useLanguage();

    const guardPhoneShellRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const phoneShell = guardPhoneShellRef.current;

        if (!phoneShell) return;

        if (!("IntersectionObserver" in window)) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    phoneShell.classList.add("is-visible");
                });
            });

            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        phoneShell.classList.add("is-visible");
                    });
                });

                observer.disconnect();
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(phoneShell);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={guardPhoneShellRef}
            className="phone3d-wrapper guard-phone-shell"
        >

            <div className="phone3d">

                {/* =====================================================
            PHONE BACK
        ===================================================== */}

                <div className="phone3d-back">

                    <div className="phone-camera">

                        <div className="camera-lens lens-1" />
                        <div className="camera-lens lens-2" />
                        <div className="camera-lens lens-3" />

                        <div className="camera-flash" />

                    </div>

                    <div className="apple-logo">
                        
                    </div>

                </div>


                {/* =====================================================
            PHONE BODY
        ===================================================== */}

                <div className="phone3d-body">

                    <div className="side-button action-button" />
                    <div className="side-button volume-up" />
                    <div className="side-button volume-down" />
                    <div className="side-button power-button" />


                    {/* =================================================
              PHONE SCREEN
          ================================================= */}

                    <div className="phone-screen">


                        {/* =================================================
                STATUS BAR
            ================================================= */}

                        <div className="status-bar">

                            <div className="status-date">
                                9:41
                            </div>

                            <div className="status-icons">

                                <div className="signal-icon">
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>

                                <Wifi
                                    size={15}
                                    strokeWidth={2.5}
                                />

                                <div className="battery-icon">
                                    <div className="battery-level" />
                                    <div className="battery-tip" />
                                </div>

                            </div>

                        </div>


                        {/* =================================================
                DYNAMIC ISLAND
            ================================================= */}

                        <div className="dynamic-island">

                            <div className="dynamic-camera" />

                        </div>


                        {/* =================================================
                GUARD APP
            ================================================= */}

                        <div className="app-screen guard-app-screen">


                            {/* =================================================
                  HEADER
                  BUSINESS STYLE
              ================================================= */}

                            <header className="guard-header">

                                <div className="guard-header-brand">

                                    <strong>
                                        pguard
                                    </strong>

                                    <span>{t("เจ้าหน้าที่")}</span>

                                </div>


                                <nav
                                    className="guard-header-nav"
                                    aria-label={t("เมนูผู้ใช้งาน")}
                                >

                                    <ArrowLeftRight />

                                    <Bell />

                                    <MessageSquare />

                                    <span className="guard-avatar">
                                        W
                                    </span>

                                </nav>

                            </header>


                            {/* =================================================
                  MAIN
              ================================================= */}

                            <main className="guard-main">

                                {/* GREETING */}

                                <div className="guard-greeting">

                                    <div className="guard-greeting-avatar">
                                        W
                                    </div>

                                    <div>

                                        <span>{t("สวัสดีตอนเช้า")}</span>

                                        <strong>{t("พัชรกร ภูมิใจ")}</strong>

                                    </div>

                                </div>


                                {/* READY CARD */}

                                <section className="guard-ready-card">

                                    <div className="guard-ready-top">

                                        <div>

                                            <h2>{t("พร้อมรับงาน")}</h2>

                                            <p>{t("มองเห็นโดยลูกค้าใกล้เคียง")}</p>

                                        </div>

                                        <div className="guard-toggle">
                                            <span />
                                        </div>

                                    </div>


                                    <div className="guard-ready-bottom">
                                        <div className="guard-ready-location">
                                            <div className="guard-divider" />
                                            <span>

                                                <MapPin size={10} />{t("GPS เชื่อมต่อแล้ว · แม่นยำสูง")}</span>

                                            <strong>{t("5 ม.")}</strong>
                                        </div>

                                    </div>

                                </section>


                                {/* STATISTICS */}

                                <section className="guard-stats">

                                    <div className="guard-stat">

                                        <strong>{t("฿0")}</strong>

                                        <span>{t("รายได้วันนี้")}</span>

                                    </div>


                                    <div className="guard-stat">

                                        <strong>
                                            0
                                        </strong>

                                        <span>{t("งานวันนี้")}</span>

                                    </div>


                                    <div className="guard-stat">

                                        <strong>
                                            1.0★
                                        </strong>

                                        <span>{t("คะแนน")}</span>

                                    </div>

                                </section>


                                {/* CURRENT JOB */}

                                <section className="guard-job-section">

                                    <div className="guard-section-title">

                                        <strong>{t("งานที่กำลังทำ")}</strong>

                                        <span>{t("ดูทั้งหมด")}</span>

                                    </div>

                                    <div className="guard-empty-card">

                                        <ClipboardCheck size={18} />

                                        <span>{t("ยังไม่มีงานที่กำลังทำ")}</span>

                                    </div>

                                </section>


                                {/* INSPECTION */}

                                <section className="guard-job-section">

                                    <div className="guard-section-title">

                                        <strong>{t("งานตรวจรับ")}</strong>

                                    </div>

                                    <div className="guard-empty-card guard-inspection">

                                        <FileCheck2 size={18} />

                                        <span>{t("ยังไม่มีงานตรวจรับ")}</span>

                                    </div>

                                </section>

                            </main>


                            {/* =================================================
                  BOTTOM NAV
                  BUSINESS STYLE
              ================================================= */}

                            <nav
                                className="guard-bottom-nav"
                                aria-label={t("เมนูหลัก")}
                            >

                                <span className="guard-nav-item active">

                                    <Shield />

                                    <small>{t("หน้าหลัก")}</small>

                                </span>


                                <span className="guard-nav-item">

                                    <CalendarDays />

                                    <small>{t("งาน")}</small>

                                </span>


                                <span className="guard-nav-center">

                                    <Shield />

                                </span>


                                <span className="guard-nav-item">

                                    <WalletCards />

                                    <small>{t("รายได้")}</small>

                                </span>


                                <span className="guard-nav-item">

                                    <UserRound />

                                    <small>{t("โปรไฟล์")}</small>

                                </span>

                            </nav>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default GuardPhone;