import React from "react";
import Typewriter from "typewriter-effect";
import heroBackground from '../assets/heroBackground.svg'
import react2 from '../assets/react2.svg'
import { DATA } from "../data";

export default function Hero() {
  return (
    <div className="relative h-[300px] w-full text-[#854CE6] flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={heroBackground} className="w-full h-full object-cover" alt="React logo" />
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#854CE6] shadow-lg">
          <img src={react2} className="logo react" alt="React logo" />
        </div>
      </div>

      <div className="absolute bottom-4 w-full text-center z-20">
        <Typewriter
          options={{
            strings: DATA.roles,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}
