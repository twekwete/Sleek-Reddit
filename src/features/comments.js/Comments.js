import React, { useState } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import { notification } from "antd";

export default function Comments(props) {
  const { author, createdDate, commentsCount, postUrl } = props;
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState();
  const [openComments, setOpenComments] = useState(false);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://www.reddit.com${postUrl}.json`);
      const json = await response.json();
      const commentsListData = [];
      json[1].data.children.forEach((item) => {
        const formatted = {
          id: item.data.id,
          body: item.data.body,
          author: item.data.author,
          created_utc: formatDistanceToNow(
            new Date(item.data.created_utc * 1000)
          ),
        };
        commentsListData.push(formatted);
      });

      setComments(commentsListData);
      setLoading(false);
    } catch (err) {
      notification.error({
        message: "Error Fetching Comments",
        description: `An error occurred while fetching comments: ${
          err.message || "Please try again later."
        }`,
        placement: "topRight",
      });
      setLoading(false);
    }
  };

  const handleToggleComments = () => {
    if (openComments) {
      setOpenComments(false);
      return;
    }

    fetchComments();

    setOpenComments(true);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <div>{author}</div>
        <div>{createdDate} ago</div>
        <div className="flex flex-col items-center">
          {" "}
          <FaRegCommentAlt
            onClick={handleToggleComments}
            className="cursor-pointer"
            size={20}
          />{" "}
          {commentsCount}
        </div>
      </div>

      <div className="w-full flex justify-center">
        {loading && (
          <span className="loading loading-spinner loading-lg"></span>
        )}

        {openComments && comments && comments.length > 1 && !loading && (
          <div className="flex flex-col gap-5 max-h-80 overflow-y-auto">
            {comments.map((comment) => {
              return (
                <div className="p-3 bg-slate-200 rounded hover:shadow-md">
                  <div className="flex flex-row w-full justify-between">
                    {" "}
                    <div className="text-blue-500 font-bold">
                      {comment.author}
                    </div>
                    <div> {comment.created_utc} ago</div>
                  </div>

                  {comment.body}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
