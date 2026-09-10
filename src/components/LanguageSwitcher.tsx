import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../LanguageContext";

function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open]);

  const changeLanguage = (lang: "TH" | "EN") => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className="language-switcher"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
    >
      <button
        className="language-btn"
        ref={buttonRef}
        type="button"
        aria-label={language === "TH" ? "เลือกภาษา" : "Choose language"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {language}
        <ChevronDown size={14} />
      </button>

      {open && (
        <div className="language-menu">
          <button
            type="button"
            lang="th"
            aria-pressed={language === "TH"}
            onClick={() => changeLanguage("TH")}
          >
            TH - ไทย
          </button>

          <button
            type="button"
            lang="en"
            aria-pressed={language === "EN"}
            onClick={() => changeLanguage("EN")}
          >
            EN - English
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
