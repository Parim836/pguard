import { useEffect, useRef } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";

type WorkflowStep = { icon: LucideIcon; title: string; description: string };
type WorkflowSectionProps = {
  title: string;
  description: string;
  steps: WorkflowStep[];
};

export default function WorkflowSection({
  title,
  description,
  steps,
}: WorkflowSectionProps) {
  const workflowSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const workflowSection = workflowSectionRef.current;

    if (!workflowSection) return;

    const cards =
      workflowSection.querySelectorAll<HTMLElement>(".business-step");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={workflowSectionRef} className="business-how-it-works">
      <div className="business-section-heading">
        <span className="eyebrow">HOW IT WORKS</span>

        <h2>{title}</h2>

        <p>{description}</p>
      </div>

      <div className="business-steps">
        {steps.map((step, index) => {
          const StepIcon = step.icon;

          return (
            <div className="business-step" key={index}>
              <div className="business-step-icon">
                <StepIcon size={25} strokeWidth={2} />
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              {index !== steps.length - 1 && (
                <div className="business-step-arrow">
                  <ArrowRight size={22} strokeWidth={1.8} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
