import React, { useState } from "react";

export default function Subreddits() {
  const sections = [
    { id: 0, name: "Home" },
    { id: 1, name: "AskReddit" },
  ];
  const [activeSection, setActiveSection] = useState(sections[0].id);

  return (
    <div className="m-2 bg-white p-2 rounded-md">
      <h1 className=" font-bold text-2xl mb-2">Subreddits</h1>
      <div className=" flex flex-col gap-2">
        {sections.map((item, index) => {
          return (
            <div
              key={index}
              className={
                activeSection === index ? "bg-base-100 p-3 rounded-md" : " cursor-pointer p-3"
              }
              onClick={() => setActiveSection(item.id)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
