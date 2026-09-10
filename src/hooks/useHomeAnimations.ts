import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function useHomeAnimations(
  pageRef: RefObject<HTMLDivElement | null>,
) {
  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const ctx = gsap.context(() => {
      const hero = page.querySelector(".hero") as HTMLElement | null;

      const heroContent = page.querySelectorAll(".hero-content");

      const guardBanner = page.querySelector(".home-guard-banner");
      const guardImage = page.querySelector(".home-guard-banner img");
      const guardMessage = page.querySelector(".home-guard-message");

      if (guardBanner && guardImage && guardMessage) {
        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        gsap.set(guardImage, {
          autoAlpha: 0,
          y: reducedMotion ? 0 : 24,
          clipPath: "inset(0% 0% 0% 0% round 0px 0px 0px 0px)",
          xPercent: 0,
          force3D: true,
        });
        gsap.set(guardMessage, {
          autoAlpha: 0,
          x: reducedMotion ? 0 : 60,
          force3D: true,
        });

        const enterBanner = gsap
          .timeline({ paused: true })
          .to(guardImage, {
            autoAlpha: 1,
            y: 0,
            duration: reducedMotion ? 0 : 0.7,
            ease: "power2.out",
          })
          .to(
            guardImage,
            {
              clipPath: "inset(0% 40% 0% 0% round 0px 24px 24px 0px)",
              xPercent: 0,
              duration: reducedMotion ? 0 : 0.7,
              ease: "sine.inOut",
            },
            reducedMotion ? ">" : ">+=0.5",
          )
          .to(
            guardMessage,
            {
              autoAlpha: 1,
              x: 0,
              duration: reducedMotion ? 0 : 0.7,
              ease: "sine.inOut",
            },
            "<",
          );

        const leaveBanner = gsap
          .timeline({
            paused: true,
            defaults: {
              duration: reducedMotion ? 0 : 0.7,
              ease: "sine.inOut",
            },
          })
          .to(
            guardMessage,
            {
              autoAlpha: 0,
              x: reducedMotion ? 0 : 60,
            },
            0,
          )
          .to(
            guardImage,
            {
              autoAlpha: 0,
              clipPath: "inset(0% 0% 0% 0% round 0px 0px 0px 0px)",
              xPercent: 0,
              y: reducedMotion ? 0 : 24,
            },
            0,
          );

        ScrollTrigger.create({
          trigger: guardBanner,
          start: "top 75%",
          end: "center top",
          invalidateOnRefresh: true,
          onToggle: ({ isActive }) => {
            // Resume from the current appearance even during rapid scrolling.
            if (isActive) {
              leaveBanner.pause();
              enterBanner.invalidate().restart();
            } else {
              enterBanner.pause();
              leaveBanner.invalidate().restart();
            }
          },
        });
      }

      const appSection = page.querySelector(".app-section");
      const appHeading = page.querySelector(".app-section .app-section-header");

      if (appSection && appHeading) {
        gsap.fromTo(
          appHeading,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: appSection,
              start: "top 85%",
              end: "top 35%",
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          },
        );
      }

      const appCards = page.querySelector(
        ".app-section .app-cards",
      ) as HTMLElement | null;

      const featuresSection = page.querySelector(
        ".home-features-section",
      ) as HTMLElement | null;

      const featuresHeading = page.querySelector(
        ".home-features-heading",
      ) as HTMLElement | null;

      const featuresGrid = page.querySelector(
        ".home-solutions",
      ) as HTMLElement | null;

      if (
        !hero ||
        !heroContent.length ||
        !appCards ||
        !featuresSection ||
        !featuresHeading ||
        !featuresGrid
      ) {
        return;
      }

      gsap.set(heroContent, {
        opacity: 0,
        y: 40,
      });

      gsap.set(appCards, {
        opacity: 0,
        y: 50,
      });

      gsap.set(featuresHeading, {
        opacity: 0,
        y: 50,
      });

      /* Animate opacity only to preserve the feature grid position. */

      gsap.set(featuresGrid, {
        opacity: 0,
      });

      const showHomeContent = () => {
        const tl = gsap.timeline();

        tl.to(heroContent, {
          opacity: 1,

          y: 0,

          duration: 0.8,

          stagger: 0.1,

          ease: "power3.out",

          overwrite: true,
        });

        tl.call(() => {
          ScrollTrigger.refresh();
        });
      };

      window.addEventListener("pguard-intro-complete", showHomeContent);

      if (document.body.dataset.pguardIntro === "complete") {
        showHomeContent();
      }

      ScrollTrigger.create({
        trigger: hero,

        start: "top top",

        end: "bottom 35%",

        scrub: 0.8,

        invalidateOnRefresh: true,

        onUpdate: (self) => {
          if (document.body.dataset.pguardIntro !== "complete") {
            return;
          }

          const progress = self.progress;

          const smoothProgress = gsap.parseEase("power2.inOut")(progress);

          const opacity = 1 - smoothProgress;

          const y = -45 * smoothProgress;

          gsap.set(heroContent, {
            opacity,
            y,
          });
        },
      });

      gsap.fromTo(
        appCards,

        {
          opacity: 0,
          y: 50,
        },

        {
          opacity: 1,

          y: 0,

          ease: "none",

          overwrite: "auto",

          scrollTrigger: {
            trigger: appCards,

            start: "top 85%",

            end: "top 45%",

            scrub: 0.8,

            invalidateOnRefresh: true,
          },
        },
      );

      const featuresTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: featuresSection,

          start: "top 85%",

          end: "top 35%",

          scrub: 0.8,

          invalidateOnRefresh: true,
        },
      });

      featuresTimeline.to(
        featuresHeading,

        {
          opacity: 1,

          y: 0,

          ease: "none",
        },

        0,
      );

      /* Animate opacity only to preserve the feature grid position. */

      featuresTimeline.to(
        featuresGrid,

        {
          opacity: 1,

          ease: "none",
        },

        0,
      );

      ScrollTrigger.refresh();

      return () => {
        window.removeEventListener("pguard-intro-complete", showHomeContent);
      };
    }, page);

    return () => {
      ctx.revert();
    };
  }, []);
}
