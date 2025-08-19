import { useSelector } from "react-redux";

const SideBar = () => {
  const tailwindConfig_li =
    "text-center hover:bg-gray-100 rounded-xl cursor-pointer mb-1.5";
  const tailwindConfig_ul =
    "w-4/5 font-medium font-sans  border-b-2 text-sm";
  const navState = useSelector((store) => store.nav.isNavOpen);
  if (!navState) return null;
  return (
    <div className="hidden md:flex flex-col w-full md:w-2/12 items-start sticky top-16 left-0 h-screen overflow-y-scroll pb-16 md:ml-5 no-scrollbar hover::show-scrollbar backdrop-blur-md bg-white/90">
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
export default SideBar;
