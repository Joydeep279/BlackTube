import { useSelector } from "react-redux";

const SideBar = () => {
  const navState = useSelector((store) => store.nav.isNavOpen);
  if (!navState) return null;

  const tailwindConfigSideBar =
    "flex justify-center flex-col pl-5 gap-2  items-center";
  return (
    <div className="flex flex-col gap-2 min-w-[225px] items-center">
      <ul className={tailwindConfigSideBar}>
        <li>HOME</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul className={tailwindConfigSideBar}>
        <li>You</li>
        <li>History</li>
      </ul>
      <ul className={tailwindConfigSideBar}>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
    </div>
  );
};
export default SideBar;
