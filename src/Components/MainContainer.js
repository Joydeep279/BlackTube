import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";
const MainContainer = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <VideoContainer/>
    </div>
  );
};

export default MainContainer;
