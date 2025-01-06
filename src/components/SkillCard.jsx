import React from "react";


export default function SkillsCard({ list, title }) {
  return (
    <div className="max-w-md p-6  border  rounded-lg shadow bg-gray-800 border-gray-700 w-full md:w-auto select-none skills-card">
        <h3 className="text-xl font-bold text-center text-white mb-8">
        {title}
      </h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {list.map((skill, index) => (
          <div
          key={index}
          className="flex items-center justify-center gap-2  border rounded-md shadow-sm p-2 hover:shadow-md bg-gray-800 border-gray-700 hover:bg-gray-700"
        >
          <div className="w-6 h-6 flex-shrink-0">
            <img
              src={skill.src}
              alt={skill.name}
              width={24}
              height={24}
              className="rounded-full h-full"
            />
          </div>
          <h2 className="text-sm font-medium text-gray-200">
            {skill.name}
          </h2>
        </div>
        ))}
      </div>
    </div>
  );
}
