import PhoneFrame from "./PhoneFrame";
import { useLanguage } from "../../LanguageContext";
import { useLayoutEffect, useRef } from "react";

import {
    Star,
    ChevronRight,
    ChevronLeft,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./style.css";
import mapImage from "./map.png";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   GUARD AVATAR
========================================================= */

function GuardAvatar() {
    return (
        <div className="guard-avatar">
            <div className="avatar-head" />
            <div className="avatar-hat" />
            <div className="avatar-hat-brim" />

            <div className="avatar-body">
                <div className="avatar-tie" />
            </div>
        </div>
    );
}


/* =========================================================
   CHECK
========================================================= */

function Check({
    active = true,
}: {
    active?: boolean;
}) {
    return (
        <span
            className={`document-check ${active ? "active" : "inactive"
                }`}
        >
            {active ? "✓" : "×"}
        </span>
    );
}


/* =========================================================
   SMALL GUARD CARD
========================================================= */

function SmallGuardCard({
    name,
    rating,
    reviews,
}: {
    name: string;
    rating: string;
    reviews: string;
}) {
  const { t } = useLanguage();

    return (
        <div className="small-guard-card">

            <GuardAvatar />

            <div className="small-guard-info">

                <div className="small-guard-name">
                    {name}
                </div>

                <div className="small-rating">

                    <Star
                        size={11}
                        fill="currentColor"
                        strokeWidth={0}
                    />

                    <span>
                        {rating} ({reviews} {t("รีวิว)")}</span>

                    <span className="small-no-document">{t("ไม่มีเอกสาร")}</span>

                </div>

                <div className="small-document-row">

                    <span>
                        <Check />{t("บัตรประชาชน")}</span>

                    <span>
                        <Check />{t("ใบอนุญาต รปภ.")}</span>

                </div>

                <div className="small-document-row">

                    <span>
                        <Check />{t("ใบสมัครงาน")}</span>

                    <span>
                        <Check active={false} />{t("ใบขับขี่")}</span>

                </div>

                <div className="small-review">{t("ดูรีวิว")}<ChevronRight size={11} />

                </div>

            </div>

        </div>
    );
}


/* =========================================================
   PHONE 3D
========================================================= */

function Phone() {
  const { t } = useLanguage();


    const phoneRef =
        useRef<HTMLDivElement>(null);

    const bigCardRef =
        useRef<HTMLDivElement>(null);


    /* =======================================================
       SCROLL ANIMATION
    ======================================================= */

    useLayoutEffect(() => {

        const phone = phoneRef.current;
        const bigCard = bigCardRef.current;

        if (!phone || !bigCard) return;

        const animationTrigger = phone.closest(".smart-search-section") || phone;


        const ctx = gsap.context(() => {


            /* ===================================================
               PHONE
      
               เริ่มจากด้านล่าง
               แล้วเลื่อนขึ้นมาที่ตำแหน่งปกติ
      
               หลังจากถึง y = 0 แล้ว
               จะไม่มี Animation ตัวอื่นมาสั่งให้ Phone ลง
            =================================================== */

            gsap.fromTo(

                phone,

                {
                    y: 150,
                },

                {
                    y: 0,

                    ease: "none",

                    scrollTrigger: {

                        trigger: animationTrigger,

                        start: "top 85%",
                        end: "top 45%",

                        scrub: 0.3,

                        invalidateOnRefresh: true,

                    },

                }

            );


            /* ===================================================
               BIG CARD
      
               เริ่มเล็ก + เยื้องขวา/ล่าง
               แล้วกลับมาขนาดปกติ
            =================================================== */

            gsap.fromTo(

                bigCard,

                {
                    scale: 0.62,
                    x: 90,
                    y: 30,
                },

                {
                    scale: 1,
                    x: 0,
                    y: 0,

                    ease: "none",

                    scrollTrigger: {

                        trigger: animationTrigger,

                        start: "top 85%",
                        end: "top 45%",

                        scrub: 0.3,

                        invalidateOnRefresh: true,

                    },

                }

            );


        }, phoneRef);


        return () => {

            ctx.revert();

        };

    }, []);


    return (

        <div
            className="phone-page"
            style={{
                backgroundImage: `url(${mapImage})`,
            }}
        >

            <PhoneFrame wrapperRef={phoneRef}>
                            <div className="app-screen">


                                {/* =================================================
                    HEADER
                ================================================= */}

                                <div className="app-header">

                                    <button className="back-button">

                                        <ChevronLeft
                                            size={18}
                                            strokeWidth={2.5}
                                        />

                                    </button>


                                    <div className="app-header-text">

                                        <div className="app-title">{t("เลือกเจ้าหน้าที่")}</div>

                                        <div className="app-subtitle">{t("24 คนพร้อมรับงาน")}</div>

                                    </div>


                                    <div className="app-subtitle2">{t("เจ้าหน้าที่ที่ว่างจะตอบรับงานของคุณ (first-come) - เลือกคนที่สนใจไว้เพื่อดูเรตติ้งได้")}</div>

                                </div>


                                {/* =================================================
                    BIG GUARD CARD
                ================================================= */}

                                <div
                                    ref={bigCardRef}
                                    className="big-guard-card"
                                >

                                    <GuardAvatar />


                                    <div className="big-guard-info">

                                        <div className="big-guard-name">{t("สมชาย ใจดี")}</div>


                                        <div className="big-rating">

                                            <Star
                                                size={15}
                                                fill="currentColor"
                                                strokeWidth={0}
                                            />

                                            <span className="rating-value">{t("4.9 (2 รีวิว) ไม่มีเอกสาร")}</span>

                                            

                                        </div>


                                        <div className="document-row">

                                            <span>

                                                <Check />{t("บัตรประชาชน")}</span>


                                            <span>

                                                <Check />{t("ใบอนุญาต รปภ.")}</span>

                                        </div>


                                        <div className="document-row">

                                            <span>

                                                <Check active={false} />{t("ใบสมัครงาน")}</span>

                                        </div>


                                        <div className="document-row">

                                            <span>

                                                <Check />{t("ตรวจประวัติอาชญากรรม")}</span>


                                            <span>

                                                <Check />{t("ใบขับขี่")}</span>

                                        </div>


                                        <div className="big-review">{t("ดูรีวิว")}<ChevronRight
                                                size={13}
                                            />

                                        </div>

                                    </div>

                                </div>


                                {/* =================================================
                    SECOND CARD
                ================================================= */}

                                <div className="small-card-position card-position-2">

                                    <SmallGuardCard
                                        name={t("วิชัย มั่นใจ")}
                                        rating="4.8"
                                        reviews="5"
                                    />

                                </div>


                                {/* =================================================
                    THIRD CARD
                ================================================= */}

                                <div className="small-card-position card-position-3">

                                    <SmallGuardCard
                                        name={t("ธนวัฒน์ ใฝ่รู้")}
                                        rating="4.7"
                                        reviews="3"
                                    />

                                </div>


                                {/* =================================================
                    FOURTH CARD
                ================================================= */}

                                <div className="small-card-position card-position-4">

                                    <SmallGuardCard
                                        name={t("ประเสริฐ ยอดเยี่ยม")}
                                        rating="4.6"
                                        reviews="4"
                                    />

                                </div>


                                {/* =================================================
                    BOOKING
                ================================================= */}

                                <div className="booking-area">

                                    <div className="booking-divider" />

                                    <div className="booking-message">{t("เลือกเจ้าหน้าที่ที่ต้องการก่อน")}</div>

                                    <button className="booking-button">{t("ยืนยันการจอง")}</button>

                                </div>


                            </div>
            </PhoneFrame>

        </div>

    );

}


export default Phone;
