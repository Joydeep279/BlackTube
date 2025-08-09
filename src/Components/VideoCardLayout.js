import { Link } from "react-router-dom";
import React from "react";
const VideoCardLayout = ({ info }) => {
  const { title, channelTitle } = info.snippet;
  const { viewCount } = info.statistics;
  let newViewCount = Math.round(viewCount / 1000000);
  let viewCountUnit = " M";
  if (!newViewCount) {
    newViewCount = Math.round(viewCount / 1000);
    viewCountUnit = " K";
  }
  return (
    <Link to={"watch?v=" + info.id}>
      <img
        src={`https://img.youtube.com/vi/${info.id}/maxresdefault.jpg`}
        alt="error"
        className="w-full h-52 rounded-2xl"
      />

      <div className="pl-1">
        <div className="font-sans font-medium text-base p-0 m-0">{title}</div>
        <div className="font-medium text-base text-gray-600 pl-1">{channelTitle}</div>
        <div className="font-normal text-base text-gray-600 pl-1">
          {newViewCount + viewCountUnit} views
        </div>
      </div>
    </Link>
  );
};
export const AdContainer = ({ info }) => {
  return (
    <React.Fragment>
      <div className="absolute text-white">Ad</div>
      <VideoCardLayout info={info} />
    </React.Fragment>
  );
};
export default VideoCardLayout;
