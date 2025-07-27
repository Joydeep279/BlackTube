import { useDispatch } from "react-redux";
import { toggleNavState } from "../utils/navState";

const Header = () => {
  const dispatch = useDispatch();
  const toggleNavStateFn = () => {
    dispatch(toggleNavState());
  };
  return (
    <div className="flex flex-row justify-between px-5 items-start">
      <div className="flex flex-row items-center gap-2 ">
        <img
          onClick={toggleNavStateFn}
          className="w-8 h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="sideBTN"
        />
        <img
          className="w-28"
          src="https://1000logos.net/wp-content/uploads/2017/05/Black-YouTube-logo.png"
          alt="YouTube"
        />
      </div>
      <div className="flex flex-row items-center rounded-xl  border-1 border-solid pt-1">
        <input
          placeholder="Search"
          type="text"
          className=" w-[525px] h-10 rounded-l-2xl border-r-2 px-5 py-1 border-[0.5px] border-gray-300 focus:outline-blue-300"
        />
        <button className="rounded-r-2xl border-none bg-gray-100 px-5 py-1">
          <img
            className="w-6 h-8"
            alt="Search"
            src="https://static.thenounproject.com/png/search-icon-icon-629578-512.png"
          />
        </button>
        <button className="rounded-full bg-gray-100 ml-5 p-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/566/566100.png"
            alt="useMic"
            className="w-5 h-5"
          />
        </button>
      </div>
      <div className="flex flex-row items-center gap-8 pr-5 pt-2">
        <button className="flex justify-start items-center rounded-3xl pr-2 py-0 h-10 bg-gray-100">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Plus_symbol.svg"
            className="w-12 h-12"
            alt="+"
          />
          <span className="font-semibold">Create</span>
        </button>
        <img
          className="rounded-full w-7 h-7 mix-blend-multiply"
          src="https://i.pinimg.com/1200x/77/bf/75/77bf7584f12ffeb1ab9b2b08228b21aa.jpg"
          alt="Notification"
        />

        <img
          className="rounded-full w-8 h-8"
          src="https://avatars.githubusercontent.com/u/109482893?v=4"
          alt="User"
        />
      </div>
    </div>
  );
};

export default Header;
