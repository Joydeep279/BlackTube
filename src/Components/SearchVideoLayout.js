import { Link } from "react-router-dom";

const SearchVideoLayout = ({ info }) => {
  const { title, channelTitle } = info.snippet;
  return (
    <Link
      to={"../watch?v=" + info.id.videoId}
      className="flex flex-col sm:flex-row gap-2 sm:gap-5 rounded-lg w-full sm:w-[90%] lg:w-2/3 hover:bg-slate-50 hover:shadow p-2">
      <img
        src={`https://img.youtube.com/vi/${info.id.videoId}/maxresdefault.jpg`}
        alt="error"
        className="w-full sm:w-56 md:w-64 lg:w-72 aspect-video sm:h-32 md:h-36 lg:h-40 rounded-xl sm:rounded-2xl object-cover"
      />

      <div className="pl-0 sm:pl-1">
        <div className="font-sans font-medium text-sm sm:text-base p-0 m-0 line-clamp-2">{title}</div>
        <div className="font-medium text-xs sm:text-sm text-stone-700 mt-1 sm:pl-1">
          {channelTitle}
        </div>
      </div>
    </Link>
  );
};

export default SearchVideoLayout;
