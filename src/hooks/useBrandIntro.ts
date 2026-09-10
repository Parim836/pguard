import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function useBrandIntro() {
  useLayoutEffect(() => {
    const introOverlay = document.querySelector(
      ".brand-intro-overlay",
    ) as HTMLElement | null;

    const intro = document.querySelector(".brand-intro") as HTMLElement | null;

    const logoSpace = document.querySelector(
      ".nav-logo-space",
    ) as HTMLElement | null;

    const navbar = document.querySelector(".navbar") as HTMLElement | null;

    if (!introOverlay || !intro || !logoSpace || !navbar) {
      return;
    }

    document.body.dataset.pguardIntro = "running";

    const getNavbarPosition = () => {
      const rect = logoSpace.getBoundingClientRect();

      return {
        x: rect.left + rect.width / 2 - window.innerWidth / 2,

        y: rect.top + rect.height / 2 - window.innerHeight / 2,
      };
    };

    gsap.set(introOverlay, {
      opacity: 1,

      backgroundColor: "#ffffff",
    });

    gsap.set(intro, {
      xPercent: -50,
      yPercent: -50,

      x: 0,
      y: 0,

      scale: 1.65,

      opacity: 1,

      transformOrigin: "center center",
    });

    gsap.set(".intro-logo", {
      opacity: 0,

      scale: 0.7,
    });

    gsap.set(".logo-letter", {
      opacity: 0,

      y: 35,
    });

    gsap.set(".intro-tagline", {
      opacity: 0,

      y: 10,
    });

    gsap.set(navbar, {
      opacity: 0,
    });

    const tl = gsap.timeline();

    tl.to(".intro-logo", {
      opacity: 1,

      scale: 1,

      duration: 0.8,

      ease: "power3.out",
    });

    tl.to(
      ".logo-letter",
      {
        opacity: 1,

        y: 0,

        duration: 0.42,

        stagger: 0.1,

        ease: "power3.out",
      },
      "-=0.2",
    );

    tl.to(
      ".intro-tagline",
      {
        opacity: 1,

        y: 0,

        duration: 0.45,

        ease: "power3.out",
      },
      "-=0.25",
    );

    tl.to(
      {},
      {
        duration: 0.5,
      },
    );

    const position = getNavbarPosition();

    tl.to(intro, {
      x: position.x,

      y: position.y,

      scale: 1,

      duration: 1.4,

      ease: "power4.inOut",
    });

    tl.to(
      navbar,
      {
        opacity: 1,

        duration: 0.7,

        ease: "power2.out",

        onStart: () => {
          window.dispatchEvent(new Event("pguard-intro-complete"));
        },
      },
      "<+0.7",
    );

    tl.to(
      introOverlay,
      {
        backgroundColor: "rgba(255,255,255,0)",

        duration: 0.6,

        ease: "power2.out",
      },
      "<+0.15",
    );

    tl.call(() => {
      document.body.dataset.pguardIntro = "complete";
    });

    const handleResize = () => {
      if (document.body.dataset.pguardIntro !== "complete") {
        return;
      }

      const newPosition = getNavbarPosition();

      gsap.set(intro, {
        x: newPosition.x,

        y: newPosition.y,

        scale: 1,
      });
    };

    window.addEventListener("resize", handleResize);

    /* Track layout changes caused by browser zoom as well as window resizing. */

    const resizeObserver = new ResizeObserver(() => {
      if (document.body.dataset.pguardIntro !== "complete") {
        return;
      }

      const newPosition = getNavbarPosition();

      gsap.set(intro, {
        x: newPosition.x,

        y: newPosition.y,

        scale: 1,
      });
    });

    resizeObserver.observe(logoSpace);

    resizeObserver.observe(navbar);

    return () => {
      window.removeEventListener("resize", handleResize);

      resizeObserver.disconnect();

      tl.kill();
    };
  }, []);
}
