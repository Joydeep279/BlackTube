import { useEffect, useState } from "react";
import { videoApiKey } from "../utils/constants";
import VideoCardLayout, { AdContainer } from "./VideoCardLayout";

const VideoContainer = () => {
  const [videolist, setVideoList] = useState(0);
  async function getVideoData() {
    const apiData = await fetch(videoApiKey);
    const data = await apiData.json();
    setVideoList(data.items);
  }
  useEffect(() => {
    getVideoData();
    
  }, []);
  if (videolist === 0) {
    return <div>Loading</div>;
  }
  return (
    <div className="flex flex-wrap gap-2 justify-start pl-5">
      <div className="w-[400px] h-80 text-wrap rounded-xl overflow-hidden">
        <AdContainer info={videolist[0]} />
      </div>
      {videolist.map((items) => (
        <div
          key={items.id}
          className="w-[400px] h-80 text-wrap rounded-xl overflow-hidden">
          <VideoCardLayout info={items} />
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
