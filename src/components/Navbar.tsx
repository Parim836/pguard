import useBrandIntro from "../hooks/useBrandIntro";
import { useLanguage } from "../LanguageContext";
import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { Menu, X } from "lucide-react";

import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const { t } = useLanguage();

  const [open, setOpen] = useState(false);

  const location = useLocation();

  useBrandIntro();

  const links = [
    [t("หน้าหลัก"), "/"],
    [t("ฟีเจอร์"), "/features"],
    [t("สำหรับธุรกิจ"), "/business"],
    [t("สำหรับเจ้าหน้าที่"), "/guard"],
    [t("ติดต่อเรา"), "/contact"],
  ];

  return (
    <>
      <div className="brand-intro-overlay">
        <div className="brand-intro">
          <div className="intro-logo">
            <img src="/logo.png" alt="PGUARD Logo" />
          </div>

          <div className="intro-brand-text">
            <div className="intro-word">
              {"PGUARD".split("").map((letter, index) => (
                <span key={index} className="logo-letter">
                  {letter}
                </span>
              ))}
            </div>

            <small className="intro-tagline">Security Guard Platform</small>
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <Link
            to="/"
            className="nav-logo-space"
            onClick={() => setOpen(false)}
            aria-label="PGUARD Home"
          />

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            {open ? <X /> : <Menu />}
          </button>

          <nav className={open ? "nav-links open" : "nav-links"}>
            {links.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className={location.pathname === path ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}

            <LanguageSwitcher />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
