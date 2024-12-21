import React, { useState } from "react";
import { LuArrowBigUp } from "react-icons/lu";
import { LuArrowBigDown } from "react-icons/lu";

export default function Vote(props) {
  const [upVotes, setUpVotes] = useState(props.upVotes);
  const [vote, setVote] = useState({
    downVote: false,
    upVote: false,
    disableUpVotes: false,
  });

  const handleVote = (type) => {
    switch (type) {
      case "upVote":
        setVote({ downVote: false, upVote: true, disableUpVotes: true });
        if (!vote.disableUpVotes) setUpVotes((prev) => (prev += 1));
        break;
      case "downVote":
        setVote({ downVote: true, upVote: false });
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <LuArrowBigUp
        className={`cursor-pointer ${vote.upVote ? "text-green-500" : ""}`}
        size={30}
        onClick={() => handleVote("upVote")}
      />
      <div
        className={`${vote.upVote ? "text-green-500" : ""} ${
          vote.downVote ? " text-red-500" : ""
        }`}
      >
        {upVotes}
      </div>
      <LuArrowBigDown
        className={`cursor-pointer ${vote.downVote ? "text-red-500" : ""}`}
        size={30}
        onClick={() => handleVote("downVote")}
      />
    </div>
  );
}
