import React from "react";
import Posts from "../features/posts/Posts";
import SubReddits from "../features/subReddits/Subreddits";

export default function ContentLayout() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="sm:col-span-2 rounded-sm">
        <Posts />
      </div>
      <div className="rounded-sm  order-first sm:order-last">
        <SubReddits />
      </div>
    </div>
  );
}
