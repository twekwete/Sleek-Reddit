import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { subredditList } from "./subredditList";
import { fetchSubReddit } from "./subredditsSlice";

export default function Subreddits() {
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState(subredditList[0]);

  useEffect(() => {
    dispatch(fetchSubReddit(activeSection.url));
  }, [activeSection, dispatch]);

  return (
    <div className="m-2 bg-white p-2 rounded-md">
      <h1 className=" font-bold text-2xl mb-2">Subreddits</h1>
      <div className=" flex flex-col gap-2 max-h-56  overflow-y-auto sm:max-h-screen">
        {subredditList.map((item, index) => {
          return (
            <div
              key={index}
              className={
                activeSection.id === item.id
                  ? "bg-base-100 p-3 rounded-md"
                  : " cursor-pointer p-3 hover:bg-slate-200 rounded"
              }
              onClick={() => setActiveSection(item)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
