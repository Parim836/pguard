import { useState } from "react";
import { features, additionalFeatures } from "../data/features";
import { useLanguage } from "../LanguageContext";
import "./styles/SolutionAccordion.css";

const solutions = [...features, ...additionalFeatures];

function SolutionRow() {
  const [active, setActive] = useState<number | null>(null);
  const { language } = useLanguage();

  return (
    <div className="solution-row">
      {solutions.map((feature, index) => (
        <button
          key={feature.title}
          type="button"
          className={`solution-panel${active === index ? " is-active" : ""}`}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(index)}
          onBlur={() => setActive(null)}
          onClick={() => setActive(index)}
          aria-expanded={active === index}
          aria-label={language === "TH" ? feature.titleTh : feature.title}
          aria-controls={`solution-detail-${index}`}
        >
          <span className="solution-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="solution-collapsed-title" aria-hidden="true">
            {language === "TH" ? feature.titleTh : feature.title}
          </span>
          <span
            className="solution-detail"
            id={`solution-detail-${index}`}
            aria-hidden={active !== index}
          >
            <span className="solution-title">
              {language === "TH" ? feature.titleTh : feature.title}
            </span>
            <span className="solution-description">
              {language === "TH" ? feature.text : feature.textEn}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}

export default function SolutionAccordion() {
  return (
    <div className="home-solutions">
      <SolutionRow />
    </div>
  );
}
