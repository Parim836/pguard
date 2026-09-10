import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function useFeatureAnimations(
  sectionRef: RefObject<HTMLDivElement | null>,
  language: string,
) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        section
          .querySelectorAll(
            ".smart-search-section, .hourly-report, .rating-section, .financial-section, .registration-section",
          )
          .forEach((phoneSection) => {
            const phone = phoneSection.querySelector(".smart-search-phone");
            if (!phone) return;
            const isSmartSearch = phoneSection.matches(".smart-search-section");
            gsap.fromTo(
              phone,
              { opacity: 0, y: 80 },
              {
                opacity: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: phoneSection,
                  start: "top 85%",
                  end: isSmartSearch ? "top 45%" : "top 35%",
                  scrub: isSmartSearch ? 0.3 : 0.8,
                  invalidateOnRefresh: true,
                },
              },
            );
          });

        const content = section.querySelectorAll(
          ".smart-search-content > :not(.smart-search-features), .smart-search-feature, " +
            ".registration-content > :not(.registration-steps), .registration-step, " +
            ".hourly-report-content > :not(.hourly-report-grid), .hourly-report-card, " +
            ".rating-content > :not(.rating-benefits), .rating-benefits > div, " +
            ".financial-content > :not(.financial-grid), .financial-card",
        );

        content.forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            },
          );
        });
      },
      section,
    );

    const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      cancelAnimationFrame(refreshFrame);
      media.revert();
    };
  }, []);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, [language]);
}
