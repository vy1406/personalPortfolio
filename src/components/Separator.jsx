import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Separator({ text }) {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const ctxRef = useRef(null);

    useLayoutEffect(() => {
        if (lineRef.current) {
          ctxRef.current = gsap.context(() => {
            gsap.fromTo(
              lineRef.current,
              { opacity: 0, width: "0%" },
              {
                opacity: 1,
                width: "100%",
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 65%",
                  toggleActions: "play none none none",
                },
              }
            );
          }, sectionRef.current);
        }
    
        return () => ctxRef.current?.revert();
      }, []);
      
    return (
        <div className="py-8" ref={sectionRef}>
            <div className="flex items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mr-4">
                    {text}
                </h3>
                <div
                    ref={lineRef}
                    className="h-[2px] bg-gray-400 dark:bg-gray-600 flex-grow"
                />
            </div>
        </div>
    );
}
