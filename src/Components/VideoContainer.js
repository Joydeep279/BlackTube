import { useEffect, useState } from "react";
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
    videoCardLayoutCSS = "w-[400px] h-[22.5rem]text-wrap rounded-xl overflow-hidden hover:rounded";
    videoContainerCSS = "flex flex-wrap gap-2 justify-start flex-row";
  } else {
    mainContainerCSS = "w-full";
    videoCardLayoutCSS =
      "w-[425px] h-[21rem] text-wrap rounded-xl overflow-hidden";
    videoContainerCSS = "flex flex-row flex-wrap gap-2.5 justify-center";
  }
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
