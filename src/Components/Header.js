import { useDispatch, useSelector } from "react-redux";
import { toggleNavState } from "../utils/navState";
import { useEffect, useState, useRef } from "react";
import { addToCache } from "../utils/searchCache";
import logo from "../img/YT-logo.png";
import githubLogo from "../img/Github.gif";
import linkedinLogo from "../img/Linkedin.gif";
import crossIcon from "../img/cross-icon.svg";
import searchIcon from "../img/search-icon.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchBoxStatus, setSearchBoxStatus] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const searchCache = useSelector((store) => store.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const suggestionsRef = useRef(null);
  const inputRef = useRef(null);

  async function callSearchAPI() {
    const apiData = await fetch(
      `https://suggestqueries.google.com/complete/search?client=firefox&q=${searchText}`
    );
    const jsonData = await apiData.json();
    setSearchSuggestion(jsonData[1]);
    dispatch(addToCache({ [searchText]: jsonData[1] }));
  }

  useEffect(() => {
    const apiTimer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSearchSuggestion(searchCache[searchText]);
      } else if (searchText) callSearchAPI();
    }, 300);

    return () => {
      clearTimeout(apiTimer);
    };
  }, [searchText]);

  useEffect(() => {
    if (searchBoxStatus && searchSuggestion.length > 0) {
      setActiveSuggestionIndex(-1);
    }
  }, [searchSuggestion]);

  const toggleNavStateFn = () => {
    dispatch(toggleNavState());
  };

  const handleKeyDown = (e) => {
    if (!searchBoxStatus || searchSuggestion.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggestionIndex((prev) =>
        prev < searchSuggestion.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev > -1 ? prev - 1 : prev));
    } else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
      e.preventDefault();
      const selectedSuggestion = searchSuggestion[activeSuggestionIndex];
      setSearchText(selectedSuggestion);
      setSearchBoxStatus(false);
      navigate(
        `/results?search_query=${encodeURIComponent(selectedSuggestion)}`
      );
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setSearchBoxStatus(false);
    navigate(`/results?search_query=${encodeURIComponent(suggestion)}`);
  };

  const clearSearch = () => {
    setSearchText("");
    setSearchSuggestion([]);
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-row justify-between px-0 items-start sticky top-0 pb-1 min-w-14 backdrop-blur-md bg-white/90 z-50">
      <div className="flex flex-row items-center gap-2.5 pt-2.5 ml-5">
        <img
          onClick={() => toggleNavStateFn()}
          className="w-8 h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="sideBTN"
        />
        <Link to={"/"}>
          <img className="w-[120px] h-6" src={logo} alt="YouTube" />
        </Link>
      </div>
      <div className="flex flex-row items-center rounded-xl border-1 border-solid pt-1 font-sans font-medium text-gray-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearchBoxStatus(false);
            navigate(`/results?search_query=${encodeURIComponent(searchText)}`);
          }}>
          <div className="relative">
            <input
              ref={inputRef}
              onFocus={() => {
                setSearchBoxStatus(true);
                setActiveSuggestionIndex(-1);
              }}
              onBlur={() => {
                setTimeout(() => {
                  setSearchBoxStatus(false);
                }, 250);
              }}
              onKeyDown={handleKeyDown}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search"
              type="text"
              className="w-[525px] h-10 rounded-l-2xl border-r-2 px-5 py-1 border border-gray-300 focus:border-blue-500 outline-none placeholder:font-normal"
            />
            {searchText && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                <img
                  className="w-4 h-4 mix-blend-multiply"
                  src={crossIcon}
                  alt="⛌"
                />
              </button>
            )}
          </div>
          {searchBoxStatus &&
            searchText !== "" &&
            searchSuggestion.length > 0 && (
              <ul
                ref={suggestionsRef}
                className="fixed bg-white w-[525px] rounded-xl px-2 py-1 my-1 font-sans border shadow-md">
                {searchSuggestion.map((item, index) => (
                  <li
                    key={index}
                    className={`py-2.5 px-1 hover:bg-slate-50 hover:border rounded-lg ${
                      index === activeSuggestionIndex ? "bg-slate-100" : ""
                    }`}
                    onMouseDown={() => handleSuggestionClick(item)}>
                    <img
                      src={searchIcon}
                      className="w-5 h-5 inline mr-2.5"
                      alt="search-icon"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}
        </form>

        <button
        onClick={(e)=>{
          navigate(
        `/results?search_query=${searchText}`
      );
        }}
          type="submit"
          className="rounded-r-2xl border-none bg-gray-100 px-5 py-1 hover:bg-gray-200">
          <img
            className="w-7 h-8 mix-blend-multiply"
            alt="Search"
            src={searchIcon}
          />
        </button>
        <button className="rounded-full bg-gray-100 ml-5 p-3 hover:bg-gray-200">
          <img
            src="https://cdn-icons-png.flaticon.com/512/566/566100.png"
            alt="useMic"
            className="w-5 h-5"
          />
        </button>
      </div>
      <div className="flex flex-row py-2.5 gap-5 items-center">
        <a
          target="_blank"
          href="https://github.com/Joydeep279/BlackTube"
          className="bg-transparent mix-blend-multiply">
          <img src={githubLogo} alt="Github" className="w-7 h-7" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/joydeep-nath007"
          className="bg-transparent mix-blend-multiply">
          <img src={linkedinLogo} alt="LinkedIN" className="w-8 h-8" />
        </a>
      </div>
      <div className="flex flex-row items-center gap-8 pr-5 pt-2">
        <button className="flex justify-start items-center rounded-3xl px-1.5 py-3.5 h-9 bg-gray-100 hover:bg-gray-200">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Plus_symbol.svg"
            className="w-12 h-12"
            alt="+"
          />
          <span className="font-semibold">Create</span>
        </button>
        <img
          className="rounded-full w-[1.5rem] h-[1.5rem] cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/3602/3602145.png"
          alt="Notification"
        />

        <img
          className="rounded-full w-8 h-8 cursor-pointer"
          src="https://avatars.githubusercontent.com/u/109482893?v=4"
          alt="User"
        />
      </div>
    </div>
  );
};

export default Header;
