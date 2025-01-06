import React from "react";
import Separator from "./Separator";
import { DATA } from "../data";

export default function Timelines() {

  return (
    <section id="experience">
      <Separator text={"Experience"} />
      <ol className="relative border-s border-gray-700 m-10" >
        {DATA.experience.map((exp, index) => (
          <li className="mb-10 ms-6" key={index}>
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                className="w-2.5 h-2.5  text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              {exp.title}
              {exp.isCurrent &&
                <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ms-3">
                  Current
                </span>}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-400">
              {`( ${exp.company} )`}
            </p>
            <time className="block mb-2 text-sm font-normal leading-none  text-gray-500">
              {exp.startDate} - {exp.endDate || "Present"} ({exp.length})
            </time>
            <p className="mb-4 text-base font-normal text-gray-400">
              {exp.description}
            </p>

          </li>
        ))}

      </ol>
    </section>
  );
}
