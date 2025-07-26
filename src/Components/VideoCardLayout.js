import React from "react";

const VideoCardLayout = ({ info }) => {
  const { title, thumbnails, channelTitle } = info.snippet;
  const { viewCount } = info.statistics;

  return (
    <React.Fragment>
      <img
        src={thumbnails.medium.url}
        alt="error"
        className="w-full h-52 rounded-xl"
      />
      <div className="pl-1">
        <h1 className="font-sans font-semibold">{title}</h1>
        <h2 className="from-neutral-400">{channelTitle}</h2>
        <h2 className="from-neutral-400">{viewCount} views</h2>
      </div>
    </React.Fragment>
  );
};

export default VideoCardLayout;
