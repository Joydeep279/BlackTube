import { useState, useMemo } from "react";
import findNthPrime from "../utils/Helper";
const HookDemo = () => {
  const [isdark, setTheme] = useState(false);
  const [value, setValue] = useState(0);

  //   const prime = useMemo(() => findNthPrime(value), [value]);
  const prime = findNthPrime(value);
  console.log("Render() Called!");
  return (
    <div
      className={
        "w-80 h-80  flex flex-col items-center p-5 gap-5 shadow-xl " +
        (isdark && "bg-gray-300 text-white")
      }>
      <input
        className="shadow bg-slate-200 outline-blue-500 border-black p-2.5"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="shadow-md px-5 py-2 rounded-md"
        onClick={() => setTheme(!isdark)}>
        toggle Theme
      </button>
      <span>Prime: {prime}</span>
    </div>
  );
};

export default HookDemo;
