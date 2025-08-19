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
    <div className="max-w-full overflow-x-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 min-w-0 px-2 sm:px-4 lg:pl-4 lg:pr-6">
          <div className="aspect-video w-full rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden my-2">
            <iframe
              className="w-full h-full"
              title={`video-${videoID}`}
              src={`https://www.youtube.com/embed/${videoID}?autoplay=1&modestbranding=1&rel=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <VideoDetail />
          <Comment />
        </div>
        <div className="w-full lg:min-w-[350px] lg:w-[350px] xl:w-[400px]">
          <LiveChatContainer />
        </div>
      </div>
    </div>
  );
};

export default Watch;
