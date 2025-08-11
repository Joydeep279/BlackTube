import { useEffect, useState } from "react";
import { apikey } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import CommentLayout from "./CommentLayout";

const Comment = () => {
  const [getVideoId] = useSearchParams("v");
  const videoID = getVideoId.get("v");
  console.log(videoID);

  let [commentData, setCommentData] = useState([]);
  async function getCommentData() {
    const apiData = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?key=${apikey}&textFormat=plainText&part=snippet&maxResults=100&videoId=` +
        videoID
    );
    const data = await apiData.json();
    commentData = data.items;
    setCommentData(commentData);
  }
  useEffect(() => {
    getCommentData();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-start">
        <h1 className="py-5 text-xl font-bold px-10 font-sans">
          100 Comments
        </h1>
        <img src="https://cdn-icons-png.flaticon.com/512/10337/10337146.png"alt="sort"className="w-5 h-5"/>
        <span className="pl-5 text-base font-medium font-sans">Sort By</span>
      </div>
      <div className="pl-10 flex gap-5 mt-2.5 mb-10 items-start">
        <img
          className="rounded-full w-8 h-8"
          src="https://avatars.githubusercontent.com/u/109482893?v=4"
          alt="User"
        />
        <input className="border-b w-1/2" type="text" placeholder="Add a Comment"></input>
      </div>
      <div className="flex flex-col gap-5 ml-16">
        {commentData.map((items) => (
          <CommentLayout info={items} key={items.id} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
