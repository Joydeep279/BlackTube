import SideBar from "./SideBarOpen";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="flex flex-row w-auto p-0 m-0">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default MainContainer;
