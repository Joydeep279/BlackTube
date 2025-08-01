import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeNavBar } from "../utils/navState";

const Watch = () => {
  const [getVideoId] = useSearchParams("v");
  const videoID = getVideoId.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect Called");
    
    dispatch(closeNavBar());
  }, []);
  return (
    <iframe
      className="mx-14 my-2 rounded-xl w-[866px] h-[487px]"
      title={"videoID" + videoID}
      src={`https://www.youtube.com/embed/${videoID}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen></iframe>
  );
};

export default Watch;
