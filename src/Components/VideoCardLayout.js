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
    <Link to={`watch?v=${info.id}`} className="group block w-full max-w-[480px] touch-manipulation">
      <div className="overflow-hidden rounded-lg md:rounded-xl hover:rounded transition-all duration-300">
        <img
          src={`https://img.youtube.com/vi/${info.id}/maxresdefault.jpg`}
          alt={title}
          className="w-full aspect-video object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex pt-3 md:pt-4 gap-3 px-1">
        <img
          src={`https://avatar.iran.liara.run/public?v=${info.id}`}
          alt="profile-pic"
          className="w-6 h-6 md:w-8 md:h-8 rounded-full flex-shrink-0"
        />
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="font-semibold text-[15px] md:text-[16px] leading-snug line-clamp-2 break-words">
            {title}
          </h3>
          <p className="text-[15px] md:text-base font-medium text-gray-700 mt-1.5">{channelTitle}</p>
          <p className="text-[15px] md:text-base font-medium text-gray-700">
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
