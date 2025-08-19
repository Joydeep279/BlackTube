import { useEffect, useState } from "react";
import VideoCardLayout from "./VideoCardLayout";
import ChipBar from "./ChipBar";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const isNavOpen = useSelector((store) => store.nav.isNavOpen);
  const mainContainerCSS = isNavOpen 
    ? "w-full md:w-[82%] px-2 sm:px-4 mt-2 md:mt-0 pb-16 md:pb-0" 
    : "w-full px-2 sm:px-4 mt-2 md:mt-0 pb-16 md:pb-0";
  const videoCardLayoutCSS = "w-full h-auto text-wrap rounded-xl overflow-hidden hover:rounded transition-all duration-300";
  const videoContainerCSS = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 md:gap-y-6 gap-x-3 md:gap-x-4 place-items-center";
  const [videolist, setVideoList] = useState(0);
  async function getVideoData() {
    const apiData = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyCfUOj40aTqNvXjQsxAqDcAqBnexvcWnvw");
    const data = await apiData.json();
    setVideoList(data.items);
  }
  useEffect(() => {
    getVideoData();
  }, []);
  if (videolist === 0) {
    return;
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
