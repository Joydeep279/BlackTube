import { Link } from "react-router-dom";
import React from "react";
const RecommendedCardLayout = ({ info }) => {
  const { title, channelTitle } = info.snippet;
  const { viewCount } = info.statistics;

  let newViewCount = Math.round(viewCount / 1000000);
  let viewCountUnit = " M";
  if (!newViewCount) {
    newViewCount = Math.round(viewCount / 1000);
    viewCountUnit = " K";
  }
  return (
    <Link
      to={`watch?v=${info.id}`}
      className="group flex w-full items-start gap-2 py-1.5 hover:bg-gray-100 rounded-lg transition duration-200">
      <div className="relative w-[168px] h-[94px] rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={`https://img.youtube.com/vi/${info.id}/hqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-1 min-w-0 pr-2">
        <h3 className="font-semibold text-sm leading-5 line-clamp-2 break-words text-[#0f0f0f] group-hover:text-[#065fd4]">
          {title}
        </h3>
        <div className="flex flex-col gap-0.5 mt-1">
          <span className="text-[13px] text-[#606060] hover:text-[#0f0f0f] cursor-pointer">
            {channelTitle}
          </span>
          <span className="text-[13px] text-[#606060]">
            {newViewCount + viewCountUnit} views
          </span>
        </div>
      </div>
    </Link>
  );
};
export const AdContainer = ({ info }) => {
  return (
    <React.Fragment>
      <div className="absolute text-white">Ad</div>
      <RecommendedCardLayout info={info} />
    </React.Fragment>
  );
};
export default RecommendedCardLayout;
