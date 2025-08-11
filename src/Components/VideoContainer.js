import { useEffect, useState } from "react";
import { videoApi } from "../utils/constants";
import VideoCardLayout from "./VideoCardLayout";
import ChipBar from "./ChipBar";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  let mainContainerCSS;
  let videoCardLayoutCSS;
  let videoContainerCSS;
  const isNavOpen = useSelector((store) => store.nav.isNavOpen);
  if (isNavOpen) {
    mainContainerCSS = "w-[82%] ";
    videoCardLayoutCSS = "w-[400px] h-[22.5rem]text-wrap rounded-xl overflow-hidden";
    videoContainerCSS = "flex flex-wrap gap-2 justify-start";
  } else {
    mainContainerCSS = "w-full";
    videoCardLayoutCSS =
      "w-[425px] h-[21rem] text-wrap rounded-xl overflow-hidden";
    videoContainerCSS = "flex flex-wrap gap-2.5 justify-center";
  }
  const [videolist, setVideoList] = useState(0);
  async function getVideoData() {
    const apiData = await fetch(videoApi);
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
    <div className={mainContainerCSS}>
      <ChipBar />
      <div className={videoContainerCSS}>
        {videolist.map((items) => (
          <div key={items.id} className={videoCardLayoutCSS}>
            <VideoCardLayout info={items} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
