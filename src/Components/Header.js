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
  const [mobileSearchVisible, setMobileSearchVisible] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const suggestionsRef = useRef(null);
  const inputRef = useRef(null);

  async function callSearchAPI() {
    try {
      const apiKey = "AIzaSyCfUOj40aTqNvXjQsxAqDcAqBnexvcWnvw"; // Your YouTube API key
      const apiData = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(
          searchText
        )}&type=video&key=${apiKey}`
      );
      const jsonData = await apiData.json();
      const suggestions = jsonData.items
        ? jsonData.items.map((item) => item.snippet.title)
        : [];
      setSearchSuggestion(suggestions);
      dispatch(addToCache({ [searchText]: suggestions }));
    } catch (error) {
      console.error("Search suggestion error:", error);
      setSearchSuggestion([]);
    }
  }

  useEffect(() => {
    const apiTimer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSearchSuggestion(searchCache[searchText]);
      } else if (searchText && searchText.length >= 2) {
        callSearchAPI();
      } else {
        setSearchSuggestion([]);
      }
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
    <div className="flex flex-row justify-between items-center fixed top-0 w-full h-14 backdrop-blur-md bg-white/90 z-50  px-4">
      {/* Left Section - Logo and Menu */}
      <div className="flex items-center gap-4">
        <img
          onClick={() => toggleNavStateFn()}
          className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="Menu"
        />
        <Link to={"/"}>
          <img className="h-5 md:h-6" src={logo} alt="YouTube" />
        </Link>
      </div>

      {/* Center Section - Search (Hidden on Mobile) */}
      <div className="hidden md:flex flex-1 justify-center max-w-2xl">
        <form
          className="flex w-full max-w-[600px]"
          onSubmit={(e) => {
            e.preventDefault();
            setSearchBoxStatus(false);
            navigate(`/results?search_query=${encodeURIComponent(searchText)}`);
          }}>
          <div className="relative flex-1">
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
              className="w-full h-10 rounded-l-full border border-gray-300 px-4 focus:border-blue-500 outline-none"
            />
            {searchText && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                <img className="w-4 h-4" src={crossIcon} alt="Clear" />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-6 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
            <img
              className="w-5 h-5 mix-blend-multiply"
              alt="Search"
              src={searchIcon}
            />
          </button>
          {searchBoxStatus &&
            searchText !== "" &&
            searchSuggestion.length > 0 && (
              <ul
                ref={suggestionsRef}
                className="absolute top-full left-0 right-52 mt-1 bg-white rounded-xl py-2 border shadow-lg max-w-[600px] mx-auto">
                {searchSuggestion.map((item, index) => (
                  <li
                    key={index}
                    className={`py-2 px-4 hover:bg-gray-100 cursor-pointer ${
                      index === activeSuggestionIndex ? "bg-gray-100" : ""
                    }`}
                    onMouseDown={() => handleSuggestionClick(item)}>
                    <div className="flex items-center gap-3">
                      <img
                        src={searchIcon}
                        className="w-4 h-4 mix-blend-multiply"
                        alt="search"
                      />
                      <span>{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
        </form>
        <button className="ml-4 p-2.5 rounded-full hover:bg-gray-100">
          <img
            src="https://cdn-icons-png.flaticon.com/512/566/566100.png"
            alt="Voice Search"
            className="w-5 h-5"
          />
        </button>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Search Icon (Mobile Only) */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-full"
          onClick={() => setMobileSearchVisible(true)}>
          <img className="w-6 h-6" alt="Search" src={searchIcon} />
        </button>

        {/* Social Links (Desktop Only) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            target="_blank"
            href="https://github.com/Joydeep279/BlackTube"
            className=" mix-blend-multiply rounded">
            <img src={githubLogo} alt="Github" className="w-7 h-7" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/joydeep-nath007"
            className="mix-blend-multiply rounded">
            <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>

        {/* Create Button (Desktop Only) */}
        <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-200 bg-gray-100">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Plus_symbol.svg"
            className="w-6 h-6"
            alt="Create"
          />
          <span className="font-medium">Create</span>
        </button>

        {/* Notification and Profile */}
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <img
            className="w-6 h-6"
            src="https://cdn-icons-png.flaticon.com/512/3602/3602145.png"
            alt="Notifications"
          />
        </button>
        <button className="overflow-hidden rounded-full hover:bg-gray-100">
          <img
            className="w-8 h-8"
            src="https://avatars.githubusercontent.com/u/109482893?v=4"
            alt="Profile"
          />
        </button>
      </div>

      {/* Mobile Search Overlay */}
      {mobileSearchVisible && (
        <div className="fixed inset-0 bg-white z-[60] md:hidden">
          <div className="flex items-center h-14 px-4 gap-4 border-b">
            <button
              onClick={() => setMobileSearchVisible(false)}
              className="p-2 hover:bg-gray-100 rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2223/2223615.png"
                className="w-6 h-6"
                alt="Back"
              />
            </button>
            <form
              className="flex flex-1"
              onSubmit={(e) => {
                e.preventDefault();
                if (searchText.trim()) {
                  setMobileSearchVisible(false);
                  navigate(
                    `/results?search_query=${encodeURIComponent(searchText)}`
                  );
                }
              }}>
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  autoFocus
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
                  placeholder="Search YouTube"
                  type="text"
                  className="w-full h-10 border-b border-gray-300 px-4 focus:border-blue-500 outline-none"
                />
                {searchText && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                    <img className="w-4 h-4" src={crossIcon} alt="Clear" />
                  </button>
                )}
              </div>
              <button type="submit" className="px-6 hover:bg-gray-100">
                <img className="w-5 h-5" alt="Search" src={searchIcon} />
              </button>
            </form>
          </div>
          {searchBoxStatus &&
            searchText !== "" &&
            searchSuggestion.length > 0 && (
              <ul className="bg-white py-2">
                {searchSuggestion.map((item, index) => (
                  <li
                    key={index}
                    className={`py-3 px-4 hover:bg-gray-50 active:bg-gray-100 ${
                      index === activeSuggestionIndex ? "bg-gray-50" : ""
                    }`}
                    onTouchStart={() => {
                      setSearchText(item);
                      setMobileSearchVisible(false);
                      navigate(
                        `/results?search_query=${encodeURIComponent(item)}`
                      );
                    }}>
                    <div className="flex items-center gap-4">
                      <img
                        src={searchIcon}
                        className="w-4 h-4 opacity-60"
                        alt="search"
                      />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
        </div>
      )}
    </div>
  );
};

export default Header;
