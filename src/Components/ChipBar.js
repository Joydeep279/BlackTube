import ChipData from "../utils/Chip-Bar-Data";
const ChipBar = () => {
  return (
    <div className="flex flex-row gap-2 sm:gap-4 items-center border-none sticky top-[52px] px-2 sm:px-4 pt-1.5 pb-4 backdrop-blur-md bg-white/90 z-0 overflow-x-scroll overflow-auto no-scrollbar">
      {ChipData.map((item) => (
        <button
          key={item.chipCloudChipRenderer.trackingParams}
          className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-gray-100 hover:bg-gray-200 
         text-gray-800  
         transition-colors duration-200 focus:bg-black focus:text-white text-nowrap">
          {item.chipCloudChipRenderer.text.runs[0].text}
        </button>
      ))}
    </div>
  );
};

export default ChipBar;
