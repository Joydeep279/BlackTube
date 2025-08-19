import Header from "./Header";
import SideBar from "./SideBarOpen";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row w-full">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainContainer;
