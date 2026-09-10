import { useLanguage } from "../LanguageContext";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  FileCheck2,
  GraduationCap,
  SearchCheck,
  Car,
  ShieldCheck,
  Info,
  Lock,
  ChevronRight,
} from "lucide-react";

import Page from "../components/Page";

type DocumentItem = {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  icon: React.ElementType;
  requirements: string[];
  tip: string;
  image: string;
};

function Documents() {
  const { t } = useLanguage();

  const documents: DocumentItem[] = [
    {
      id: 1,
      title: t("บัตรประจำตัวประชาชน"),
      shortTitle: t("บัตรประชาชน"),
      description:
        t("ใช้สำหรับยืนยันตัวตนของผู้สมัคร ข้อมูลบนบัตรต้องตรงกับข้อมูลที่ใช้สมัคร PGUARD"),
      icon: CreditCard,
      requirements: [
        t("เห็นข้อมูลบนบัตรอย่างชัดเจน"),
        t("บัตรต้องอยู่ในสภาพสมบูรณ์และไม่หมดอายุ"),
        t("ชื่อและข้อมูลต้องตรงกับผู้สมัคร"),
        t("อัปโหลดเป็นรูปสี ขนาดไฟล์ไม่เกิน 5MB"),
      ],
      tip: t("กรุณาอัปโหลดไฟล์ภาพที่ชัดเจน ในรูปแบบ JPG, PNG หรือ PDF"),
      image: "/IDcard.jpg",
    },
    {
      id: 2,
      title: t("ใบอนุญาตประกอบอาชีพเจ้าหน้าที่รักษาความปลอดภัย"),
      shortTitle: t("ใบอนุญาต"),
      description:
        t("เอกสารยืนยันว่าผู้สมัครได้รับอนุญาตให้ประกอบอาชีพเจ้าหน้าที่รักษาความปลอดภัย ต้องเป็นเอกสารที่ออกโดยหน่วยงานที่เกี่ยวข้อง"),
      icon: FileCheck2,
      requirements: [
        t("ใบอนุญาตต้องยังไม่หมดอายุ"),
        t("ข้อมูลผู้ถือใบอนุญาตต้องตรงกับผู้สมัคร"),
        t("ภาพเอกสารต้องเห็นรายละเอียดครบถ้วน ไม่ถูกตัดขอบหรือเบลอ"),
        t("ต้องเป็นเอกสารที่ออกโดยหน่วยงานที่เกี่ยวข้องและสามารถตรวจสอบได้"),
      ],
      tip: t("กรุณาอัปโหลดไฟล์ภาพที่ชัดเจน ในรูปแบบ JPG, PNG หรือ PDF"),
      image: "/documents/guard-license.jpg",
    },
    {
      id: 3,
      title: t("ใบรับรองการฝึกอบรม รปภ."),
      shortTitle: t("ใบรับรองการฝึก"),
      description:
        t("เอกสารรับรองการผ่านหลักสูตรหรือการฝึกอบรมที่เกี่ยวข้องกับการรักษาความปลอดภัย"),
      icon: GraduationCap,
      requirements: [
        t("ชื่อผู้สมัครต้องเห็นได้อย่างชัดเจน"),
        t("ต้องเห็นรายละเอียดหลักสูตร"),
        t("เอกสารต้องอ่านข้อมูลได้ครบถ้วน"),
      ],
      tip: t("กรุณาอัปโหลดไฟล์ภาพที่ชัดเจน ในรูปแบบ JPG, PNG หรือ PDF"),
      image: "/documents/training-certificate.jpg",
    },
    {
      id: 4,
      title: t("ใบตรวจสอบประวัติ"),
      shortTitle: t("ใบตรวจประวัติ"),
      description:
        t("เอกสารสำหรับตรวจสอบประวัติของผู้สมัคร เพื่อสร้างความมั่นใจในการให้บริการและความปลอดภัยในการปฏิบัติงาน"),
      icon: SearchCheck,
      requirements: [
        t("เอกสารต้องเป็นฉบับที่ออกโดยหน่วยงานที่เกี่ยวข้อง"),
        t("ข้อมูลส่วนบุคคลต้องตรงกับผู้สมัครและอ่านได้อย่างชัดเจน"),
        t("เอกสารควรเป็นฉบับที่ยังอยู่ในระยะเวลาที่สามารถใช้อ้างอิงได้"),
        t("ภาพเอกสารต้องเห็นครบทุกส่วน ไม่ถูกตัดขอบหรือเบลอ"),
      ],
      tip: t("กรุณาอัปโหลดไฟล์ภาพที่ชัดเจน ในรูปแบบ JPG, PNG หรือ PDF"),
      image: "/documents/background-check-sample.png",
    },
    {
      id: 5,
      title: t("ใบอนุญาตขับขี่"),
      shortTitle: t("ใบขับขี่"),
      description:
        t("ใช้ยืนยันสิทธิ์ในการขับขี่ยานพาหนะ สำหรับงานรักษาความปลอดภัยที่มีความจำเป็นต้องใช้รถ"),
      icon: Car,
      requirements: [
        t("ข้อมูลในใบขับขี่ต้องตรงกับบัตรประจำตัวประชาชน"),
        t("เห็นข้อมูลชัดเจนและครบถ้วน"),
        t("ใบขับขี่อยู่ในสภาพสมบูรณ์และไม่หมดอายุ"),
        t("ชื่อและข้อมูลต้องตรงกับผู้สมัคร"),
      ],
      tip: t("กรุณาอัปโหลดไฟล์ภาพที่ชัดเจน ในรูปแบบ JPG, PNG หรือ PDF"),
      image: "/documents/driving-license-sample.png",
    },
  ];


  const [activeIndex, setActiveIndex] = useState(0);

  const activeDocument = documents[activeIndex];
  const Icon = activeDocument.icon;

  const nextDocument = () => {
    setActiveIndex((current) =>
      current === documents.length - 1 ? 0 : current + 1
    );
  };

  const previousDocument = () => {
    setActiveIndex((current) =>
      current === 0 ? documents.length - 1 : current - 1
    );
  };

  return (
    <Page
      title={t("เอกสารสำหรับสมัครเป็น รปภ.")}
      subtitle={t("เตรียมเอกสารให้ครบ เพื่อให้การสมัครกับ PGUARD เป็นเรื่องง่ายและรวดเร็วยิ่งขึ้น")}
    >
      <section className="documents-page">

        {/* =========================================================
            STEP NAVIGATION
        ========================================================= */}
        <div className="documents-steps">
          {documents.map((document, index) => {
            const StepIcon = document.icon;
            const isActive = index === activeIndex;

            return (
              <button
                key={document.id}
                className={`document-step ${
                  isActive ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="document-step-number">
                  {String(document.id).padStart(2, "0")}
                </span>

                <span className="document-step-icon">
                  <StepIcon size={19} strokeWidth={2} />
                </span>

                <span className="document-step-title">
                  {document.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* =========================================================
            MAIN PREVIEW
        ========================================================= */}
        <div className="document-preview">

          {/* =======================================================
              LEFT — DOCUMENT INFORMATION
          ======================================================= */}
          <div className="document-preview-info">

            <div className="document-label">
              <span>{t("เอกสาร")} {String(activeDocument.id).padStart(2, "0")}
              </span>
            </div>

            <h2>{activeDocument.title}</h2>

            <p className="document-description">
              {activeDocument.description}
            </p>

            <div className="document-requirements">
              <h3>{t("เอกสารที่ถูกต้องควรมีลักษณะดังนี้")}</h3>

              <div className="requirement-list">
                {activeDocument.requirements.map(
                  (requirement) => (
                    <div
                      className="requirement-item"
                      key={requirement}
                    >
                      <CheckCircle2 size={18} />
                      <span>{requirement}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="document-tip">
              <Info size={18} />
              <div className="document-tip-content">
                <strong>{t("คำแนะนำ")}</strong>
                <span>{activeDocument.tip}</span>
              </div>
            </div>

            {/* =====================================================
                CONTROLS
            ===================================================== */}
            <div className="document-controls">

              <button
                className="document-control secondary"
                onClick={previousDocument}
                aria-label={t("เอกสารก่อนหน้า")}
              >
                <ArrowLeft size={18} />
              </button>

              <div className="document-counter">
                <strong>
                  {String(activeDocument.id).padStart(2, "0")}
                </strong>

                <span>/</span>

                <span>
                  {String(documents.length).padStart(2, "0")}
                </span>
              </div>

              <button
                className="document-control primary"
                onClick={nextDocument}
                aria-label={t("เอกสารถัดไป")}
              >
                <ArrowRight size={18} />
              </button>

            </div>
          </div>

          {/* =======================================================
              RIGHT — DOCUMENT PREVIEW
          ======================================================= */}
          <div className="document-preview-visual">

            <div className="document-visual-header">

              <div className="document-verified">
                <ShieldCheck size={20} />
                <div className="document-verified-text">
                  <strong>{t("ตัวอย่าง")}</strong>
                  <span>{t("เพื่อประกอบการอ้างอิงเท่านั้น")}</span>
                </div>
              </div>
            </div>

            <div className="document-image-wrapper">

              <div className="document-image-card">

                {activeDocument.id === 5 ? (
                  <svg
                    viewBox="163 121 1252 749"
                    role="img"
                    aria-label={`${t("ตัวอย่าง")} ${activeDocument.title}`}
                    style={{ width: "88%", maxWidth: 900, maxHeight: "86%", marginLeft: 20 }}
                  >
                    <defs>
                      <clipPath id="driving-license-card-outline">
                        <rect x="163" y="121" width="1252" height="749" rx="36" />
                      </clipPath>
                    </defs>
                    <image
                      href={activeDocument.image}
                      width="1578"
                      height="997"
                      clipPath="url(#driving-license-card-outline)"
                    />
                  </svg>
                ) : <img
                  src={activeDocument.image}
                  alt={`${t("ตัวอย่าง")} ${activeDocument.title}`}
                  className="document-preview-image"
                />}

                <div className="document-placeholder">
                  <Icon
                    size={54}
                    strokeWidth={1.5}
                  />

                  <strong>
                    {activeDocument.shortTitle}
                  </strong>

                  <span>{t("ตัวอย่างเอกสาร")}</span>
                </div>

              </div>

            </div>

            <p className="document-image-note">
              <Info size={13} />{t("รูปภาพนี้ใช้เพื่อเป็นตัวอย่างเท่านั้น กรุณาแนบเอกสารฉบับจริงของท่าน")}</p>

          </div>
        </div>

        {/* =========================================================
            TRUST BAR
        ========================================================= */}
        <div className="documents-trust-bar">
          <div className="documents-trust-info">
            <span className="documents-trust-icon">
              <ShieldCheck size={20} />
            </span>
            <div className="documents-trust-text">
              <strong>{t("มั่นใจในความปลอดภัย")}</strong>
              <span>{t("เอกสารของคุณจะถูกเก็บรักษาอย่างปลอดภัยตามนโยบายความเป็นส่วนตัวของ PGUARD")}</span>
            </div>
          </div>

          <a href="/privacy" className="documents-trust-link">
            <Lock size={16} />{t("นโยบายความเป็นส่วนตัว")}<ChevronRight size={16} />
          </a>
        </div>

      </section>
    </Page>
  );
}

export default Documents;
