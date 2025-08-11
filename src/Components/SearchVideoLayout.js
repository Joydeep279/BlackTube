import { Link } from "react-router-dom";

const SearchVideoLayout = ({ info }) => {
  const { title, channelTitle } = info.snippet;
  return (
    <Link
      to={"../watch?v=" + info.id.videoId}
      className="flex gap-5  rounded-lg w-2/3 hover:bg-slate-50 hover:shadow">
      <img
        src={`https://img.youtube.com/vi/${info.id.videoId}/maxresdefault.jpg`}
        alt="error"
        className="w-72 h-40 rounded-2xl "
      />

      <div className="pl-1">
        <div className="font-sans font-medium text-base p-0 m-0">{title}</div>
        <div className="font-medium text-base text-stone-700 pl-1">
          {channelTitle}
        </div>
      </div>
    </Link>
  );
};

export default SearchVideoLayout;
