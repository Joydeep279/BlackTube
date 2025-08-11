import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeNavBar } from "../utils/navState";
import Comment from "./Comment";
import LiveChatContainer from "./LiveChatContainer";
import VideoDetail from "./VideoDetail";

const Watch = () => {
  const [getVideoId] = useSearchParams("v");
  const videoID = getVideoId.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeNavBar());
  }, []);
  return (
    <div>
      <div className="flex">
        <iframe
          className="mx-14 my-2 rounded-2xl w-[866px] h-[487px]"
          title={`video-${videoID}`}
          src={`https://www.youtube.com/embed/${videoID}?autoplay=1&modestbranding=1&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <LiveChatContainer />
      </div>
      <VideoDetail />
      <Comment />
    </div>
  );
};

export default Watch;
