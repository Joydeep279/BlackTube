import { useEffect, useState } from "react";
import { videoApiKey } from "../utils/constants";
import VideoCardLayout from "./VideoCardLayout";

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
    <div className="flex flex-wrap gap-2 justify-start pl-10">
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
