import React, { useRef } from "react";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import Typewriter from "typewriter-effect";
import heroBackground from "../assets/heroBackground.svg";
import profilePic from "../assets/profile.png";
import awsCertificate from "../assets/aws.png";
import { DATA } from "../data";

export default function Hero() {
  const profilePicRef = useRef(null);
  const certificateRef = useRef(null);
  const ctxRef = useRef(null);

  useLayoutEffect(() => {
    if (certificateRef.current) {
      ctxRef.current = gsap.context(() => {
        gsap.fromTo(
          certificateRef.current,
          { x: "-100%", opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.5,
          }
        );
      }, profilePicRef.current);
    }

    return () => ctxRef.current?.revert();
  }, []);

  return (
    <div className="relative h-auto w-full text-[#854CE6] flex flex-col md:flex-row-reverse items-center md:items-start justify-center gap-10">
      <div className="absolute inset-0">
        <img src={heroBackground} className="w-full h-full object-cover" alt="Background" />
      </div>

      <div
        ref={certificateRef}
        className="absolute z-0 top-4 left-4 md:static md:block md:w-36 w-20"
      >
        <img
          src={awsCertificate}
          className="w-full h-full object-contain"
          alt="AWS Certificate"
        />
      </div>

      <div
        ref={profilePicRef}
        className="relative z-10 flex items-center justify-center mb-6 md:mb-0"
      >
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#854CE6] shadow-lg">
          <img
            src={profilePic}
            className="w-full h-full object-cover"
            alt="Profile"
          />
        </div>
      </div>

      <div className="relative z-10 text-center md:text-left max-w-md md:max-w-lg px-4 md:px-0">
        <h1 className="text-3xl font-bold text-white mb-4">{DATA.welcomeMsg}</h1>
        <div className="text-lg text-purple-500 mb-4 font-semibold">
          <Typewriter
            options={{
              strings: DATA.roles,
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 10,
            }}
          />
        </div>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{DATA.aboutMe}</p>
      </div>
    </div>
  );
}
