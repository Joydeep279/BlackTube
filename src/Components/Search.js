import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchVideoLayout from "./SearchVideoLayout";

const Search = () => {
  const [getVideoId] = useSearchParams("search_query");
  const searchQuery = getVideoId.get("search_query");
  console.log(searchQuery);
  const [searchData, setSearchData] = useState([]);
  async function getSearchData() {
    const apiData = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=AIzaSyCfUOj40aTqNvXjQsxAqDcAqBnexvcWnvw`
    );
    const data = await apiData.json();
    console.log(data.items);
    setSearchData(data.items);
  }
  useEffect(() => {
    getSearchData();
  }, []);
  useEffect(() => {
    getSearchData();
  }, [searchQuery]);
  return (
    <div className="flex flex-col gap-10 m-10 justify-center w-full items-start">
      {searchData.map((items) => (
        <SearchVideoLayout info={items} key={items.id.videoId} />
      ))}
    </div>
  );
};

export default Search;
