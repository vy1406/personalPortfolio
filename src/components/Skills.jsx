import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import SkillsCard from "./SkillCard";
import { DATA } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const ctxRef = useRef(null);

  useLayoutEffect(() => {
    const cards = gsap.utils.toArray(".skills-card");

    if (cards) {
      ctxRef.current = gsap.context(() => {
        gsap.from(cards, {
          translateX: 200,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        });
      }, sectionRef.current);
    }

    return () => ctxRef.current?.revert();
  }, []);

  return (
    <section className="py-8" ref={sectionRef} id="skills">
      <SkillsCard list={DATA.skills.frontEnd.list} title={DATA.skills.frontEnd.title} />
      <SkillsCard list={DATA.skills.frontEnd.list} title={DATA.skills.frontEnd.title} />
    </section>
  );
}
