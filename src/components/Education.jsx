import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import Separator from "./Separator";
import { DATA } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {

    const sectionRef = useRef(null);
    const ctxRef = useRef(null);

    useLayoutEffect(() => {
        const cards = sectionRef.current?.querySelectorAll(".education-card");

        if (cards) {
            ctxRef.current = gsap.context(() => {

                gsap.from(cards, {
                    x: 200,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            }, sectionRef.current);

        }
        return () => ctxRef.current?.revert();
    }, []);

    return (
        <section id="education">
            <Separator text={"Education"} />
            <div ref={sectionRef} className="w-full flex flex-col items-center gap-8">
                {DATA.education.map((edu, index) => (
                    <div
                        key={index}
                        className="education-card flex flex-col items-center md:flex-row md:items-start  rounded-lg shadow-md bg-gray-800 border-gray-700 max-w-md md:max-w-3xl"
                    >
                        <div className="w-full p-6">
                            <h3 className="text-xl font-bold text-white text-center md:text-left">
                                {edu.degree}
                            </h3>
                            <p className="text-sm text-gray-400 mb-2 text-center md:text-left">
                                {edu.school}
                            </p>
                            <p className="text-sm text-gray-400 text-center md:text-left">
                                {edu.startDate} - {edu.endDate}
                            </p>
                            <p className="mt-4 text-gray-300 text-center md:text-left">
                                {edu.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
    
}
