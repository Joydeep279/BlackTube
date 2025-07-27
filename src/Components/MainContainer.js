import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default MainContainer;
