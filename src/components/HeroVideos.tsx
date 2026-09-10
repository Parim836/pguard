import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageContext";
import "./styles/HeroVideos.css";

const videoSources = [
  "/Video%20Project.mp4",
  "/guard.mp4",
  "/guard2.mp4",
  "/guard3.mp4",
  "/guard4.mp4",
  "/guard5.mp4",
];

const clips = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  src: videoSources[index] ?? "",
  poster: "/images/security-guard-working-wide.png",
}));

export default function HeroVideos() {
  const { language } = useLanguage();
  const wallRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const wall = wallRef.current;
    if (!wall) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    const update = () => {
      const playing = inView && !document.hidden && !motion.matches;
      setVisible(playing);
      wall.querySelectorAll("video").forEach((video) => {
        if (playing) void video.play().catch(() => {});
        else video.pause();
      });
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        update();
      },
      { threshold: 0.1 },
    );
    observer.observe(wall);
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <div ref={wallRef} className="hero-videos" data-playing={visible}>
      {[0, 1].map((column) => (
        <div
          className={`hero-video-column hero-video-column-${column + 1}`}
          key={column}
        >
          <div className="hero-video-track">
            {[0, 1].map((copy) => (
              <div
                className="hero-video-group"
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
              >
                {clips
                  .filter((_, index) => index % 2 === column)
                  .map((clip) => (
                    <div className="hero-video-tile" key={clip.id}>
                      {clip.src ? (
                        <video
                          src={clip.src}
                          poster={clip.poster}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          aria-label={
                            language === "TH"
                              ? `การปฏิบัติงาน รปภ. คลิปที่ ${clip.id}`
                              : `Security guard at work, clip ${clip.id}`
                          }
                        />
                      ) : (
                        <>
                          <img
                            src={clip.poster}
                            alt={
                              language === "TH"
                                ? "ภาพตัวอย่าง รปภ. ปฏิบัติงาน"
                                : "Preview of a security guard at work"
                            }
                          />
                          <span className="hero-video-preview-label">
                            {language === "TH" ? "ภาพตัวอย่าง" : "Preview"}
                          </span>
                        </>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
