import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const tailwindConfig_li =
    "text-center hover:bg-gray-100 rounded-xl cursor-pointer mb-1.5";
  const tailwindConfig_ul =
    "w-4/5 font-medium font-sans border-b-2 text-sm";
  const navState = useSelector((store) => store.nav.isNavOpen);

  // Mobile Bottom Navigation
  const MobileNav = () => {
    return (
      <div className="fixed bottom-0 left-0 right-0 flex md:hidden justify-around items-center h-14 bg-white border-t border-gray-200 z-50 px-2">
        <Link to="/" className="flex flex-col items-center">
          <img
            src="https://img.icons8.com/?size=512&id=2797&format=png"
            alt="home"
            className="w-5 h-5"
          />
          <span className="text-[10px] mt-1">Home</span>
        </Link>
        <Link to="/shorts" className="flex flex-col items-center">
          <img
            src="https://img.icons8.com/?size=512&id=h5l3jZXManlM&format=png"
            alt="shorts"
            className="w-5 h-5"
          />
          <span className="text-[10px] mt-1">Shorts</span>
        </Link>
        <div className="flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Plus_symbol.svg"
            alt="create"
            className="w-10 h-10"
          />
        </div>
        <Link to="/subscriptions" className="flex flex-col items-center">
          <img
            src="https://img.icons8.com/?size=512w&id=reqYJP3X0f7Y&format=png"
            alt="subscriptions"
            className="w-5 h-5"
          />
          <span className="text-[10px] mt-1">Subscriptions</span>
        </Link>
        <Link to="/library" className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2961/2961948.png"
            alt="library"
            className="w-5 h-5"
          />
          <span className="text-[10px] mt-1">Library</span>
        </Link>
      </div>
    );
  };

  // Desktop Sidebar
  const DesktopSidebar = () => {
    if (!navState) return null;
    return (
      <div className="hidden md:flex flex-col min-w-[240px] w-[240px] items-start sticky top-[56px] h-[calc(100vh-56px)] overflow-y-auto pb-16 z-40 bg-white shadow-lg md:shadow-none md:ml-2 no-scrollbar hover:show-scrollbar">
      <ul className={tailwindConfig_ul + " text-xs md:text-sm"}>
        <li className={tailwindConfig_li + " bg-gray-100"}>
          <div className="flex gap-5 items-center py-2 px-1">
            <img
              src="https://img.icons8.com/?size=512&id=2797&format=png"
              alt="home-icon"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <span> Home</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-3 md:gap-5 items-center py-2 px-1">
            <img
              src="https://img.icons8.com/?size=512&id=h5l3jZXManlM&format=png"
              alt="shorts-icon"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <span> Shorts</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-3 md:gap-5 items-center py-2 px-1">
            <img
              src="https://img.icons8.com/?size=512w&id=reqYJP3X0f7Y&format=png"
              alt="subscriptions-icon"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <span> Subscriptions</span>
          </div>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-2.5">
        <h1 className="py-2.5 font-semibold text-lg">You </h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2985/2985179.png"
          alt=">"
          className="w-5 h-4"
        />
      </div>
      <ul className={tailwindConfig_ul}>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2961/2961948.png"
              alt="home-icon"
              className="w-6 h-6"
            />
            <span> History</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://img.icons8.com/?size=512w&id=kTsMbdVZCoxl&format=png"
              alt="shorts-icon"
              className="w-6 h-6"
            />
            <span>Playlist</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4848/4848819.png"
              alt="subscriptions-icon"
              className="w-6 h-6"
            />
            <span> Your Video</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/10068/10068341.png"
              alt="subscriptions-icon"
              className="w-6 h-6"
            />
            <span> Watch Later</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://img.icons8.com/?size=512w&id=24816&format=png"
              alt="subscriptions-icon"
              className="w-6 h-6"
            />
            <span> Liked Video</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://img.icons8.com/?size=512w&id=vk3CfSUT5UA6&format=png"
              alt="subscriptions-icon"
              className="w-7 h-6"
            />
            <span> Download</span>
          </div>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-2.5">
        <h1 className="py-2.5 font-semibold text-lg">Explore </h1>
      </div>
      <ul className={tailwindConfig_ul}>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
              alt="home-icon"
              className="w-6 h-6"
            />
            <span> Shopping</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/461/461238.png"
              alt="shorts-icon"
              className="w-6 h-6"
            />
            <span>Music</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1179/1179120.png"
              alt="subscriptions-icon"
              className="w-6 h-6"
            />
            <span>Movies</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2989/2989838.png"
              alt="subscriptions-icon"
              className="w-6 h-6"
            />
            <span> Live</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4892/4892307.png"
              alt="subscriptions-icon"
              className="w-6 h-6"
            />
            <span>Gaming</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/81/81460.png"
              alt="subscriptions-icon"
              className="w-6 h-6"
            />
            <span>News</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/819/819590.png"
              alt="subscriptions-icon"
              className="w-6 h-6"
            />
            <span>Sports</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9720/9720860.png"
              className="w-6 h-6"
              alt="Courses"
            />
            <span>Courses</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4998/4998568.png"
              alt="subscriptions-icon"
              className="w-6 h-6"
            />
            <span>Fashion&beauty</span>
          </div>
        </li>
        <li className={tailwindConfig_li}>
          <div className="flex gap-5 items-center py-2 px-1 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/658/658148.png"
              alt="subscriptions-icon"
              className="w-6 h-6"
            />
            <span>Podcasts</span>
          </div>
        </li>
      </ul>
    </div>
    );
  };

  return (
    <>
      <MobileNav />
      <DesktopSidebar />
    </>
  );
};

export default SideBar;
