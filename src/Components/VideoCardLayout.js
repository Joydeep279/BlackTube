import { Link } from "react-router-dom";
import React from "react";
const VideoCardLayout = ({ info }) => {
  const { title, channelTitle } = info.snippet;
  const { viewCount } = info.statistics;

  return (
    <Link to={"watch?v=" + info.id}>
      <img
        src={`https://img.youtube.com/vi/${info.id}/maxresdefault.jpg`}
        alt="error"
        className="w-full h-52 rounded-2xl"
      />

      <div className="pl-1">
        <h1 className="font-sans font-medium">{title}</h1>
        <h2 className="from-neutral-400">{channelTitle}</h2>
        <h2 className="from-neutral-400">{viewCount} views</h2>
      </div>
    </Link>
  );
};
export const AdContainer = ({ info }) => {
  return (
    <React.Fragment>
      <span className="absolute text-white">Ad</span>
      <VideoCardLayout info={info} />
    </React.Fragment>
  );
};
export default VideoCardLayout;
