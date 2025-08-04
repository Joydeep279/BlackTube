import { useDispatch, useSelector } from "react-redux";
import { toggleNavState } from "../utils/navState";
import { useEffect, useState } from "react";
import { addToCache } from "../utils/searchCache";
import logo from "../img/blackTube.png";
const Header = () => {
  const [searchBoxStatus, setSearchBoxStatus] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  async function callSearchAPI() {
    const apiData = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&q=${searchText}`
    );
    const jsonData = await apiData.json();
    setSearchSuggestion(jsonData[1]);
    dispatch(addToCache({ [searchText]: jsonData[1] }));
  }
  useEffect(() => {
    const apiTimer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSearchSuggestion(searchCache[searchText]);
      } else callSearchAPI();
    }, 300);

    return () => {
      clearTimeout(apiTimer);
    };
  }, [searchText]);
  const toggleNavStateFn = () => {
    dispatch(toggleNavState());
  };
  return (
    <div className="flex flex-row justify-between px-5 items-start sticky top-0 bg-white pb-5">
      <div className="flex flex-row items-center gap-2 pt-1">
        <img
          onClick={() => toggleNavStateFn()}
          className="w-8 h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="sideBTN"
        />
        <img className="w-32 h-10" src={logo} alt="YouTube" />
      </div>
      <div className="flex flex-row items-center rounded-xl  border-1 border-solid pt-1">
        <div>
          <input
            onFocus={() => {
              setSearchBoxStatus(true);
            }}
            onBlur={() => {
              setSearchBoxStatus(false);
            }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
            type="text"
            className=" w-[525px] h-10 rounded-l-2xl border-r-2 px-5 py-1 border-[0.5px] border-gray-300 focus:outline-indigo-200 outline-[0.2px]"
          />
          {searchBoxStatus && searchText !== "" && (
            <ul className="fixed bg-white w-[525px] rounded-xl px-2 py-1 my-1 font-sans border">
              {searchSuggestion.map((items) => (
                <li className="py-2.5 px-3 hover:bg-slate-50 hover:shadow-sm rounded-lg">
                  {items}
                </li>
              ))}
            </ul>
          )}
        </div>

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
