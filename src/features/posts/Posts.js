import React, { useEffect, useState } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectSubreddit,
} from "../subReddits/subredditsSlice";
import Loader from "../../components/loader";
import Vote from "./Vote";
import Comments from "../comments.js/Comments";

export default function Posts() {
  const loadingSubreddit = useSelector(selectLoading);
  const subredditPosts = useSelector(selectSubreddit);

  if (loadingSubreddit) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-4">
      {subredditPosts.map((post, index) => {
        return (
          <div
            key={index}
            className="bg-white p-3 rounded flex flex-row gap-2 min-h-32"
          >
            <div className=" text-center">
              <Vote upVotes={post.upVotes} />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-2xl font-bold">{post.title}</h1>
              {post.thumbnail && (
                <img
                  className="rounded"
                  src={post.thumbnail}
                  alt="Thumbnail"
                  style={{ objectFit: "contain" }}
                />
              )}
              <hr className="bg-base-100"></hr>
              <Comments
                author={post.author}
                createdDate={post.createdDate}
                commentsCount={post.commentsCount}
                postUrl={post.url}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
