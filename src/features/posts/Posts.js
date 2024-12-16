import React from "react";
import { LuArrowBigUp } from "react-icons/lu";
import { LuArrowBigDown } from "react-icons/lu";
import { FaRegCommentAlt } from "react-icons/fa";

export default function Posts() {
  const posts = [
    {
      id: 1,
      title: "post 1",
      imageUrl:
        "https://images.unsplash.com/photo-1727640852188-f70844bc7370?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      upVotes: 64,
      time: "15 hours ago",
      comments: [{ id: 1, userName: "testname", comment: "sample text" }],
    },
    {
      id: 2,
      title: "post 2",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1734293455122-c3a9a05b51e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      upVotes: 48,
      time: "10 hours ago",
      comments: [{ id: 2, userName: "johndoe", comment: "This is awesome!" }],
    },
    {
      id: 3,
      title: "post 3",
      imageUrl:
        "https://images.unsplash.com/photo-1725665996724-5e69ed2bf1cc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      upVotes: 75,
      time: "3 hours ago",
      comments: [
        { id: 3, userName: "janedoe", comment: "Loved this picture!" },
        { id: 4, userName: "smith", comment: "Great post!" },
      ],
    },
    {
      id: 4,
      title: "post 4",
      imageUrl:
        "https://images.unsplash.com/photo-1719937206491-ed673f64be1f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      upVotes: 32,
      time: "8 hours ago",
      comments: [],
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post, index) => {
        return (
          <div className="bg-white p-3 rounded flex flex-row gap-2">
            <div className=" text-center">
              <LuArrowBigUp className="cursor-pointer" size={30} />
              <div>{post.upVotes}</div>
              <LuArrowBigDown className="cursor-pointer " size={30} />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">{post.title}</h1>
              <img src={post.imageUrl} alt="postImage" />
              <hr className="bg-base-100"></hr>
              <div className="flex flex-row gap-2 items-center">
                <div>{post.time}</div>
                <FaRegCommentAlt size={20}/>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
