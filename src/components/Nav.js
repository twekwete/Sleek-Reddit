import React from "react";
import { FcReddit } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="navbar bg-primary rounded-md">
      <FcReddit size={40} />
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          SleekReddit
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-40"
          />
        </div>
        <FaSearch size={20} />
      </div>
    </div>
  );
}
