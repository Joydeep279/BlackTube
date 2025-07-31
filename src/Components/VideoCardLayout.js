import { Link } from "react-router-dom";

const VideoCardLayout = ({ info }) => {
  const { title, thumbnails, channelTitle } = info.snippet;
  const { viewCount } = info.statistics;
  console.log(thumbnails);

  return (
    <Link to={"watch?v=" + info.id}>
      <img
        src={thumbnails.maxres.url}
        alt="error"
        className="w-full h-52 rounded-xl"
      />
      <div className="pl-1">
        <h1 className="font-sans font-medium">{title}</h1>
        <h2 className="from-neutral-400">{channelTitle}</h2>
        <h2 className="from-neutral-400">{viewCount} views</h2>
      </div>
    </Link>
  );
};

export default VideoCardLayout;
