import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { apikey } from "../utils/constants";
import { useEffect } from "react";

const VideoDetail = () => {
  const [isDescOpen, setDescOpen] = useState(false);
  let descTailwindConfig;
  let descText;
  if (isDescOpen) {
    descTailwindConfig = "w-11/12 text-wrap  p-2.5 rounded-xl font-medium ";
    descText = "Show Less";
  } else {
    descTailwindConfig =
      "w-11/12 text-wrap p-2.5 rounded-xl h-32 overflow-hidden font-medium";
    descText = "More...";
  }
  const [getVideoId] = useSearchParams("v");
  const [videoInfo, setVideoInfo] = useState([]);
  const videoID = getVideoId.get("v");
  async function getVideoDetails() {
    const apiData = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${videoID}&key=${apikey}`
    );
    const detail = await apiData.json();
    setVideoInfo(detail.items[0].snippet);
    console.log(detail.items[0].snippet);
  }
  useEffect(() => {
    getVideoDetails();
  }, []);
  if (videoInfo.length == 0) return;
  return (
    <div className="w-2/3 flex items-start flex-col pl-16 gap-5">
      <div className="w-full flex items-start flex-col gap-5">
        <h1 className="font-bold text-xl w-[866px]">{videoInfo.title}</h1>
        <div className="flex justify-between w-11/12 px-3.5">
          <div className="flex items-center justify-center gap-5">
            <div className="flex flex-row gap-1">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="logo"
                className="h-9 w-9 rounded-full"
              />
              <h1 className="font-semibold text-lg">
                {videoInfo.channelTitle}
              </h1>
            </div>
            <button className="px-3 py-1.5 rounded-2xl bg-gray-900 text-white font-sans font-medium border hover:bg-gray-800">
              Subscribe
            </button>
          </div >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 border rounded-2xl py-0.5">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/159/159766.png"
                  alt="Like"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">1.2K</span>
              </button>

              <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/159/159775.png"
                  alt="Dislike"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">23</span>
              </button>
            </div>
            <div className="flex items-center gap-4 border rounded-2xl">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12v7a1 1 0 0 0 1 1h14M16 6l-4-4-4 4M12 2v14"
                  />
                </svg>
                <span className="text-base font-medium">Share</span>
              </button>

              <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v12m0 0l4-4m-4 4l-4-4m13 9H3"
                  />
                </svg>
                <span className="text-base font-medium">Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl p-2.5">
        <p className={descTailwindConfig}>
          {videoInfo.description.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <span
          className=" font-medium  px-2 cursor-pointer"
          onClick={(e) => setDescOpen(!isDescOpen)}>
          <br />
          {descText}
          <br />
        </span>
      </div>
    </div>
  );
};

export default VideoDetail;
