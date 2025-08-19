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
    <Link to={`watch?v=${info.id}`} className="group block w-full max-w-[400px]">
      <div className="overflow-hidden rounded-xl hover:rounded transition-all duration-300">
        <img
          src={`https://img.youtube.com/vi/${info.id}/maxresdefault.jpg`}
          alt={title}
          className="w-full aspect-video object-cover"
        />
      </div>

      <div className="flex pt-3 gap-2 px-1">
        <img
          src={`https://avatar.iran.liara.run/public?v=${info.id}`}
          alt="profile-pic"
          className="w-8 h-8 md:w-9 md:h-9 rounded-full flex-shrink-0"
        />
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="font-semibold text-sm md:text-[15px] leading-snug line-clamp-2 break-words">
            {title}
          </h3>
          <p className="text-xs md:text-sm font-medium text-gray-700 mt-1">{channelTitle}</p>
          <p className="text-xs md:text-sm font-medium text-gray-700">
            {newViewCount + viewCountUnit} views
          </p>
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
