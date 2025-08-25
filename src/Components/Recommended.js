import { useEffect, useState } from "react";
import VideoCardLayout from "./VideoCardLayout";
import RecommendedCardLayout from "./RecommendedCardLayout";
const Recommended = () => {
  const [recommendedVideo, setRecommendedVideo] = useState(0);
  async function getVideoData() {
    const apiData = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=AIzaSyCfUOj40aTqNvXjQsxAqDcAqBnexvcWnvw"
    );
    const data = await apiData.json();
    setRecommendedVideo(data.items);
  }
  useEffect(() => {
    getVideoData();
  }, []);
  if (recommendedVideo === 0) {
    return;
  }
  return (
    <div className="flex flex-col w-full max-w-[400px] gap-1.5">
      {recommendedVideo.map((items) => (
        <div
          key={items.id}
          className="w-full">
          <RecommendedCardLayout info={items} />
        </div>
      ))}
    </div>
  );
};

export default Recommended;
